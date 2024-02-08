// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import styled from "@emotion/styled";
import Songs from "./pages/Songs";
import Artists from "./pages/Artists";
import Album from "./pages/Album";
import AlbumDetail from "./pages/AlbumDetail";
import ArtistDetail from "./pages/ArtistDetail";

function App() {
  const Box = styled.div`
    background-color: #1d2339;
    min-height: 100vh;
    color: white;
  `;
  return (
    <>
      <Box>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout isOpen={true} />}>
              <Route path="" element={"home"} />
              <Route path="song" element={<Songs />} />
              <Route path="artist" element={<Artists />} />
              <Route path="artist/:artist" element={<ArtistDetail />} />
              <Route path="album" element={<Album />} />
              <Route path="album/:album" element={<AlbumDetail />} />
            </Route>
            <Route path="*" element={"404 page not found"} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
