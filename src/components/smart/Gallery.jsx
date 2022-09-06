import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  setPhotoPageImage,
  setPhotoPageImages,
} from "../../core/redux/actionCreators/actionCreators";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "./Card";
import Loader from "../simple/Loader";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Gallery = () => {
  const dispatch = useDispatch();

  const { gallery, error } = useSelector((state) => state.home);

  // const [delayForCardLazyLoading, delayForCsetardLazyLoading] = useState(initialState);

  useEffect(() => {
    dispatch(setPhotoPageImage(false));
    dispatch(setPhotoPageImages(false));
  }, []);

  if (error) {
    return (
      <Wrapper>
        <Title>Sorry, we have error</Title>
        <Subtitle styles={SubtitleStyles}>{error.message}</Subtitle>
      </Wrapper>
    );
  } else if (!gallery) {
    return <Loader />;
  } else if (gallery.length) {
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
          {gallery.map((photo) => {
            return (
              <Card
                imageUrl={photo.urls.small}
                username={photo.user.username}
                color={photo.color}
                unsplashUrl={photo.user.links.html}
                unsplashPhoto={photo.user.profile_image.medium}
                instagramUrl={photo.user.social.instagram_username}
                twitterUrl={photo.user.social.twitter_username}
                id={photo.id}
                // galleryLoaded={}
                key={photo.id}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    );
  } else return <Title styles={"text-align: center;"}>Sorry, no matches</Title>;
};

const SubtitleStyles = `
margin-top: 1rem;
display: inline-block;
`;

const Wrapper = styled.div`
  text-align: center;
`;

export default Gallery;
