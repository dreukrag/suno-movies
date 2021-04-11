import React from "react";
import styled from "styled-components";
import { HeaderButton, SearchButton } from "./Buttons";
import {
  Ball,
  FlexContent,
  Heading,
  TitleText,
  TitleTextBold,
} from "./Commons";
import searchIcon from "components/assets/search-outline 1.svg";
const Hdr = styled.header`
  background: #212125;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  height: 107px;
`;

const HdrText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 39px;
  /* identical to box height */

  text-transform: uppercase;

  color: #eaeaea;

  mix-blend-mode: normal;
  margin-right: 5px;
`;

const HdrBright = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  /* identical to box height */

  text-transform: uppercase;

  mix-blend-mode: normal;

  color: #ff559e;
`;

const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const SubHeading = styled(Heading)`
  margin: 0;
`;

const Header = (props) => (
  <Hdr>
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

export default Header;
