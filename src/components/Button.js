import React from "react";
import styled from "styled-components";

const Button = ({ children, clickFunction }) => {
  return <ButtonWrap onClick={clickFunction}>{children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #4f4f4f;
  border-radius: 15px;
  transition: all 0.3s;
  font-size: 1.2rem;
  color: #fff;
  box-shadow: 0px 3px 10px -3px #1875ff;
  position: relative;
  border: none;
  background: #1875ff;
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 768px) {
    padding: 0.6rem 12px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 3px 10px 0px #1875ff;
  }
`;

export default Button;
