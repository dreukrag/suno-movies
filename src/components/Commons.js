import { useMemo, useReducer, useState } from "react";
import styled from "styled-components";

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  overflow: auto;
`;

export const FlexContent = styled(Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Ball = styled.div`
  background: #fe3189;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  display: inline-block;
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-height: min-content;
  transform: translateX(
    calc(
      -100% / ${({ maxItemsToDisplay }) => maxItemsToDisplay} * ${({ index }) => index}
    )
  );
  transition: transform 2s;
`;

const Item = styled.div`
  flex-shrink: 0;
  width: calc(100% / ${({ maxItemsToDisplay }) => maxItemsToDisplay});
  height: 128px;
  color: white;
`;

export const Carousel = ({
  children = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  maxItemsToDisplay = 2,
}) => {
  const size = useMemo(() => children.length, [children]);
  const max = useMemo(() => children.length - 1, [children]);

  const indexInitial = { index: 0 };
  const indexReducer = ({ index }, action) => {
    switch (action) {
      case "prev":
        if (index >= 1) return { index: index - 1 };
        else return { index: 0 };
      case "next":
        if (index < max) return { index: index + 1 };
        else return { index: max };
      case "reset":
        return { index: 0 };
      default:
    }
  };
  const [{ index }, indxDispatch] = useReducer(indexReducer, indexInitial);
  const nextPage = () => indxDispatch("next");
  const previousPage = () => indxDispatch("prev");
  const resetCarousel = () => indxDispatch("reset");
  return (
    <>
      <CarouselWrapper>
        <ContentWrapper {...{ maxItemsToDisplay, index }}>
          {children.map((c) => (
            <Item key={c} {...{ maxItemsToDisplay }}>
              {c}
            </Item>
          ))}
        </ContentWrapper>
      </CarouselWrapper>
      <button onClick={nextPage}>+</button>
      <button onClick={previousPage}>-</button>
      <button onClick={resetCarousel}>R</button>
      {index}
    </>
  );
};
