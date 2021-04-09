import styled from "styled-components";

export const HeaderButton = styled.button`
  border: none;
  border-bottom: 2px solid transparent;
  background: unset;
  color: #eaeaea;
  height: 100%;
  width: 128px;
  text-align: center;
  transition: all 0.2s;
  display: inline-block;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-transform: uppercase;

  color: #eaeaea;

  :hover {
    border-bottom: 2px solid #fe3189;
  }
  :active {
    border-bottom: 2px solid #fe3189;
  }
  :focus {
    outline: none;
  }
`;

export const SearchButton = styled(HeaderButton)`
  :hover {
  border-bottom: 2px solid transparent;
  }
  :active {
  border-bottom: 2px solid transparent;
  }
  :focus {
    outline: none;
  }
`;
