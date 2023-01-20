import React, { useState, useEffect, useRef } from 'react';
import Dots from '../Dots';

import * as Styles from './styles';

interface Slides {
  id: number;
  image: string;
}

export interface HeroProps {
  slides: Slides[];
  children: any;
  visibleItemsNumber?: number;
  title?: string;
  subtitle?: string;
  showDots?: boolean;
  slideDelay?: number
}

export function Hero({
  children,
  slides,
  visibleItemsNumber = 1,
  title,
  subtitle,
  showDots = true,
  slideDelay = 2000
}: HeroProps) {
  const [start, setStart] = useState(0);
  const timeoutRef = useRef<any>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const isControlsVisible = slides.length > visibleItemsNumber;

  const visibleItems = isControlsVisible ? slides.concat(slides.slice(0, visibleItemsNumber)).slice(start, start + visibleItemsNumber) : slides;

  useEffect(() => {
    if (slideDelay === 0) return

    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
      setStart((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      slideDelay
    );

    return () => {
      resetTimeout();
    };
  }, [start]);

  return (
    <>
      <Styles.Hero>
        <Styles.HeroList>
          {visibleItems.map((slide: any) =>
            <Styles.HeroImg
              id={slide.id}
              src={slide.image}
              alt={`image-${slide.id}`}
            />
          )}
        </Styles.HeroList>
      </Styles.Hero>

      <Styles.HeroContent>
        {title && (
          <Styles.HeroTitle>
            {title}
          </Styles.HeroTitle>
        )}

        {subtitle && (
          <Styles.HeroSubtitle>
            {subtitle}
          </Styles.HeroSubtitle>
        )}
        
        <Styles.ButtonContainer>
          {children}
        </Styles.ButtonContainer>

        {showDots || isControlsVisible && (
          <Styles.HeroDotControls>
            <Dots
              items={slides.length}
              active={start}
              onClick={(active: number) => setStart(active)}
            />
          </Styles.HeroDotControls>
        )}
      </Styles.HeroContent>
    </>
  );
}
