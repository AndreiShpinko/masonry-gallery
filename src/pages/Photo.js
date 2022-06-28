import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import { useDispatch, useSelector } from "react-redux";
import {
  setPhoto,
  setUserPhotos,
} from "../redux/actionCreators/galleryActions";
import GalleryServices from "../services/GalleryServices";
import { useParams } from "react-router-dom";

import Container from "../components/Container";
import Loader from "../components/Loader";
import UserPhotos from "../components/UserPhotos";
import UserLinks from "../components/UserLinks";
import TopContent from "../components/TopContent";
import ImageWithLoad from "../components/ImageWithLoad";

const Photo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    GalleryServices.getPhotoById(id).then((data) => {
      dispatch(setPhoto(data));

      const username = data.user.username;

      GalleryServices
        .getUserPhotos(username)
        .then((userPhotos) => dispatch(setUserPhotos(userPhotos.photos)));
    });
  }, []);

  const photo = useSelector((state) => state.gallery.photo);
  const userPhotos = useSelector((state) => state.gallery.userPhotos);

  if (!photo || !userPhotos) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  } else {
    const [
      mainImage,
      userAvatar,
      photoLocation,
      photoColor,
      name,
      username,
      unsplashUrl,
      portfolioUrl,
      instagramName,
      twitterName,
    ] = [
      photo.urls.regular,
      photo.user.profile_image.large,
      photo.location.title,
      photo.color,
      photo.user.name,
      photo.user.username,
      photo.user.links.html,
      photo.user.social.portfolio_url,
      photo.user.social.instagram_username,
      photo.user.social.twitter_username,
    ];

    return (
      <Container>
        <Wrap>
          <LeftPart>
            <Fade top duration={1000}>
              <div>
                {window.innerWidth <= 768 && (
                  <TopContent
                    unsplashUrl={unsplashUrl}
                    userAvatar={userAvatar}
                    name={name}
                    username={username}
                  />
                )}

                <ImageWrapper>
                  <ImageWithLoad source={mainImage} loader color={photoColor} />
                </ImageWrapper>
              </div>
            </Fade>
          </LeftPart>
          <RightPart>
            <Fade bottom duration={1000}>
              <div>
                <div>
                  {window.innerWidth > 768 && (
                    <TopContent
                      unsplashUrl={unsplashUrl}
                      userAvatar={userAvatar}
                      name={name}
                      username={username}
                    />
                  )}
                  <UserLinks
                    links={{
                      unsplashUrl,
                      instagramName,
                      twitterName,
                      portfolioUrl,
                      photoLocation,
                    }}
                  />
                </div>
                <UserPhotos urls={userPhotos} />
              </div>
            </Fade>
          </RightPart>
        </Wrap>
      </Container>
    );
  }
};

const LoaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 15px;
  @media screen and (max-width: 768px) {
    padding: 0;
    align-items: center;
  }
`;

const Wrap = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 15px 0;
  }
`;

const ImageWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 0;
  position: relative;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 15px;

    @media screen and (max-width: 768px) {
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0);

      margin-top: 20px;
      border-radius: 10px;
    }
  }
`;

export default Photo;
