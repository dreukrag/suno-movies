import React from "react";
import styled from "styled-components";
import { Ball, Carousel, Content } from "./Commons";
import backgroundImage from "./background.png";
const TitleText = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 33px;
  text-transform: uppercase;
  color: #eaeaea;
  display: inline-block;
`;

const TitleTextBold = styled(TitleText)`
  font-weight: 600;
`;

const Background = styled.div`
  background-image: url(${backgroundImage});
  height: 720px;
  background-position: center;
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
`;
const Featured = () => {
  return (
    <Background>
      <Content>
        <Heading>
          <Ball style={{ marginRight: "6px" }} />
          <TitleText>
            <TitleTextBold>Lançamentos </TitleTextBold> da semana
          </TitleText>
        </Heading>
        <Carousel />
      </Content>
    </Background>
  );
};

export default Featured;
