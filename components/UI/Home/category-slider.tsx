"use client";

import WidthWrapper from "@/components/Common/width-wrapper";
import useSlider from "@/lib/hooks/useSlider";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const CategoriesSlider = () => {
  const { slideLeft, slider, slideRight } = useSlider(500);

  return (
    <WidthWrapper>
      <div className="relative">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="absolute cursor-pointer -left-4 top-4 -my-1"
          onClick={slideLeft}
        />
        <ul className="flex items-center space-x-2 overflow-x-auto py-1 cat-slider duration-200" ref={slider}>
          {Array.from({ length: 20 }).map((_, idx) => (
            <li
              key={idx}
              className="text-sm border-2 border-purple-500 px-4 py-1 rounded-2xl duration-200 hover:bg-purple-500 hover:text-white cursor-pointer"
            >
              Category
            </li>
          ))}
        </ul>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="absolute cursor-pointer -right-4 top-4 -my-1"
          onClick={slideRight}
        />
      </div>
    </WidthWrapper>
  );
};

export default CategoriesSlider;
