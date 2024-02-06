// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import styled from "@emotion/styled";
import Songs from "./pages/Songs";

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
            </Route>
            <Route path="*" element={"404 page not found"} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
