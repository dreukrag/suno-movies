import React, { useCallback, useMemo, useState } from "react";
import SubHeader from "components/SubHeader";
import { Colors, Content } from "./Commons";
import styled from "styled-components";
import { MainButton } from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import { moviesStatus } from "redux/MovieReducer";

const CatalogueWrapper = styled.div`
  background-color: ${Colors.darker};
  padding: 48px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  const content = useMemo(() => {
    if (displayType === displayTypes.GRID) {
      return <div>grid</div>;
    }
    if (displayType === displayTypes.LIST) {
      return <div>list</div>;
    }
  }, [displayType, displayTypes]);

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
