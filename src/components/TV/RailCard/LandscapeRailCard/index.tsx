import React, { ReactNode } from 'react';

import * as Styles from './styles';
import LandScapeCard from '../../Card/LandScape';

export interface LandscapeRailCardProps extends Styles.ILandscapeRailCard {
  children: ReactNode | string;
  LandscapeRailCardImage: string;
  status: 'active' | 'deactivated';
  logo: string;
}

const LandScapeArgs = {
  subtitle: 'Secondary text',
  progress: 43,
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-landscape.png?alt=media',
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
    <Styles.LandscapeRailCard
    >
      <LandScapeCard {...LandScapeArgs}>
      </LandScapeCard>
    </Styles.LandscapeRailCard>
  );
}
