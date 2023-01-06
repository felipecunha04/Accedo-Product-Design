import React, { ReactNode } from 'react';

import * as Styles from './styles';
import PortraitCard from '../../Card/Portrait';
import Slider from '../../Slider';

export interface PortraitRailCardProps extends Styles.IPortraitRailCard {
  children: ReactNode | string;
  PortraitRailCardImage: string;
  status: 'active' | 'deactivated';
  logo: string;
}

const SliderProps = {
  zoomFactor: 30, // How much the image should zoom on hover in percent
  slideMargin: 10, // Margin on each side of slides
  maxVisibleSlides: 5,
  pageTransition: 500 // Transition when flipping pages
};

const FakeData = {
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-portrait-2x.png?alt=media',
};

const PortraitArray = [FakeData, FakeData, FakeData, FakeData, FakeData];

export function PortraitRailCard({
  // children,
  // PortraitRailCardImage,
  // status = 'active',
  // variant = 'image',
  // position = 'center',
  // logo = '',
}: PortraitRailCardProps) {
  return (
    <Slider {...SliderProps}>
      {PortraitArray.map(slide => (
        <PortraitCard {...slide} />
      ))}
    </Slider>
  );
}
