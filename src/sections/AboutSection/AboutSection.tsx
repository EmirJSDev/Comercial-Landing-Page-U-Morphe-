import React from "react";
import { Box } from "@mui/material";
import ResponsiveTitle from "../../components/Titles/ResponsiveTitle";
import ResponsiveSubTitle from "../../components/Titles/ResponsiveSubTitle";
import useMediaQuery from "../../hooks/useMediaQuery";
import BackgroundImage from "../../assets/images/about-image.png";

const AboutSection: React.FC = () => {
  const {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isUltraWide,
  } = useMediaQuery();

  const sectionHeight = (() => {
    if (isExtraSmall) return "50vh";
    if (isSmall) return "60vh";
    if (isMedium) return "70vh";
    if (isLarge || isExtraLarge) return "80vh";
    return "100vh";
  })();

  const sectionPadding = (() => {
    if (isExtraSmall) return "96px 16px";
    if (isSmall) return "96px 24px";
    if (isMedium) return "128px 48px";
    if (isLarge || isExtraLarge) return "160px 64px";
    return "192px 0";
  })();

  const imageSize = (() => {
    if (isExtraSmall || isSmall) return "300px";
    if (isMedium) return "600px";
    if (isLarge) return "700px";
    if (isExtraLarge) return "800px";
    return "900px";
  })();

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        padding: sectionPadding,
        minHeight: sectionHeight,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          width: isUltraWide ? imageSize : "0",
          height: isUltraWide ? imageSize : "0",
          zIndex: 0,
          display: isLarge || isExtraLarge || isUltraWide ? "block" : "none",
        }}
      />
      <ResponsiveTitle>Одно пространство — множество решений</ResponsiveTitle>
      <ResponsiveSubTitle>
        Платформа, которая подстраивается под вас
      </ResponsiveSubTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection:
            isSmall || isMedium || isLarge || isExtraLarge ? "column" : "row",
          alignItems: isSmall || isMedium || isLarge ? "center" : "flex-start",
          justifyContent: "space-between",
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
            maxWidth: isSmall ? "100%" : "516px",
            background: "#F7EEF6B2",
            borderRadius: "24px",
            padding: isSmall ? "24px" : "48px",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
            textAlign: "left",
          }}
        >
          <Box
            component="p"
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
            <br />
            <br />
            Откройте новые горизонты для совместной работы и сделайте каждую
            встречу продуктивной!
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
