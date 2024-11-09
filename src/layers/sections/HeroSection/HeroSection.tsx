import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import BackgroundHero from "../../../images/BackgroundHero.png";

const HeroSection: React.FC = () => {
  const isMediumScreen = useMediaQuery("(max-width:1200px)");
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const isExtraSmallScreen = useMediaQuery("(max-width:480px)");

  const fontSize = React.useMemo(() => {
    if (isMediumScreen) return "48px";
    if (isSmallScreen) return "36px";
    return "72px";
  }, [isMediumScreen, isSmallScreen]);

  const lineHeight = React.useMemo(() => {
    if (isMediumScreen) return "64px";
    if (isSmallScreen) return "48px";
    return "93.6px";
  }, [isMediumScreen, isSmallScreen]);

  const typographyStyles = {
    fontFamily: "Montserrat Alternates, sans-serif",
    color: "#F7EEF6",
  };

  const themeColors = {
    primary: "#913E98",
    secondary: "#F7EEF6",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: isExtraSmallScreen
          ? "100%"
          : isSmallScreen
            ? "100%"
            : isMediumScreen
              ? "100%"
              : "100%", // Пропорциональное уменьшение ширины
        minHeight: isExtraSmallScreen
          ? "30vh"
          : isSmallScreen
            ? "40vh"
            : "100vh", // Пропорциональное уменьшение высоты
        backgroundImage: `url(${BackgroundHero})`,
        backgroundSize: isMediumScreen || isSmallScreen ? "contain" : "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        color: themeColors.secondary,
        margin: "0 auto",
        userSelect: "none",
        padding: isMediumScreen ? "0 0 20px 0" : "0 0 250px 0",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          ...typographyStyles,
          fontSize,
          fontWeight: 700,
          lineHeight,
          mb: 2,
          paddingTop: isMediumScreen ? "100px" : "291px",
        }}
      >
        U - Morphe
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          ...typographyStyles,
          fontSize: isSmallScreen ? "18px" : "24px",
          fontWeight: 600,
          lineHeight: isSmallScreen ? "24px" : "31.2px",
          mb: 4,
          padding: isExtraSmallScreen ? "0 16px" : "0",
        }}
      >
        Все задачи решаются в одной экосистеме.
      </Typography>
      <Button
        variant="contained"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: isSmallScreen ? "14px" : "16px",
          fontWeight: 400,
          lineHeight: "20.8px",
          color: themeColors.primary,
          backgroundColor: themeColors.secondary,
          textTransform: "none",
          padding: isSmallScreen ? "8px 20px" : "10px 25px",
          borderRadius: "20px",
          transition: "all 0.3s ease",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            backgroundColor: themeColors.primary,
            color: themeColors.secondary,
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
