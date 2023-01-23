import React from 'react';

import * as Styles from './styles';
import {LandScapeCard} from '../../Card/LandScape';
import Slider from '../../Slider';

interface Card {
  title?: string;
  subtitle?: string;
  imgSrc: string;
}
export interface LandscapeRailCardProps extends Styles.ILandscapeRailCard {
  cardsArray: Card[];
  zoomFactor: number;
  slideMargin: number;
  maxVisibleSlides: number;
  pageTransition: number;
}

export function LandscapeRailCard({
  cardsArray,
  zoomFactor, // How much the image should zoom on hover in percent
  slideMargin, // Margin on each side of slides
  maxVisibleSlides,
  pageTransition // Transition when flipping pages
}: LandscapeRailCardProps) {
  return (
    <Slider zoomFactor={zoomFactor} slideMargin={slideMargin} maxVisibleSlides={maxVisibleSlides} pageTransition={pageTransition}
    >
      {cardsArray.map(slide => (
        <LandScapeCard {...slide}>
        </LandScapeCard>
      ))}
    </Slider>
  );
}
