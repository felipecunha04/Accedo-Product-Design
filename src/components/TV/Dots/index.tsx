import React from "react";
import * as Styles from './styles';

export interface DotsProps {
  items: number;
  active: number;
  onClick: (active: number) => void;
};

const Dots = React.memo<DotsProps>(({ items, active, onClick }) => {
  return (
    <Styles.DotList>
      {Array.from(Array(items).keys()).map((dot: number) => (
        <Styles.Dots
          key={dot}
          className={active === dot ? 'active-dot' : ''}
          onClick={() => onClick(dot)}
        />
      ))}
    </Styles.DotList>
  );
});

export default Dots;