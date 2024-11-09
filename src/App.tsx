import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./layers/Header/Header";
import HeroSection from "./layers/sections/HeroSection/HeroSection";
import AboutSection from "./layers/sections/AboutSection/AboutSection";
import FeaturesSection from "./layers/sections/FeaturesSection/FeaturesSection";
import ForWhomSection from "./layers/sections/ForWhomSection/ForWhomSection";
import IntuitiveUISection from "./layers/sections/IntuitiveUISection/IntuitiveUISection";
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
        <FeaturesSection />
        <ForWhomSection />
        <IntuitiveUISection />
      </Box>
    </>
  );
};

export default App;
