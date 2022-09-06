import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  setHomePageGallery,
  setHomePageSearchValue,
  setHomePageGalleryHasError,
} from "../../core/redux/actionCreators/actionCreators";
import UnsplashServices from "../../core/services/UnsplashServices";

import Fade from "react-reveal/Fade";
import Title from "../ui/Title";
import Button from "../ui/Button";

const Form = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [redInput, setRedInput] = useState(false);

  const searchValue = useSelector((state) => state.home.searchValue);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (value) {
      dispatch(setHomePageSearchValue(value));
      dispatch(setHomePageGallery(false));
      setValue("");

      UnsplashServices.getGalleryByQuery(value)
        .then((data) => {
          dispatch(setHomePageGallery(data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(setHomePageGalleryHasError(error));
        });
    } else {
      setRedInput(true);
      setTimeout(() => {
        setRedInput(false);
      }, 1500);
    }
  };

  return (
    <>
      <Fade when={searchValue}>
        <Title styles={TitleStyles}>{searchValue}</Title>
      </Fade>
      <FormWrap action="#" onSubmit={(e) => handleFormSubmit(e)}>
        <Input
          type="text"
          aria-label="search-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          warning={redInput}
        />
        <Button name="search-button">
          {window.innerWidth > 768 ? (
            "Search"
          ) : (
            <i className="fa-solid fa-magnifying-glass"></i>
          )}
        </Button>
      </FormWrap>
    </>
  );
};

const TitleStyles = `
  text-align: center;
  margin-top: 0.8rem;
`;

const FormWrap = styled.form`
  width: 80%;
  margin: 2rem auto 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 30rem;
  padding: 0.8rem 1rem;
  margin-right: 1rem;
  font-size: 1.1rem;
  border-radius: 15px;
  transition: 0.3s;
  border: none;
  box-shadow: 0px 3px 10px -3px ${(props) => (props.warning ? "red" : "#eee")};
  background-color: #eee;

  @media screen and (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    margin-right: 0.5rem;
  }

  &:focus {
    outline: none;
  }
`;

export default Form;
