import React, { useCallback } from "react";
import styled from "styled-components";
import { HeaderButton, SearchButton } from "./Buttons";
import { Colors, FlexContent } from "./Commons";
import searchIcon from "components/assets/search-outline 1.svg";
import { Link } from "react-router-dom";
const Hdr = styled.header`
  background: ${Colors.dark};
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

const Header = (props) => {
  const scroll = useCallback(() => {
    const element = document.getElementById("catalogue");
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  }, []);

  return (
    <Hdr>
      <FlexContent>
        <h2>
          <HdrText>
            Suno <HdrBright>Movies</HdrBright>
          </HdrText>
        </h2>
        <ButtonWrapper>
          <HeaderButton>Início</HeaderButton>
          <Link to="/home#catalogue">
            <HeaderButton onClick={scroll}>Catálogo</HeaderButton>
          </Link>
          <SearchButton>
            <img src={searchIcon} alt="search" />
          </SearchButton>
        </ButtonWrapper>
      </FlexContent>
    </Hdr>
  );
};

export default Header;
