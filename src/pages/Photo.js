import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setPhoto,
  setUserPhotos,
} from "../redux/actionCreators/galleryActions";
import galleryServices from "../services/galleryServices";

import { useParams, useLocation } from "react-router-dom";

import styled from "styled-components";

import Container from "../components/Container";
import Loader from "../components/Loader";
import UserPhotos from "../components/UserPhotos";
import UserLinks from "../components/UserLinks";
import TopContent from "../components/TopContent";

const Photo = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await new galleryServices().getPhotoById(id);
      console.log(data);
      dispatch(setPhoto(data));

      const username = location.state.username;
      const userPhotos = await new galleryServices().getUserPhotos(username);
      console.log(userPhotos);
      dispatch(setUserPhotos(userPhotos.photos));
    }
    fetchData();
  }, []);

  const photo = useSelector((state) => state.gallery.photo);
  const userPhotos = useSelector((state) => state.gallery.userPhotos);

  if (!photo) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  } else {
    const [
      color,

      mainImage,
      userImage,

      photoData, // when photo was crerated
      photoLocation,

      name, // user name
      username, // user username

      unsplashUrl,
      portfolioUrl,

      instagramName,
      twitterName,
    ] = [
      photo.color,

      photo.urls.regular,
      photo.user.profile_image.large,

      photo.created_at,
      photo.location.title,

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
          <Left color={color}>
            {window.innerWidth <= 768 && (
              <TopContent
                unsplashUrl={unsplashUrl}
                userImage={userImage}
                name={name}
                username={username}
              />
            )}

            <ImageWrapper>
              <Image src={mainImage} alt="" />
            </ImageWrapper>
          </Left>

          <Right color={color}>
            <div>
              {window.innerWidth > 768 && (
                <TopContent
                  unsplashUrl={unsplashUrl}
                  userImage={userImage}
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
                  photoData,
                }}
              />
            </div>

            <UserPhotos urls={userPhotos} />
          </Right>
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

const Left = styled.div`
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
    padding: 15px 0 0 0;
  }
`;
const Right = styled.div`
  flex: 0 0 50%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 15px;
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 15px;
  }
`;
const Wrap = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 0;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    width: 100%;
    margin-top: 20px;
  }
`;

export default Photo;
