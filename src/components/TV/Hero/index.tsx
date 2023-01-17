import React, { useState } from 'react';
import Dots from '../Dots';
import { Button } from '../Button';

import * as Styles from './styles';

export interface HeroProps {
  slides: any[];
  children: (props: any) => JSX.Element;
  visibleItemsNumber?: number;
}

export function Hero({
  slides,
  visibleItemsNumber = 1,
}: HeroProps) {
  const [start, setStart] = useState(0);

  const isControlsVisible = slides.length > visibleItemsNumber;

  const visibleItems = isControlsVisible
    ? slides
        .concat(slides.slice(0, visibleItemsNumber))
        .slice(start, start + visibleItemsNumber)
    : slides;

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
        <h1>
          Content Title
        </h1>

        <span>Subtitle text</span>
        
        <Styles.ButtonContainer>
          <Button>
            First Button
          </Button>

          <Button>
            Second Button
          </Button>
        </Styles.ButtonContainer>

        {isControlsVisible && (
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
