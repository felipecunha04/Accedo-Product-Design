import React, { ReactNode } from 'react';

import * as Styles from './styles';
import LandScapeCard from '../../Card/LandScape';
import Slider from '../../Slider';

export interface LandscapeRailCardProps extends Styles.ILandscapeRailCard {
  children: ReactNode | string;
  LandscapeRailCardImage: string;
  status: 'active' | 'deactivated';
  logo: string;
}

const FakeData = {
  subtitle: 'Primary text',
  progress: 43,
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-landscape.png?alt=media',
}

const LandscapeArray = [FakeData, FakeData, FakeData, FakeData, FakeData];

const SliderProps = {
  zoomFactor: 30, // How much the image should zoom on hover in percent
  slideMargin: 10, // Margin on each side of slides
  maxVisibleSlides: 5,
  pageTransition: 500 // Transition when flipping pages
};

export function LandscapeRailCard({
  // children,
  // LandscapeRailCardImage,
  // status = 'active',
  // variant = 'image',
  // position = 'center',
  // logo = '',
}: LandscapeRailCardProps) {
  return (
    <Slider {...SliderProps}
    >
      {LandscapeArray.map(slide => (
        <LandScapeCard {...slide}>
        </LandScapeCard>
      ))}
    </Slider>
  );
}
