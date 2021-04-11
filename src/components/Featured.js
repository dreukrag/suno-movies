import React from "react";
import styled from "styled-components";
import { Ball, Colors, Content, Heading, TitleText, TitleTextBold } from "./Commons";
import backgroundImage from "components/assets/background.png";
import { Carousel, CarouselMovieCard } from "./Carousel";
import { useSelector } from "react-redux";


const Background = styled.div`
  background-image: url(${backgroundImage});
  height: 720px;
  background-position: center;
  display: flex;
  border-bottom: solid 3px ${Colors.pink};
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
