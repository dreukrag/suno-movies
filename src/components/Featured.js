import React from "react";
import styled from "styled-components";
import { Ball, Content } from "./Commons";
import backgroundImage from "components/assets/background.png";
import { Carousel, CarouselMovieCard } from "./Carousel";
import { useSelector } from "react-redux";
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
  display: flex;
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 48px;
  margin-bottom: 25px;
`;
const Featured = () => {
  const nowPlaying = useSelector(({ movies: { nowPlaying } }) => nowPlaying);
  return (
    <Background>
      <Content>
        <Heading>
          <Ball style={{ marginRight: "6px" }} />
          <TitleText>
            <TitleTextBold>Lançamentos </TitleTextBold> da semana
          </TitleText>
        </Heading>
        <Carousel aria-label="Lista de lançamentos">
          {nowPlaying.map((movie) => (
            <CarouselMovieCard {...{ movie, key: movie.id }} />
          ))}
        </Carousel>
      </Content>
    </Background>
  );
};

export default Featured;
