import React from "react";
import styled from "styled-components";

const UserLinks = ({ links }) => {
  const {
    unsplashUrl,
    instagramName,
    twitterName,
    portfolioUrl,
    photoLocation,
  } = links;

  const colors = [
    "#000",
    "#ff0000",
    "#0400ff",
    "#00df11",
    "#ede600",
    "#be00ed",
    "#ed0099",
    "#00c1ed",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Wrapper>
      <Links>
        <UnsplashLink href={unsplashUrl}>
          <i
            className="fa-brands fa-unsplash"
            style={{ color: getRandomColor() }}
          ></i>
        </UnsplashLink>
        {instagramName && (
          <Link href={`https://www.instagram.com/${instagramName}`}>
            <i
              className="fa-brands fa-instagram"
              style={{ color: getRandomColor() }}
            ></i>
          </Link>
        )}
        {twitterName && (
          <Link href={`https://twitter.com/${twitterName}`}>
            <i
              className="fa-brands fa-twitter"
              style={{ color: getRandomColor() }}
            ></i>
          </Link>
        )}
        {portfolioUrl && (
          <Link href={`${portfolioUrl}`}>
            <i
              className="fa-solid fa-briefcase"
              style={{ color: getRandomColor() }}
            ></i>
          </Link>
        )}
        {photoLocation && (
          <Link href={`https://www.google.com.ua/maps/place/${photoLocation}`}>
            <i
              className="fa-solid fa-location-dot"
              style={{ color: getRandomColor() }}
            ></i>
          </Link>
        )}
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: repeat(2, 75px);
  grid-gap: 6px;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #eee;
  aspect-ratio: 1 / 1;
  color: #000;
  font-size: 2rem;
  text-decoration: none;
`;

const UnsplashLink = styled(Link)`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;

export default UserLinks;
