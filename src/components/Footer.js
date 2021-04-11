import React from "react";
import styled from "styled-components";

const P = styled.p`
  margin: 0;
  color: #fff;
  text-align: center;
`;

const F = styled.footer`
  height: 112px;
  background: #18181c;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = () => {
  return (
    <F>
      <P>@ 2021 Suno Movies & Filipe Groh. All Rights Reserved</P>
    </F>
  );
};

export default Footer;
