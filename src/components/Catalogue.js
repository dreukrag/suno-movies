import React, { useCallback, useMemo, useState } from "react";
import SubHeader from "components/SubHeader";
import { Colors, Content, Loader, Star } from "./Commons";
import styled from "styled-components";
import { MainButton } from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import { moviesStatus } from "redux/MovieReducer";

const CatalogueListItemWrapper = styled.button`
  display: flex;
  height: 100%;
  padding: 12px 0;
  border: unset;
  background: unset;
  text-align: unset;

  :hover {
    background: ${Colors.darkest};
    outline: none;
  }
  :active {
    background: ${Colors.darkest};
    outline: none;
  }
  :focus {
    background: ${Colors.darkest};
    outline: none;
  }
`;

const Poster = styled.img`
  height: 230px;
  width: 156px;
  margin-right: 24px;
`;

const Ellipsis = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
`;

const Overview = styled(Ellipsis)`
  font-family: Poppins;
  font-style: normal;
  font-size: 12.5px;
  line-height: 18px;
  max-height: 110px;
  align-items: center;
  color: #eaeaea;
  margin-top: 12px;
  white-space: normal;
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

const CatalogueListItem = ({
  movie: { title, poster_path, genre_ids, vote_average, overview },
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
    <CatalogueListItemWrapper aria-label={`Selecionar filme: ${title}`}>
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
        <Overview>{overview}</Overview>
      </div>
    </CatalogueListItemWrapper>
  );
};

const CatalogueWrapper = styled.div`
  background-color: ${Colors.darker};
  padding: 48px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 12px;
  row-gap: 12px;
`;
const Catalogue = () => {
  const dispatch = useDispatch();
  const currentType = useSelector(
    ({
      movies: {
        filter: { type },
      },
    }) => type
  );

  const displayTypes = useMemo(() => ({ LIST: "LIST", GRID: "GRID" }), []);
  const [displayType, setDisplayType] = useState(displayTypes.GRID);

  const catalogue = useSelector(({ movies: { catalogue } }) => catalogue);
  const catalogueStatus = useSelector(
    ({ movies: { catalogueStatus } }) => catalogueStatus
  );

  const setList = useCallback(() => setDisplayType(displayTypes.LIST), [
    displayTypes,
  ]);
  const setGrid = useCallback(() => setDisplayType(displayTypes.GRID), [
    displayTypes,
  ]);

  const filterByPopular = useCallback(
    () => dispatch({ type: moviesStatus.CHANGEFILTER, payload: "popular" }),
    [dispatch]
  );

  const filterByTopRated = useCallback(
    () => dispatch({ type: moviesStatus.CHANGEFILTER, payload: "top_rated" }),
    [dispatch]
  );

  const filterByUpcoming = useCallback(
    () => dispatch({ type: moviesStatus.CHANGEFILTER, payload: "upcoming" }),
    [dispatch]
  );

  const catalogueItems = useMemo(
    () =>
      catalogue.map((movie) => (
        <CatalogueListItem {...{ movie, key: movie.id }} />
      )),
    [catalogue]
  );

  const content = useMemo(() => {
    if (catalogueStatus === moviesStatus.START) return <Loader />;

    if (displayType === displayTypes.LIST) {
      return <div>{catalogueItems}</div>;
    }
    if (displayType === displayTypes.GRID) {
      return <Grid>{catalogueItems}</Grid>;
    }
  }, [displayType, displayTypes, catalogueItems, catalogueStatus]);

  return (
    <>
      <SubHeader />
      <CatalogueWrapper>
        <Content>
          <Row>
            <div>
              <MainButton
                selected={currentType === "popular"}
                onClick={filterByPopular}
              >
                popularidade
              </MainButton>
              <MainButton
                selected={currentType === "top_rated"}
                onClick={filterByTopRated}
              >
                avaliação
              </MainButton>
              <MainButton
                selected={currentType === "upcoming"}
                onClick={filterByUpcoming}
              >
                lançamentos
              </MainButton>
            </div>
            <div>
              <MainButton
                width="50px"
                selected={displayType === displayTypes.GRID}
                onClick={setGrid}
              >
                <i className="fas fa-grip-vertical"></i>
              </MainButton>
              <MainButton
                width="50px"
                selected={displayType === displayTypes.LIST}
                onClick={setList}
              >
                <i className="fas fa-list"></i>
              </MainButton>
            </div>
          </Row>
          {content}
        </Content>
      </CatalogueWrapper>
    </>
  );
};

export default Catalogue;
