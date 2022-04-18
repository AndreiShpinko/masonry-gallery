import React from "react";
import styled from "styled-components";

const UserPhotos = ({ urls }) => {
  console.log(urls);
  if (urls.length) {
    return (
      <Wrapper>
        <BigPhoto href={`https://unsplash.com/photos/${urls[0].id}`}>
          <Image src={urls[0].urls.regular} alt="" />
        </BigPhoto>
        <SmallPhoto href={`https://unsplash.com/photos/${urls[1].id}`}>
          <Image src={urls[1].urls.regular} alt="" />
        </SmallPhoto>
        <SmallPhoto href={`https://unsplash.com/photos/${urls[2].id}`}>
          <Image src={urls[2].urls.regular} alt="" />
        </SmallPhoto>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <BigPhoto as="div">Error</BigPhoto>
        <SmallPhoto as="div">Error</SmallPhoto>
        <SmallPhoto as="div">Error</SmallPhoto>
      </Wrapper>
    );
  }
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.a`
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 1 / 1;
  background-color: #eee;
  color: red;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallPhoto = styled(ImageWrapper)``;

const BigPhoto = styled(ImageWrapper)`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 6px;
  margin-top: 15px;
`;

export default UserPhotos;
