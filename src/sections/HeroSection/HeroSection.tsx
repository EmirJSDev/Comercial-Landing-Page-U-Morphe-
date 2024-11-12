import React from "react";
import { Box, Button, Typography } from "@mui/material";
import BackgroundHero from "../../assets/images/BackgroundHero.png";
import BackgroundHeroEL from "../../assets/images/BackgroundHeroEL.png";
import useMediaQuery from "../../hooks/useMediaQuery";

const HeroSection: React.FC = () => {
  const {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isUltraWide,
  } = useMediaQuery();

  const fontSize = React.useMemo(() => {
    if (isExtraSmall) return "28px";
    if (isSmall) return "36px";
    if (isMedium) return "48px";
    return "72px";
  }, [isExtraSmall, isSmall, isMedium]);

  const lineHeight = React.useMemo(() => {
    if (isExtraSmall) return "36px";
    if (isSmall) return "48px";
    if (isMedium) return "64px";
    return "93.6px";
  }, [isExtraSmall, isSmall, isMedium]);

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
        width: "100%",
        minHeight: (() => {
          if (isExtraSmall) return "40vh";
          if (isSmall) return "60vh";
          if (isMedium) return "80vh";
          return "100vh";
        })(),
        backgroundImage:
          isExtraSmall || isSmall || isMedium || isLarge || isExtraLarge
            ? `url(${BackgroundHero})`
            : `url(${BackgroundHeroEL})`,
        backgroundSize:
          isExtraSmall || isSmall || isMedium || isLarge ? "contain" : "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        color: themeColors.secondary,
        userSelect: "none",
        padding: (() => {
          if (isExtraSmall) return "0 16px";
          if (isSmall) return "24px 16px";
          if (isMedium) return "48px 0";
          return "80px 20px";
        })(),
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
          paddingTop: (() => {
            if (isExtraSmall) return "80px";
            if (isSmall) return "100px";
            return "150px";
          })(),
        }}
      >
        U - Morphe
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          ...typographyStyles,
          fontSize: isExtraSmall ? "14px" : isSmall ? "18px" : "24px",
          fontWeight: 600,
          lineHeight: isExtraSmall ? "20px" : isSmall ? "24px" : "31.2px",
          mb: 4,
        }}
      >
        Все задачи решаются в одной экосистеме.
      </Typography>
      <Button
        variant="contained"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: isExtraSmall ? "12px" : isSmall ? "14px" : "16px",
          fontWeight: 400,
          lineHeight: "20.8px",
          color: themeColors.primary,
          backgroundColor: themeColors.secondary,
          textTransform: "none",
          padding: isExtraSmall
            ? "6px 16px"
            : isSmall
              ? "8px 20px"
              : "10px 25px",
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
