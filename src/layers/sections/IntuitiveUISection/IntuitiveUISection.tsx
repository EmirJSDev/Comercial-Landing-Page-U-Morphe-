import React from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const IntuitiveUISection: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery(
    "(max-width:1199px) and (min-width:900px)",
  );
  const isSmallScreen = useMediaQuery(
    "(max-width:899px) and (min-width:600px)",
  );
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)");

  // Определяем размеры и стили в зависимости от размера экрана
  const containerPadding = isExtraSmallScreen
    ? "24px"
    : isSmallScreen
      ? "32px"
      : isMediumScreen
        ? "48px"
        : "64px";

  const headingFontSize = isSmallScreen || isExtraSmallScreen ? "24px" : "36px";
  const subHeadingFontSize =
    isSmallScreen || isExtraSmallScreen ? "16px" : "20px";

  const imageDimensions = isLargeScreen
    ? { width: "800px", height: "450px" }
    : isMediumScreen
      ? { width: "700px", height: "400px" }
      : isSmallScreen
        ? { width: "500px", height: "280px" }
        : { width: "300px", height: "200px" };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: containerPadding,
        textAlign: "center",
        gap: "24px",
      }}
    >
      {/* Заголовок */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: headingFontSize,
          fontWeight: 600,
          color: "#4C2E88",
        }}
      >
        Интуитивно понятный интерфейс
      </Typography>

      {/* Подзаголовок */}
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: subHeadingFontSize,
          fontWeight: 400,
          color: "#7652B1",
        }}
      >
        Ощутите удобство и простоту работы с нашей платформой.
      </Typography>

      {/* Видео с кнопкой */}
      <Box
        sx={{
          position: "relative",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: imageDimensions.width,
          height: imageDimensions.height,
        }}
      >
        <img
          alt="Интерфейс видео"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "24px",
          }}
        />
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            color: "#4C2E88",
            fontSize: "48px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <PlayCircleOutlineIcon sx={{ fontSize: "64px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default IntuitiveUISection;
