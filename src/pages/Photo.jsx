import React, { useState, useEffect } from "react";
import styled from "styled-components";

import UnsplashServices from "../core/services/UnsplashServices";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setPhotoPageImage,
  setPhotoPageImages,
} from "../core/redux/actionCreators/actionCreators";

import Fade from "react-reveal/Fade";
import PullToRefresh from "react-simple-pull-to-refresh";
import Container from "../components/simple/Container";
import Loader from "../components/simple/Loader";
import TopContent from "../components/smart/TopContent";
import UserLinks from "../components/smart/UserLinks";
import ImageWithLoad from "../components/ordinary/ImageWithLoad";
import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import Button from "../components/ui/Button";
import UserImages from "../components/smart/UserImages";

const Photo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const image = useSelector((state) => state.photo.image);

  const getImageByIdWrapper = (id) => {
    UnsplashServices.getImageById(id)
      .then((data) => {
        dispatch(setPhotoPageImage(data));

        const username = data.user.username;
        UnsplashServices.getImagesByUsername(username)
          .then((userImages) => {
            dispatch(setPhotoPageImages(userImages.photos));
          })
          .catch((err) => setError(err));
      })
      .catch((err) => setError(err))
      .finally(() => setDataLoading(false));
  };

  const handleRefresh = () => {
    setDataLoading(true);
    dispatch(setPhotoPageImage(false));
    dispatch(setPhotoPageImages(false));

    return new Promise((resolve) =>
      getImageByIdWrapper(id).finally(() => resolve())
    );
  };

  const [error, setError] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    getImageByIdWrapper(id);
  }, []);

  let content;

  if (error) {
    content = (
      <Wrapper>
        <TextWrapper>
          <Title>Sorry, we have an error</Title>
          <Subtitle styles={SubtitleStyled}>{error.message}</Subtitle>
          <br />
          <Button styles={"margin-top: 1rem;"} click={() => navigate("../../")}>
            Back to main page
          </Button>
        </TextWrapper>
      </Wrapper>
    );
  } else if (dataLoading) {
    content = (
      <Wrapper>
        <Loader size="big" />
      </Wrapper>
    );
  } else {
    const [mainImage, photoColor] = [image.urls.regular, image.color];

    content = (
      <PartsWrapper>
        <LeftPart>
          <Fade top duration={1000}>
            <div>
              {window.innerWidth <= 768 && <TopContent />}

              <ImageWrapper>
                <ImageWithLoad source={mainImage} loader color={photoColor} />
              </ImageWrapper>
            </div>
          </Fade>
        </LeftPart>
        <RightPart>
          <Fade bottom duration={1000}>
            <div style={{ width: "100%" }}>
              {window.innerWidth > 768 && <TopContent />}
              <UserLinks />
              <UserImages />
            </div>
          </Fade>
        </RightPart>
      </PartsWrapper>
    );
  }

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
      <Container>{content}</Container>
    </PullToRefresh>
  );
};

const SubtitleStyled = `
  margin-top: 0.5rem;
  display: inline-block;
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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const LeftPart = styled.div`
  flex: 0 0 50%;
  overflow: hidden;

  padding: 15px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 0;
    height: auto;
  }

  & > div {
    width: 100%;
    height: 100%;
  }
`;
const RightPart = styled.div`
  flex: 0 0 50%;
  overflow: hidden;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 15px;
  @media screen and (max-width: 768px) {
    padding: 0;
    align-items: center;
  }
`;

const PartsWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 15px 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }

    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      border-radius: 15px;

      @media screen and (max-width: 768px) {
        border-radius: 10px;
      }
    }
  }
`;

export default Photo;
