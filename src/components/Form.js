import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setGallery,
  setLoaderStatus,
} from "../redux/actionCreators/galleryActions";
import galleryServices from "../services/galleryServices";

import styled from "styled-components";

const Form = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [redInput, setRedInput] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (value) {
      setTitleValue(value);

      dispatch(setLoaderStatus(true));

      async function fetchDataByQuery() {
        const data = await new galleryServices().getPhotosByQuery(value);
        dispatch(setGallery(data));
      }
      fetchDataByQuery();

      setValue("");
    } else {
      setRedInput(true);
      setTimeout(() => {
        setRedInput(false);
      }, 1500);
    }
  };

  return (
    <>
      <ValueTitle>{titleValue}</ValueTitle>
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
            <i class="fa-solid fa-magnifying-glass"></i>
          )}
        </Button>
      </FormWrap>
    </>
  );
};

const Button = styled.button`
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #4f4f4f;
  border-radius: 15px;
  transition: all 0.3s;
  font-size: 1.2rem;
  color: #fff;
  box-shadow: 0px 3px 10px -3px #1875ff;
  position: relative;
  border: none;
  background: #1875ff;
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 768px) {
    padding: 0.6rem 12px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 3px 10px 0px #1875ff;
  }
`;


const ValueTitle = styled.h2`
  text-align: center;
  margin-top: 0.8rem;
  font-size: 1.6rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FormWrap = styled.form`
  width: 80%;
  margin: 2rem auto 4rem;
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
