import React, { ReactNode } from 'react';

import * as Styles from './styles';
import PortraitCard from '../../Card/Portrait';

export interface PortraitRailCardProps extends Styles.IPortraitRailCard {
  children: ReactNode | string;
  PortraitRailCardImage: string;
  status: 'active' | 'deactivated';
  logo: string;
}

const PortraitArgs = {
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-portrait-2x.png?alt=media',
};

export function PortraitRailCard({
  // children,
  // PortraitRailCardImage,
  // status = 'active',
  // variant = 'image',
  // position = 'center',
  // logo = '',
}: PortraitRailCardProps) {
  return (
    <Styles.PortraitRailCard
    >
      <PortraitCard {...PortraitArgs}>
        Button 1
      </PortraitCard>
    </Styles.PortraitRailCard>
  );
}
