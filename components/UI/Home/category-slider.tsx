"use client";

import WidthWrapper from "@/components/Common/width-wrapper";
import useSlider from "@/lib/hooks/useSlider";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoriesSlider = () => {
  const { slideLeft, slider, slideRight } = useSlider(250);

  return (
    <WidthWrapper>
      <div className="relative">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="absolute cursor-pointer -left-4 top-[0.5rem]"
          onClick={slideLeft}
        />
        <ul className="flex items-center space-x-6 text-sm overflow-x-auto py-1 cat-slider duration-200" ref={slider}>
          {Array.from({ length: 14 }).map((_, idx) => (
            <li key={idx} className="text-sm duration-200 p-1 cursor-pointer flex-shrink-0">
              Category {idx}
            </li>
          ))}
        </ul>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="absolute cursor-pointer -right-4 top-[0.5rem]"
          onClick={slideRight}
        />
      </div>
    </WidthWrapper>
  );
};

export default CategoriesSlider;
