import React from "react";
import styled from "styled-components";

const Hypertitle = ({ children, styles }) => {
  return <HypertitleStyled styles={styles}>{children}</HypertitleStyled>;
};

const HypertitleStyled = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }

  ${({ styles }) => styles}
`;

export default Hypertitle;
