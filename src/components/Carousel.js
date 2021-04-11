import { useMemo, useReducer } from "react";
import styled from "styled-components";
import chevron_right from "components/assets/chevron_right.svg";
import chevron_left from "components/assets/chevron_left.svg";
import { Colors, Star } from "components/Commons";
import { useSelector } from "react-redux";
const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const Poster = styled.img`
  width: 100%;
`;

const Ellipsis = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
`;

const Title = styled(Ellipsis)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  min-height: 30px;
  align-items: center;
  color: #eaeaea;
  margin-top: 12px;
`;
const Genre = styled(Ellipsis)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  min-height: 24px;
  color: ${Colors.pink};
`;

const Vote = styled(Ellipsis)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  min-height: 24px;
  color: #eaeaea;
  display: flex;
  align-items: baseline;
`;

// TO-DO: Loader while imaging is loading.
export const CarouselMovieCard = ({
  movie: { title, vote_average, poster_path, genre_ids },
}) => {
  const genresListing = useSelector(({ movies: { genres } }) => genres);

  const genres = useMemo(
    () =>
      genre_ids
        .map((_id) => {
          // eslint-disable-next-line
          const genreFound = genresListing.filter(({ id }) => id == _id);
          if (genreFound.length > 0) {
            return genreFound[0].name;
          }
          return _id;
        })
        .join(", "),
    [genresListing, genre_ids]
  );

  return (
    <MovieCardWrapper>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={`Poster do filme: ${title}`}
      />
      <div>
        <Title>{title}</Title>
        <Genre>{genres}</Genre>
        <Vote>
          <Star style={{ marginRight: "6px" }} />
          {vote_average}
        </Vote>
      </div>
    </MovieCardWrapper>
  );
};

const CarouselMain = styled.div`
  position: relative;
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
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
  padding: 12px;
  box-sizing: border-box;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  z-index: 1;
  ${({ side }) => {
    if (side === "left")
      return `
    left: 0;
    transform: translateX(calc(-100% - 42px));
    mask-image: url(${chevron_left});
    `;
    else if (side === "right")
      return `
    right: 0;
    transform: translateX(calc(100% + 42px));
    mask-image: url(${chevron_right});
    `;
  }}

  mask-position: center;
  mask-repeat: no-repeat;
  border: none;
  border-bottom: 2px solid transparent;
  color: #eaeaeaaa;
  height: 72px;
  width: 42px;
  text-align: center;
  transition: all 0.2s;
  display: inline-block;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-transform: uppercase;

  :hover {
    background-color: #ff559e;
  }
  :active {
    background-color: #ff559e;
  }
  :focus {
    outline: none;
    background-color: #ff559e;
  }
`;
export const Carousel = ({
  children = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  maxItemsToDisplay = 4,
}) => {
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
  //   const resetCarousel = () => indxDispatch("reset");
  return (
    <CarouselMain>
      <CarouselWrapper>
        <ContentWrapper {...{ maxItemsToDisplay, index }}>
          {children.map((c) => (
            <Item key={c.key} {...{ maxItemsToDisplay }}>
              {c}
            </Item>
          ))}
        </ContentWrapper>
      </CarouselWrapper>
      <CarouselButton
        side="right"
        onClick={nextPage}
        aria-label="proximo filmne"
      />
      <CarouselButton
        side="left"
        onClick={previousPage}
        aria-label="filme anterior"
      />
      {/* <CarouselButton onClick={resetCarousel}>R</CarouselButton> */}
    </CarouselMain>
  );
};
