import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../simple/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageWithLoad = ({
  source,
  loader,
  color = "#eee",
  loaderSize,
  imgStyles = {},
}) => {
  const [loadingImg, setLoadingImg] = useState(true);

  // get white or black color based on color in parametr
  const getColor = (color) => {
    color = color.length === 4 ? `${color}${color.slice(1)}` : color;
    const exampleColor = parseInt("d1d1d1", 16);
    return parseInt(color.substr(1), 16) > exampleColor ? "#000" : "#fff";
  };

  return (
    <ImageWrapper
      onLoad={() => setLoadingImg(false)}
      color={color}
      loadingImg={loadingImg}
    >
      {loader && loadingImg && (
        <LoaderWrapper>
          <Loader color={getColor(color)} size={loaderSize} />
        </LoaderWrapper>
      )}
      <LazyLoadImageWrapper>
        <LazyLoadImage alt="" src={source} />
      </LazyLoadImageWrapper>
    </ImageWrapper>
  );
};

const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

const LazyLoadImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 0;
  position: relative;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    border-radius: 10px;
  }

  aspect-ratio: ${(props) => (props.loadingImg ? "1" : "auto")};

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: ${(props) => props.color};
    transition: 0.3s;
    opacity: ${(props) => (props.loadingImg ? "1" : "0")};
  }
`;

export default ImageWithLoad;
