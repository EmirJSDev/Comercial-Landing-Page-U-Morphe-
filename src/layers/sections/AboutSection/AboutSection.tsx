import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import BackgroundImage from "../../../images/about-image.png";

const AboutSection: React.FC = () => {
  const isMediumScreen = useMediaQuery("(max-width:1200px)");
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const isExtraSmallScreen = useMediaQuery("(max-width:600px)");
  const isNarrowScreen = useMediaQuery("(max-width:1300px)");

  // Определяем vh в зависимости от размеров экрана
  const sectionHeight = isExtraSmallScreen
    ? "50vh" // Очень маленькие экраны
    : isSmallScreen
      ? "60vh" // Маленькие экраны
      : isMediumScreen
        ? "70vh" // Средние экраны
        : "100vh"; // Широкие экраны

  const sectionPadding = isExtraSmallScreen
    ? "96px 16px" // Очень маленькие экраны
    : isSmallScreen
      ? "96px 24px" // Маленькие экраны
      : isMediumScreen
        ? "128px 48px" // Средние экраны
        : "192px 0"; // Широкие экраны

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding: sectionPadding,
        minHeight: sectionHeight,
      }}
    >
      {/* Графическое изображение */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: 0,
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          width: isNarrowScreen ? "0" : isSmallScreen ? "300px" : "800px",
          height: isNarrowScreen ? "0" : isSmallScreen ? "300px" : "800px",
          zIndex: 0,
          display: isNarrowScreen ? "none" : "block",
        }}
      />
      {/* Заголовок */}
      <Typography
        variant={isSmallScreen ? "h4" : "h2"}
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontWeight: 600,
          lineHeight: isSmallScreen ? "36px" : "62px",
          color: "#3F2274",
          textAlign: "center",
          marginBottom: isSmallScreen ? "16px" : "24px",
          zIndex: 2,
          position: "relative",
        }}
      >
        Одно пространство — множество решений
      </Typography>
      {/* Подзаголовок */}
      <Typography
        variant={isSmallScreen ? "body1" : "h6"}
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontWeight: 400,
          lineHeight: isSmallScreen ? "24px" : "31px",
          color: "#6F4BAF",
          textAlign: "center",
          marginBottom: isSmallScreen ? "24px" : "96px",
          zIndex: 2,
          position: "relative",
        }}
      >
        Платформа, которая подстраивается под вас
      </Typography>
      {/* Контент (текстовый блок) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen || isNarrowScreen ? "column" : "row",
          alignItems: isNarrowScreen ? "center" : "flex-start",
          justifyContent: isNarrowScreen ? "center" : "space-between",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          maxWidth: "1440px",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: isSmallScreen ? "100%" : "516px",
            background: "#F7EEF6B2",
            borderRadius: "24px",
            padding: isSmallScreen ? "24px" : "48px",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
            textAlign: "left",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "1.5",
              color: "#4C2E88",
            }}
          >
            U-Morphe — это не просто платформа для коммуникации, а ваш
            персонализированный инструмент для создания идеального рабочего
            пространства. Наша CRM-система подходит как для небольших команд,
            так и для крупных сообществ. Вы можете настроить всё: управление
            доступом, процесс регистрации и набор функций, включая интеграцию
            сторонних решений.
            <br />
            <br />
            Мы акцентируем внимание на удобстве, безопасности и
            конфиденциальности, чтобы совместная работа была не только
            эффективной, но и комфортной.
            <br />
            <br />
            Настройте U-Morphe в соответствии с вашими требованиями. Благодаря
            интуитивно понятному интерфейсу обучение вашей команды станет
            быстрым и простым.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
