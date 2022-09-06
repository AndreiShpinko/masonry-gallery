import React from "react";
import styled from "styled-components";

const Title = ({ children, styles }) => {
  return <TitleStyled styles={styles}>{children}</TitleStyled>;
};

const TitleStyled = styled.h2`
  font-size: 2rem;
  @media screen and (max-width: 991px) {
    font-size: 1.5rem;
  }

  ${({ styles }) => styles}
`;

export default Title;
