import React from "react";
import styled from "styled-components";
import { color_secondary } from "../../core/constants";

// size = small | normal | big
const Loader = ({ size = "normal", color = color_secondary }) => {
  return (
    <LoaderWrapper size={size}>
      <LoaderStyled size={size} color={color}>
        <span></span>
      </LoaderStyled>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 0 auto;
  }
  height: ${({ size }) => {
    if (size === "normal") return "5rem";
    else if (size === "small") return "4rem";
    else if (size === "big") return "6rem";
  }};
`;

const LoaderStyled = styled.div`
  // --size: 3.5rem;
  --size: ${({ size }) => {
    if (size === "normal") return "3.5rem";
    else if (size === "small") return "2.5rem";
    else if (size === "big") return "4.5rem";
  }};
  --color: ${({ color }) => color};

  @keyframes loader-5-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader-5-2 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(calc(var(--size) / 1.2), 0, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @keyframes loader-5-3 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(calc(var(--size) / -1.2), 0, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @keyframes loader-5-4 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, calc(var(--size) / 1.2), 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @keyframes loader-5-5 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, calc(var(--size) / -1.2), 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  height: var(--size);
  width: var(--size);
  animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: auto;
    margin: auto;
    width: calc(var(--size) / 4.5);
    height: calc(var(--size) / 4.5);
    background: var(--color);
    border-radius: 50%;
    animation: loader-5-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: auto;
    bottom: 0;
    right: 0;
    margin: auto;
    width: calc(var(--size) / 4.5);
    height: calc(var(--size) / 4.5);
    background: var(--color);
    border-radius: 50%;
    animation: loader-5-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  & span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: var(--size);
    width: var(--size);
  }
  & span::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    right: 0;
    margin: auto;
    width: calc(var(--size) / 4.5);
    height: calc(var(--size) / 4.5);
    background: var(--color);
    border-radius: 50%;
    animation: loader-5-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  & span::after {
    content: "";
    display: block;
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: calc(var(--size) / 4.5);
    height: calc(var(--size) / 4.5);
    background: var(--color);
    border-radius: 50%;
    animation: loader-5-5 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
`;

export default Loader;
