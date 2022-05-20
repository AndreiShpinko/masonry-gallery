import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

import { useDispatch, useSelector } from "react-redux";
import {
  setLoaderStatus,
  setPhoto,
  setUserPhotos,
} from "../redux/actionCreators/galleryActions";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Loader from "./Loader";

const Gallery = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.gallery.photos);
  const loader = useSelector((state) => state.gallery.loader);

  useEffect(() => {
    dispatch(setLoaderStatus(false));
  }, [photos]);

  useEffect(() => {
    dispatch(setPhoto(""));
    dispatch(setUserPhotos(""));
  }, []);

  if (loader) {
    return <Loader />;
  } else if (photos.length) {
    return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          1200: 5,
          900: 4,
          600: 3,
          400: 2,
          320: 1,
        }}
      >
        <Masonry gutter="10px">
          {photos.map((photo) => {
            return (
              <Card
                username={photo.user.username}
                imageUrl={photo.urls.regular}
                color={photo.color}
                unsplashUrl={photo.user.links.html}
                unsplashPhoto={photo.user.profile_image.large}
                instagramUrl={photo.user.social.instagram_username}
                twitterUrl={photo.user.social.twitter_username}
                key={photo.id}
                id={photo.id}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    );
  } else return <WarningTitle>Sorry, no matches</WarningTitle>;
};

const WarningTitle = styled.h2`
  text-align: center;
`;

export default Gallery;
