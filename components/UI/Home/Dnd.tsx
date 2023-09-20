"use client";
import WidthWrapper from "@/components/Common/width-wrapper";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

interface CardImage {
  id?: string | number;
  path: string;
}

interface ImageCard {
  id?: string | number;
  image: CardImage;
  src: string;
  moveImage?: any;
  index?: number;
}

const Card = ({ src, id, index, moveImage }: ImageCard): JSX.Element => {
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
    <div className="overflow-hidden rounded-lg relative group" ref={ref}>
      <Image
        src={src}
        alt="Image"
        width={600}
        height={600}
        className="w-full h-full object-cover group-hover:scale-105 duration-200"
      />
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

  return (
    <>
      <WidthWrapper>
        <div className="my-8 grid grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card key={index} image={image} src={image.path} id={image.id} index={index} moveImage={moveImage} />
          ))}
        </div>
      </WidthWrapper>
    </>
  );
};

export default Dnd;
