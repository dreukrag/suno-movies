import React from "react";
import styled from "styled-components";
import {
  Ball,
  Colors,
  FlexContent,
  Heading,
  TitleText,
  TitleTextBold,
} from "./Commons";
const Hdr = styled.header`
  background: ${Colors.dark};
  mix-blend-mode: normal;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  height: 107px;
`;

const SubHeading = styled(Heading)`
  margin: 0;
`;

const SubHeader = (props) => (
  <Hdr id="subheader">
    <FlexContent>
      <SubHeading>
        <Ball style={{ marginRight: "6px" }} />
        <TitleText>
          <TitleTextBold>Catálogo</TitleTextBold> completo
        </TitleText>
      </SubHeading>
    </FlexContent>
  </Hdr>
);

export default SubHeader;
