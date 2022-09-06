import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import { useInView } from "react-intersection-observer";

import Fade from "react-reveal/Fade";
import ImageWithLoad from "../ordinary/ImageWithLoad";
import RoundedLink from "../ui/RoundedLink";
import Subtitle from "../ui/Subtitle";

const Card = ({
  imageUrl,
  username,
  color,
  unsplashUrl,
  unsplashPhoto,
  instagramUrl,
  twitterUrl,
  id,
  // galleryLoaded
}) => {
  // const { ref, inView, entry } = useInView();

  // const [cardIsVisible, setCardIsVisible] = useState(false);

  // useEffect(() => {
  //   if (!cardIsVisible) {
  //     console.log("card", username);
  //     setCardIsVisible(true);
  //   }
  // }, [inView]);

  return (
    <Fade
      bottom
      duration={1000}
      style={{
        width: "100%",
      }}
    >
      {/* <CardWrapper ref={ref}> */}
      <CardWrapper>
        <Link to={`/photo/${id}`} aria-label="to-unsplash-image">
          <ImageWrapper>
            <ImageWithLoad
              source={imageUrl}
              color={color}
            />
          </ImageWrapper>
        </Link>
        <CardContent>
          <Subtitle styles={SubtitleStyles}>{username}</Subtitle>
          <RoundedLinksWrapper color={color}>
            {instagramUrl && (
              <RoundedLink href={`https://www.instagram.com/${instagramUrl}`}>
                <i className="fa-brands fa-instagram"></i>
              </RoundedLink>
            )}
            {twitterUrl && (
              <RoundedLink href={`https://twitter.com/${twitterUrl}`}>
                <i className="fa-brands fa-twitter"></i>
              </RoundedLink>
            )}
            <RoundedLink
              href={unsplashUrl}
              styles={`background: url(${unsplashPhoto}) 0 0 / cover no-repeat;`}
            />
          </RoundedLinksWrapper>
        </CardContent>
      </CardWrapper>
    </Fade>
  );
};

const changeColor = (color) => {
  const exampleColor = parseInt("d1d1d1", 16);
  return parseInt(color.substr(1), 16) > exampleColor ? "#000" : "#fff";
};

const SubtitleStyles = `
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardWrapper = styled.div`
  display: inline-block;
  font-size: 0;
  text-decoration: none;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  transition: 0.2s;
  bottom: 0;

  &:hover {
    bottom: 5px;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
`;

const RoundedLinksWrapper = styled.div`
  display: flex;
  a {
    color: ${(props) => changeColor(props.color)};
    background-color: ${(props) => props.color};
    box-shadow: 0px 3px 10px -3px ${(props) => props.color};
  }
`;

export default Card;
