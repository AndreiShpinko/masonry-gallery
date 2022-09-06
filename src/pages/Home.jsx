import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  setHomePageGallery,
  setHomePageGalleryHasError,
  setHomePageSearchValue,
} from "../core/redux/actionCreators/actionCreators";
import UnsplashServices from "../core/services/UnsplashServices";

import PullToRefresh from "react-simple-pull-to-refresh";
import Form from "../components/smart/Form";
import Gallery from "../components/smart/Gallery";
import Container from "../components/simple/Container";
import Loader from "../components/simple/Loader";
import Subtitle from "../components/ui/Subtitle";
import Hypertitle from "../components/ui/Hypertitle";

const Home = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.home.gallery);

  const getGallery = () => {
    return UnsplashServices.getGallery()
      .then((data) => {
        dispatch(setHomePageGallery(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setHomePageGalleryHasError(error));
      });
  };

  // handle refresh func for PullToRefresh
  const handleRefresh = () => {
    dispatch(setHomePageGallery(false));
    dispatch(setHomePageSearchValue(false));

    return new Promise((resolve) =>
      getGallery().finally(() => {
        resolve();
      })
    );
  };

  useEffect(() => {
    if (!photos) getGallery();
  }, []);

  return (
    <PullToRefresh
      onRefresh={handleRefresh}
      refreshingContent={
        <RefreshingContentWrapper>
          <Loader size="small" />
        </RefreshingContentWrapper>
      }
      pullingContent={
        <PullingContentWrapper>
          <Subtitle>pull to refresh</Subtitle>
        </PullingContentWrapper>
      }
    >
      <PageWrapper>
        <Container>
          <HypertitleWrapper>
            <Hypertitle styles={HypertitleStyles}>Masonry Gallery</Hypertitle>
          </HypertitleWrapper>
          <Form />
          <Gallery />
        </Container>
      </PageWrapper>
    </PullToRefresh>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
`;

const RefreshingContentWrapper = styled.div`
  padding-top: 0.5rem;
`;

const PullingContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const HypertitleWrapper = styled.div`
  text-align: center;
`;

const HypertitleStyles = `
  margin-top: 5rem;
  display: inline-block;

  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;

export default Home;
