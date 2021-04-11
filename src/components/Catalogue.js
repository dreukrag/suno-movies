import React from "react";
import SubHeader from "components/SubHeader";
import { Colors, Content } from "./Commons";
import styled from "styled-components";

const CatalogueWrapper = styled.div`
  background-color: ${Colors.darker};
`;
const Catalogue = () => {
  return (
    <>
      <SubHeader />
      <CatalogueWrapper>
        <Content>teste</Content>
      </CatalogueWrapper>
    </>
  );
};

export default Catalogue;
