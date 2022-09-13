import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import ImageWithLoad from "../ordinary/ImageWithLoad";
import { color_secondary, color_tertiary } from "../../core/constants";

const TopContent = () => {
  const {
    user: {
      links: { html: unsplashUrl },
      name,
      username,
    },
    urls: { regular: userAvatar },
  } = useSelector((state) => state.photo.image);

  return (
    <TopContentWrap>
      <UserImageWrap href={unsplashUrl}>
        <ImageWithLoad source={userAvatar} />
      </UserImageWrap>

      <UserAboutWrap>
        <Title>{name}</Title>

        <span>
          <IconLink href={unsplashUrl}>
            <Subtitle>
              <i className="fa-brands fa-unsplash"></i>
            </Subtitle>
          </IconLink>
          <UnderlineLink href={unsplashUrl}>
            <Subtitle>{username}</Subtitle>
          </UnderlineLink>
        </span>
      </UserAboutWrap>

      <HomeLink>
        <Link to="/">
          <i className="fa-solid fa-house-chimney"></i>
        </Link>
      </HomeLink>
    </TopContentWrap>
  );
};

const UserAboutWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 1;

  @media screen and (max-width: 480px) {
    margin-top: 15px;
    align-items: center;
    order: 2;
  }
`;

const UnderlineLink = styled.a`
  text-decoration: none;
  display: inline-block;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 25%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${color_tertiary};
    z-index: -5;
    transition: 0.2s;

    opacity: 0;
  }
  &:hover {
    &:before {
      opacity: 0.4;
    }
  }
`;

const IconLink = styled.a`
  margin-right: 10px;
  &:hover {
    & ~ ${UnderlineLink}:before {
      opacity: 0.4;
    }
  }
`;

const TopContentWrap = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HomeLink = styled.div`
  font-size: 2rem;
  color: ${color_secondary};
  margin: 0 0 10px 10px;
  @media screen and (max-width: 480px) {
    order: 0;
    margin: 0;
  }
`;

const UserImageWrap = styled.a`
  display: inline-block;
  flex: 0 0 125px;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 25px;
  box-shadow: 0px 4px 10px -5px #333;

  @media screen and (max-width: 991px) {
    margin-right: 15px;
    flex: 0 0 100px;
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 480px) {
    margin: 15px 0 0 0;
    order: 1;
  }
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default TopContent;
