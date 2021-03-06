import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  setPhoto,
  setUserPhotos,
} from "../redux/actionCreators/galleryActions";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "./Card";
import Loader from "./Loader";

const Gallery = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(setPhoto(null));
    dispatch(setUserPhotos(null));
  }, []);

  if (!photos) {
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
                imageUrl={photo.urls.regular}
                username={photo.user.username}
                color={photo.color}
                unsplashUrl={photo.user.links.html}
                unsplashPhoto={photo.user.profile_image.large}
                instagramUrl={photo.user.social.instagram_username}
                twitterUrl={photo.user.social.twitter_username}
                id={photo.id}
                key={photo.id}
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
