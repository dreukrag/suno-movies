import styled from "styled-components";
import star from "components/assets/star.svg";
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
  background: #fe3189;
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
