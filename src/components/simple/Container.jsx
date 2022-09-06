import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

const ContainerStyled = styled.div`
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 15px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 10px;
  }
`;

export default Container;
