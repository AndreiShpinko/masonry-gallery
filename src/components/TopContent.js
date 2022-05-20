import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopContent = ({ unsplashUrl, userImage, name, username }) => {
  return (
    <TopContentWrap>
      <User>
        <UserImageWrap href={unsplashUrl}>
          <UserImage src={userImage} alt="" />
        </UserImageWrap>
        <UserAboutWrap>
          <Title>{name}</Title>

          <UnsplashLink href={unsplashUrl}>
            <Icon>
              <i className="fa-brands fa-unsplash"></i>
            </Icon>
            <UnderlineLink>{username}</UnderlineLink>
          </UnsplashLink>
        </UserAboutWrap>
      </User>
      <Link to="/">
        <HomeLink>
          <i className="fa-solid fa-house-chimney"></i>
        </HomeLink>
      </Link>
    </TopContentWrap>
  );
};

const UserAboutWrap = styled.div`
  @media screen and (max-width: 480px) {
    margin-top: 15px;
    text-align: center;
  }
`;

const UnderlineLink = styled.span`
  display: inline-block;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 25%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #1875ff;
    z-index: -5;
    transition: 0.2s;
    opacity: 0;
  }
`;

const UnsplashLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    ${UnderlineLink}:before {
      opacity: 0.4;
    }
  }
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
  @media screen and (max-width: 991px) {
    font-size: 1.5rem;
  }
`;

const TopContentWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HomeLink = styled.div`
  font-size: 2rem;
  color: #000;
  margin: 0 0 10px 10px;
  @media screen and (max-width: 480px) {
    margin: 0;
  }
`;

const User = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    order: 2;
    margin-top: 20px;
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
    margin: 0;
  }
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default TopContent;
