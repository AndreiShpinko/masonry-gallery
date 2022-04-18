import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderStyle>
        <span></span>
      </LoaderStyle>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  div {
    margin: 0 auto;
  }
`;

const LoaderStyle = styled.div`
  --size: 52px;

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
      transform: translate3d(calc(var(--size) / 4 * 3), 0, 0) scale(0.5);
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
      transform: translate3d(calc(var(--size) / 4 * -3), 0, 0) scale(0.5);
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
      transform: translate3d(0, calc(var(--size) / 4 * 3), 0) scale(0.5);
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
      transform: translate3d(0, calc(var(--size) / 4 * -3), 0) scale(0.5);
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
    width: calc(var(--size) / 4);
    height: calc(var(--size) / 4);
    background: #1875ff;
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
    width: calc(var(--size) / 4);
    height: calc(var(--size) / 4);
    background: #1875ff;
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
    width: calc(var(--size) / 4);
    height: calc(var(--size) / 4);
    background: #1875ff;
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
    width: calc(var(--size) / 4);
    height: calc(var(--size) / 4);
    background: #1875ff;
    border-radius: 50%;
    animation: loader-5-5 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
`;

export default Loader;
