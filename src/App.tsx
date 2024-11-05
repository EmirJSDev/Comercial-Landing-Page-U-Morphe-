import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./layers/Header";
import HeroSection from "./layers/sections/HeroSection";
import AboutSection from "./layers/sections/AboutSection";
import { Box } from "@mui/material";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: Arial, sans-serif;
        overflow-x: hidden;
    }

    #root {
        max-width: 1440px;
        margin: 0 auto;
        background: linear-gradient(180deg, #FBE5E7 0%, #E5BFC8 50%, #A590C1 100%);
    }

    h1 {
        font-size: calc(2rem + 1vw);
    }

    h2 {
        font-size: calc(1.5rem + 0.8vw);
    }

    h3 {
        font-size: calc(1.2rem + 0.5vw);
    }

    p, a, button {
        font-size: calc(1rem + 0.2vw);
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .container {
        padding: 20px;

        @media (min-width: 768px) {
            padding: 30px;
        }

        @media (min-width: 1200px) {
            padding: 50px;
        }
    }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Header />
        <HeroSection />
        <AboutSection />
      </Box>
    </>
  );
};

export default App;
