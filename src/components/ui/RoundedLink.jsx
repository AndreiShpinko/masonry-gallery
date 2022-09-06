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
  font-size: 1rem;
  cursor: pointer;
  margin: 0 3px;
  text-decoration: none;
  font-size: 1.4rem;
  ${({ styles }) => styles}
`;

export default RoundedLink;
