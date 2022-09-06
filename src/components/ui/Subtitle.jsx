import React from "react";
import styled from "styled-components";

const Subtitle = ({ children, styles }) => {
  return <SubtitleStyled styles={styles}>{children}</SubtitleStyled>;
};

const SubtitleStyled = styled.span`
  font-size: 1rem;
  ${({ styles }) => styles}
`;

export default Subtitle;
