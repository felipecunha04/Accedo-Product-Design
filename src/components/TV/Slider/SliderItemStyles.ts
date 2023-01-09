import styled from 'styled-components';

type Props = {
  zoomFactor: number;
  slideMargin: number;
  visibleSlides: number;
  className: string;
};

export const StyledSliderItem = styled.div<Props>`
  margin: 0 ${(props) => props.slideMargin}px;
  transition: transform 500ms ease;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  transform: scale(1);
  user-select: none;

  flex: 0 0
    calc(
      100% / ${(props) => props.visibleSlides} -
        ${(props) => props.slideMargin * 2}px
    );

  img {
    height: 100%;
    width: 100%;
    border-radius: 1.5vw;
    box-sizing: border-box;
  }
`;
