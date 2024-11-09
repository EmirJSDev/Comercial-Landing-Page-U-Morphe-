import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import BusinessImage from "../../../images/business.png";
import BlogImage from "../../../images/blog.png";
import CommunityImage from "../../../images/community.png";
import NewsImage from "../../../images/news.png";

const items = [
  {
    image: BusinessImage,
    title: "Бизнес",
    description:
      "Платформа предлагает гибкие инструменты для внутренней коммуникации, планирования встреч, обмена документами и управления проектами, что особенно полезно для компаний и стартапов.",
  },
  {
    image: BlogImage,
    title: "Личный блог",
    description:
      "Прекрасный выбор для блогеров, которые хотят делиться своими мыслями, вести дневник или публиковать статьи и медиаконтент. Она упрощает управление контентом и взаимодействие с аудиторией.",
  },
  {
    image: CommunityImage,
    title: "Сообщество",
    description:
      "Подходит для активного общения и обмена идеями среди участников сообщества, обеспечивая возможность обсуждать интересные темы, анонсировать важные события и делиться полезным опытом.",
  },
  {
    image: NewsImage,
    title: "Новостной канал",
    description:
      "Идеально для медиа-проектов и новостных порталов, предоставляя возможность создавать новостные потоки, управлять редакционным планом и поддерживать обратную связь через комментарии, лайки и опросы.",
  },
];

const ForWhomSection: React.FC = () => {
  // Медиазапросы
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery(
    "(max-width:1199px) and (min-width:900px)",
  );
  const isSmallScreen = useMediaQuery(
    "(max-width:899px) and (min-width:600px)",
  );
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)");

  // Адаптивные размеры карточек
  const cardSizes = isLargeScreen
    ? { width: "504px", height: "552px", imageHeight: "312px" }
    : isMediumScreen
      ? { width: "420px", height: "460px", imageHeight: "260px" }
      : isSmallScreen
        ? { width: "360px", height: "400px", imageHeight: "220px" }
        : { width: "280px", height: "320px", imageHeight: "180px" }; // Extra Small Screen

  // Адаптивные отступы секции
  const sectionPadding = isLargeScreen
    ? "48px 24px"
    : isMediumScreen
      ? "40px 20px"
      : isSmallScreen
        ? "32px 16px"
        : "24px 12px";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: sectionPadding,
        textAlign: "center",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Заголовок */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: isSmallScreen || isExtraSmallScreen ? "32px" : "48px",
          fontWeight: 600,
          color: "#4c2e88",
          marginBottom: "16px",
        }}
      >
        Кому будет полезно
      </Typography>

      {/* Подзаголовок */}
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: isSmallScreen || isExtraSmallScreen ? "18px" : "24px",
          fontWeight: 400,
          color: "#7652b1",
          marginBottom: "48px",
        }}
      >
        Наше приложение идеально подойдет вам благодаря своей гибкости и
        множеству функций
      </Typography>

      {/* Карточки */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
          width: "100%",
        }}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: cardSizes.width,
              minWidth: cardSizes.width,
              maxHeight: cardSizes.height,
              minHeight: cardSizes.height,
              borderRadius: "24px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              backgroundColor: "#F7EEF6B2",
              padding: "24px",
            }}
          >
            <CardMedia
              component="img"
              alt={item.title}
              image={item.image}
              sx={{
                borderRadius: "24px 24px 0 0",
                objectFit: "cover",
                width: "100%",
                maxHeight: cardSizes.imageHeight,
                minHeight: cardSizes.imageHeight,
              }}
            />
            <CardContent
              sx={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontSize:
                    isSmallScreen || isExtraSmallScreen ? "16px" : "20px",
                  fontWeight: 600,
                  color: "#3f2274",
                  marginBottom: "16px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize:
                    isSmallScreen || isExtraSmallScreen ? "14px" : "16px",
                  fontWeight: 400,
                  color: "#4c2e88",
                  lineHeight: "24px",
                  textAlign: "center",
                  maxWidth: "90%", // Ограничение ширины текста
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ForWhomSection;
