import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Card = ({
  imageUrl,
  color,
  unsplashUrl,
  unsplashPhoto,
  instagramUrl,
  twitterUrl,
  id,
}) => {
  const handlerLoadCard = () => setTimeout(() => setLoadedCard(true), 1000);

  const [loadedCard, setLoadedCard] = useState(false);

  return (
    <Fade
      bottom
      duration={1000}
      style={{
        width: "100%",
      }}
    >
      <CardWrapper onLoad={handlerLoadCard}>
        <Link to={`/photo/${id}`} aria-label="to-unsplash-image">
          <ImageWrapper color={color} loadedCard={loadedCard}>
            <Image src={imageUrl} alt="" />
          </ImageWrapper>
        </Link>
        <Buttons color={color}>
          {instagramUrl && (
            <ButtonInstagram
              aria-label="Instagram"
              href={`https://www.instagram.com/${instagramUrl}`}
            >
              <i className="fa-brands fa-instagram"></i>
            </ButtonInstagram>
          )}
          {twitterUrl && (
            <ButtonTwitter
              aria-label="Twitter"
              href={`https://twitter.com/${twitterUrl}`}
            >
              <i className="fa-brands fa-twitter"></i>
            </ButtonTwitter>
          )}
          <ButtonUnsplash
            aria-label="Unsplash"
            href={unsplashUrl}
            background={unsplashPhoto}
            color={color}
          />
        </Buttons>
      </CardWrapper>
    </Fade>
  );
};

const changeColor = (color) => {
  const exampleColor = parseInt("d1d1d1", 16);
  return parseInt(color.substr(1), 16) > exampleColor ? "#000" : "#fff";
};

const CardWrapper = styled.div`
  display: inline-block;
  font-size: 0;
  text-decoration: none;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  z-index: 5;
  transition: 0.2s;
  bottom: 0;
  overflow: hidden;
  border-radius: 7px;
  width: 100%;
  aspect-ratio: ${(props) => (props.loadedCard ? "auto" : "1")};

  &:hover {
    bottom: 5px;
    & + div {
      background-color: #eee;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    background-color: ${(props) => props.color};
    transition: 3s;
    opacity: ${(props) => (props.loadedCard ? "0" : "1")};
  }
`;

const Image = styled.img`
  border-radius: 7px;
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  padding: 25px 5px 10px;
  margin-top: -20px;
  background-color: #fff;
  justify-content: flex-end;
  transition: 0.3s;
  position: relative;
  border-radius: 15px;
  a {
    color: ${(props) => changeColor(props.color)};
    background-color: ${(props) => props.color};
    box-shadow: 0px 3px 10px -3px ${(props) => props.color};
  }
`;

const Button = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #1875ff;
  font-size: 1rem;
  color: #fff;
  box-shadow: 0px 3px 10px -3px #1875ff;
  cursor: pointer;
  margin: 0 3px;
  text-decoration: none;
`;

const ButtonUnsplash = styled(Button)`
  background: url(${(props) => props.background}) 0 0 / cover no-repeat;
`;

const ButtonTwitter = styled(Button)`
  font-size: 1.4rem;
`;

const ButtonInstagram = styled(Button)`
  font-size: 1.4rem;
`;

export default Card;
