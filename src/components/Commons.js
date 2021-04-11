import styled from "styled-components";
import star from "components/assets/star.svg";

export const Colors = {
  pink: "#fe3189",
  darkerPink: "#f10067",
  grey: "#2e2d31",
  dark: "#212125",
  darker: "#1b1b1f",
  darkest: "#18181c",
  light: "#eaeaea",
};

export const Heading = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 48px;
  margin-bottom: 25px;
`;

export const TitleText = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 33px;
  text-transform: uppercase;
  color: #eaeaea;
  display: inline-block;
`;

export const TitleTextBold = styled(TitleText)`
  font-weight: 600;
`;

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

export const FlexContent = styled(Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Ball = styled.div`
  background: ${Colors.pink};
  border-radius: 100%;
  width: 15px;
  height: 15px;
  display: inline-block;
`;

export const Star = styled.div`
  background-image: url(${star});
  width: 16px;
  height: 16px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
`;
