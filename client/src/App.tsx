// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import styled from "@emotion/styled";

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
            <Route path="/" element={<Layout />}>
              <Route path="" element={"home"} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
