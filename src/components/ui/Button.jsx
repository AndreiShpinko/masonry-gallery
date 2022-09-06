import React from "react";
import styled from "styled-components";
import { color_primary, color_tertiary } from "../../core/constants";

const Button = ({ children, click, styles }) => {
  return (
    <ButtonStyled onClick={click} styles={styles}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #4f4f4f;
  border-radius: 15px;
  transition: all 0.3s;
  font-size: 1.2rem;
  color: ${color_primary};
  box-shadow: 0px 3px 10px -3px ${color_tertiary};
  position: relative;
  border: none;
  background-color: ${color_tertiary};
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 3px 10px 0px ${color_tertiary};
  }

  @media screen and (max-width: 768px) {
    padding: 0.6rem 12px;
  }
  ${({ styles }) => styles}
`;

export default Button;
