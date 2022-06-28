import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import "./reset.css";

import Home from "./pages/Home";
import Photo from "./pages/Photo";

function App() {
  return (
    <Wrapper>
      <BrowserRouter basename="/masonry-gallery">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo/:id" element={<Photo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export default App;
