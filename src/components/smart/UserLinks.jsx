import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { array_of_colors } from "../../core/constants";

const UserLinks = () => {
  const {
    user: {
      links: { html: unsplashUrl },
      social: {
        portfolio_url: portfolioUrl,
        instagram_username: instagramName,
        twitter_username: twitterName,
      },
    },
    location: { title: photoLocation },
  } = useSelector((state) => state.photo.image);

  const linksAmount = [
    photoLocation,
    unsplashUrl,
    portfolioUrl,
    instagramName,
    twitterName,
  ].filter((el) => el).length;

  const getRandomColor = () => {
    return array_of_colors[Math.floor(Math.random() * array_of_colors.length)];
  };

  return (
    <Wrapper>
      <Links amount={linksAmount}>
        <UnsplashLink href={unsplashUrl} aria-label="unsplash-link">
          <i
            className="fa-brands fa-unsplash"
            style={{ color: getRandomColor() }}
          ></i>
        </UnsplashLink>
        {instagramName && (
          <Link
            href={`https://www.instagram.com/${instagramName}`}
            aria-label="instagram-link"
          >
            <i
              className="fa-brands fa-instagram"
              style={{ color: getRandomColor() }}
            ></i>
          </Link>
        )}
        {twitterName && (
          <Link
            href={`https://twitter.com/${twitterName}`}
            aria-label="twitter-link"
          >
            <i
              className="fa-brands fa-twitter"
              style={{ color: getRandomColor() }}
            ></i>
          </Link>
        )}
        {portfolioUrl && (
          <Link href={`${portfolioUrl}`} aria-label="portfolio-link">
            <i
              className="fa-solid fa-briefcase"
              style={{ color: getRandomColor() }}
            ></i>
          </Link>
        )}
        {photoLocation && (
          <Link
            href={`https://www.google.com.ua/maps/place/${photoLocation}`}
            aria-label="google-maps-link"
          >
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
  margin-top: 15px;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ amount }) => {
      if (amount == 1) return "2";
      else if (amount <= 3) return "3";
      else return "4";
    }},
    minmax(50px, 75px)
  );
  grid-template-rows: repeat(2, minmax(50px, 1fr));
  grid-gap: 6px;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #eee;
  aspect-ratio: 1 / 1;
  font-size: 2rem;
  text-decoration: none;
`;

const UnsplashLink = styled(Link)`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;

export default UserLinks;
