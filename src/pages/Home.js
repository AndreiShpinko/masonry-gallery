import React, { useEffect } from "react";

import styled from "styled-components";

import { useDispatch } from "react-redux";
import {
  setGallery,
  setLoaderStatus,
} from "../redux/actionCreators/galleryActions";
import galleryServices from "../services/galleryServices";

import Form from "../components/Form";
import Gallery from "../components/Gallery";
import Container from "../components/Container";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoaderStatus(true));
    new galleryServices().getPhotos().then((data) => {
      dispatch(setGallery(data));
    });
  }, []);

  return (
    <Container>
      <div>
        <Title>Masonry Gallery</Title>
        <Form />
        <Gallery />
      </div>
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
