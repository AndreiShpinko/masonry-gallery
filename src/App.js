import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home";
import Photo from "./pages/Photo";

function App() {
  return (
    <BrowserRouter basename="/masonry-gallery">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<Photo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
