import React from 'react';

import * as Styles from './styles';
import {PortraitCard} from '../../Card/Portrait';
import Slider from '../../Slider';

interface Card {
  title?: string;
  imgSrc: string;
}

export interface PortraitRailCardProps extends Styles.IPortraitRailCard {
  cardsArray: Card[];
  zoomFactor: number;
  slideMargin: number;
  maxVisibleSlides: number;
  pageTransition: number;
}

export function PortraitRailCard({
  cardsArray,
  zoomFactor, // How much the image should zoom on hover in percent
  slideMargin, // Margin on each side of slides
  maxVisibleSlides,
  pageTransition // Transition when flipping pages
}: PortraitRailCardProps) {
  return (
    <Slider zoomFactor={zoomFactor} slideMargin={slideMargin} maxVisibleSlides={maxVisibleSlides} pageTransition={pageTransition}>
      {cardsArray.map(slide => (
        <PortraitCard {...slide} />
      ))}
    </Slider>
  );
}
