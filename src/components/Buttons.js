import styled from "styled-components";
import { Colors } from "./Commons";

export const BaseButton = styled.button`
  border: none;
  color: #eaeaea;
  text-align: center;
  transition: all 0.2s;
  display: inline-block;
  text-transform: uppercase;
`;

export const MainButton = styled(BaseButton)`
  background: linear-gradient(180deg, #212125 0%, #2e2e35 100%), #212125;
  mix-blend-mode: normal;
  border: 2px solid ${Colors.grey};
  border-radius: 4px;

  padding: 12px;
  margin: 6px;

  text-transform: unset;

  font-family: Poppins;
  font-style: normal;
  font-size: 14.4179px;
  line-height: 22px;

  ${({ selected }) => {
    if (selected)
      return `
    background: ${Colors.darkerPink};
    color: ${Colors.light};
    `;
  }}

  ${({ width }) => {
    if (width)
      return `
    width: ${width};
    `;
  }}

  :hover {
    background: ${Colors.pink};
    color: ${Colors.light};
  }
  :active {
    background: ${Colors.darkerPink};
    color: ${Colors.light};
  }
  :focus {
    background: ${Colors.pink};
    color: ${Colors.light};
    outline: none;
  }
`;

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
    border-bottom: 2px solid ${Colors.pink};
  }
  :active {
    border-bottom: 2px solid ${Colors.pink};
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
