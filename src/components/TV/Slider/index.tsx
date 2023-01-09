import React, { useState, useEffect, useRef } from 'react';
import SliderItem from './SliderItem';
import { StyledSliderWrapper, StyledSlider } from './SliderStyles';

type SliderProps = {
  children?: any;
  zoomFactor: number;
  slideMargin: number;
  maxVisibleSlides: number;
  pageTransition: number;
};

const numberOfSlides = (maxVisibleSlides: number, windowWidth: number) => {
  if (windowWidth > 1200) return maxVisibleSlides;
  if (windowWidth > 992) return 4;
  if (windowWidth > 768) return 3;
  return 2;
};

const Slider: React.FC<SliderProps> = ({
  children,
  zoomFactor,
  slideMargin,
  maxVisibleSlides,
  pageTransition
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [transformValue, setTransformValue] = useState(`-${zoomFactor / 2}%`);
  const [scrollSize, setScrollSize] = useState(0);
  
  const sliderRef = useRef<HTMLElement>(null);
  const tabIndexValue = 0;

  const visibleSlides = numberOfSlides(maxVisibleSlides, scrollSize);
  const totalPages: number = Math.ceil(children.length / visibleSlides) - 1;

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      setScrollSize(entries[0].contentRect.width);
    });
    //@ts-ignore
    resizeObserver.observe(sliderRef.current);
  }, [sliderRef]);


  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      if (currentPage > totalPages) setCurrentPage(totalPages);
      sliderRef.current.style.transform = `translate3D(-${
        currentPage * scrollSize
      }px, 0, 0)`;
    }
  }, [sliderRef, currentPage, scrollSize, totalPages]);

  const handleSlideMove = (e: any) => {
    if (e.keyCode === 39) return setCurrentPage(currentPage + (1));
    if (e.keyCode === 37) return setCurrentPage(currentPage + (-1));

    if (sliderRef.current) {
      if (e.keyCode === 39) {
        sliderRef.current.style.transform = `translate3D(-${
          (currentPage + (1)) * scrollSize
        }px, 0, 0)`;
      } else if (e.keyCode === 37) {
        sliderRef.current.style.transform = `translate3D(-${
          (currentPage + (-1)) * scrollSize
        }px, 0, 0)`;
      }
    }
  };

  const handleMouseOver = (id: number) => {
    if (id % visibleSlides === 1) setTransformValue('0%'); // left
    if (id % visibleSlides === 0) setTransformValue(`-${zoomFactor}%`); // right
  };

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`);
  };

  const assignSlideClass = (index: number, visibleSlides: number) => {
    const classes = ['right', 'left'];
    return classes[index % visibleSlides] || '';
  };

  return (
    <StyledSliderWrapper zoomFactor={zoomFactor} visibleSlides={visibleSlides}>
      <StyledSlider
        visibleSlides={visibleSlides}
        transformValue={transformValue}
        zoomFactor={zoomFactor}
        slideMargin={slideMargin}
        pageTransition={pageTransition}
        onKeyDown={(e) => handleSlideMove(e)}
        ref={sliderRef}
        tabIndex={tabIndexValue}
      >
        {children.map((child: any, i: any) => (
          <SliderItem
            key={i}
            slideMargin={slideMargin}
            visibleSlides={visibleSlides}
            zoomFactor={zoomFactor}
            slideClass={assignSlideClass(i + 1, visibleSlides)}
            id={i + 1}
            callback={handleMouseOver}
            callbackOut={handleMouseOut}
          >
            {child}
          </SliderItem>
        ))}
      </StyledSlider>
    </StyledSliderWrapper>
  );
};

export default Slider;
