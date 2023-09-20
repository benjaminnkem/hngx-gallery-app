"use client";
import WidthWrapper from "@/components/Common/width-wrapper";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

interface CardImage {
  id?: string | number;
  path: string;
  tag: string;
}

interface ImageCard {
  id?: string | number;
  image: CardImage;
  src: string;
  moveImage?: any;
  index?: number;
  tag: string;
}

const Card = ({ src, id, index, moveImage, tag }: ImageCard): JSX.Element => {
  const ref = useRef<any>(null);

  const [, drop] = useDrop({
    accept: "image",
    hover: (item: any, monitor: any) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex! && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex! && hoverClientY > hoverMiddleY) {
        return;
      }

      moveImage(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div className="overflow-hidden rounded-lg relative group max-h-[35rem]" ref={ref}>
      <Image
        src={src}
        alt="Image"
        width={700}
        height={700}
        className="w-full h-full object-cover group-hover:scale-105 duration-200"
      />
      <p className="text-sm font-bold absolute left-2 top-2 px-3 p-[1.8px] rounded-full border border-ray-400 bg-black bg-opacity-40 text-white text-shadow">
        {tag}
      </p>
    </div>
  );
};

const Dnd = ({ initImages }: { initImages: CardImage[] }) => {
  const [images, setImages] = useState(initImages);

  const moveImage = useCallback((dragIndex: any, hoverIndex: any) => {
    setImages((prevCards: any) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];

      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  const filterImages = (tag: string) => {
    if (tag === "") {
      setImages(initImages);
      return;
    }

    const updatedImage = images.filter((image) => image.tag.includes(tag));
    setImages(updatedImage);

    if (updatedImage.length === 0) {
      const updatedImage = images.filter((image) => image.tag.includes(tag));
      setImages(updatedImage);
    }
  };

  return (
    <>
      <WidthWrapper>
        <div className="my-10 space-y-4">
          <h3 className="font-bold text-xl">Filter Images</h3>
          <div className="flex items-center space-x-2 border-2 border-[#e9e9e9] max-w-2xl focus-within:border-[#d3d3d3] text-gray-800 duration-200 px-4 rounded-lg shadow-lg bg-white">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              className="w-full bg-transparent py-2 outline-none flex-grow text-gray-800"
              placeholder="Search for an image"
              onChange={(e) => filterImages(e.target.value)}
            />
          </div>
        </div>

        <div className="my-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 duration-200 gap-8">
          {images.map((image, index) => (
            <Card
              key={index}
              image={image}
              src={image.path}
              id={image.id}
              index={index}
              moveImage={moveImage}
              tag={image.tag}
            />
          ))}
        </div>
      </WidthWrapper>
    </>
  );
};

export default Dnd;
