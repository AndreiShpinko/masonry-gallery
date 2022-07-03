import React, { useEffect } from "react";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setGallery } from "../redux/actionCreators/galleryActions";
import GalleryServices from "../services/GalleryServices";

import Form from "../components/Form";
import Gallery from "../components/Gallery";
import Container from "../components/Container";

const Home = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    if (!photos) {
      GalleryServices.getPhotos().then((data) => {
        dispatch(setGallery(data));
      });
    }
  }, []);

  return (
    <Container>
      <Title>Masonry Gallery</Title>
      <Form />
      <Gallery />
    </Container>
  );
};

const Title = styled.h1`
  text-align: center;
  margin-top: 5rem;
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
    font-size: 2.2rem;
  }
`;

export default Home;
