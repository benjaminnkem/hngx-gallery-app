import { useRef } from "react";

const useSlider = (slideAmount: number) => {
  const slider = useRef<any>();

  const slideLeft = () => (slider.current ? (slider.current.scrollLeft -= slideAmount ? slideAmount : 500) : "");
  const slideRight = () => (slider.current ? (slider.current.scrollLeft += slideAmount ? slideAmount : 500) : "");

  return { slider, slideLeft, slideRight };
};

export default useSlider;
