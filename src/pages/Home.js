import React, { useEffect } from "react";

import styled from "styled-components";

import { useDispatch } from "react-redux";
import { setGallery } from "../redux/actionCreators/galleryActions";
import galleryServices from "../services/galleryServices";

import Form from "../components/Form";
import Gallery from "../components/Gallery";
import Container from "../components/Container";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const data = await new galleryServices().getPhotos();
      dispatch(setGallery(data));
    }
    fetchData();
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
