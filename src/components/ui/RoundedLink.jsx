import React from "react";
import styled from "styled-components";

const RoundedLink = ({ children, href, styles }) => {
  return (
    <RoundedLinkStyled href={href} styles={styles}>
      {children}
    </RoundedLinkStyled>
  );
};

const RoundedLinkStyled = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #1875ff;
  font-size: 1rem;
  color: #fff;
  box-shadow: 0px 3px 10px -3px #1875ff;
  cursor: pointer;
  margin: 0 3px;
  text-decoration: none;
  font-size: 1.4rem;
  ${({ styles }) => styles}
`;

export default RoundedLink;
