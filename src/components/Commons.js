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

export const Star = styled.i`
  background-image: url(${star});
  width: 18px;
  height: 18px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
`;

const SpinnerStyle = styled.svg`
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;
  margin: 0 calc(50% - 25px);

  & .path {
    stroke: ${Colors.pink};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const Spinner = () => (
  <SpinnerStyle viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    ></circle>
  </SpinnerStyle>
);

const LoaderText = styled.p`
  text-align: center;
  color: ${Colors.pink};
`;

export const Loader = () => (
  <div>
    <Spinner />
    <LoaderText>Carregando</LoaderText>
  </div>
);
