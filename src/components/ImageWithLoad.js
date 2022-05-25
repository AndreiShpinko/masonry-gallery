import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader";

const ImageWithLoad = ({ source, loader, color }) => {
  if (!color) color = "#eee";

  const [loadingImg, setLoadingImg] = useState(true);

  return (
    <ImageWrapper
      onLoad={() => setLoadingImg(false)}
      color={color}
      loadingImg={loadingImg}
    >
      {loader && loadingImg && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      <Image src={source} alt="" />
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0;
  position: relative;
  
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
