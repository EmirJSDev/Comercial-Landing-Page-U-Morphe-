import React from "react";
import { Box, Button, Typography } from "@mui/material";
import BackgroundHero from "../../../images/BackgroundHero.png";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        color: "#F7EEF6",
        margin: "0 auto",
        userSelect: "none",
        padding: "0 0 250px 0",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: "72px",
          fontWeight: 700,
          lineHeight: "93.6px",
          mb: 2,
        }}
      >
        U - Morphe
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "31.2px",
          mb: 4,
          color: "#F7EEF6",
        }}
      >
        Все задачи решаются в одной экосистеме.
      </Typography>
      <Button
        variant="contained"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "20.8px",
          color: "#913E98",
          backgroundColor: "#F7EEF6",
          textTransform: "none",
          padding: "10px 25px",
          borderRadius: "20px",
          transition: "all 0.3s ease",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            backgroundColor: "#913E98", // Фиолетовый фон при наведении
            color: "#fff", // Белый текст при наведении
            boxShadow: "0px 8px 20px rgba(145, 62, 152, 0.5)",
          },
        }}
      >
        Попробуй бесплатно!
      </Button>
    </Box>
  );
};

export default HeroSection;
