import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageWithLoad from "../ordinary/ImageWithLoad";

const UserImages = () => {
  const urls = useSelector((state) => state.photo.images);

  return (
    <Wrapper>
      <BigPhoto
        href={urls[0] ? `https://unsplash.com/photos/${urls[0].id}` : "#"}
      >
        <ImageWithLoad
          source={urls[0]?.urls?.regular}
          loader
          loaderSize="small"
        />
      </BigPhoto>
      <SmallPhoto
        href={urls[1] ? `https://unsplash.com/photos/${urls[1].id}` : "#"}
      >
        <ImageWithLoad
          source={urls[1]?.urls?.regular}
          loader
          loaderSize="small"
        />
      </SmallPhoto>
      <SmallPhoto
        href={urls[2] ? `https://unsplash.com/photos/${urls[2].id}` : "#"}
      >
        <ImageWithLoad
          source={urls[2]?.urls?.regular}
          loader
          loaderSize="small"
        />
      </SmallPhoto>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 6px;
  margin-top: 15px;
`;

const SmallPhoto = styled.a`
  display: grid;
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
`;

const BigPhoto = styled.a`
  display: grid;
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;

export default UserImages;
