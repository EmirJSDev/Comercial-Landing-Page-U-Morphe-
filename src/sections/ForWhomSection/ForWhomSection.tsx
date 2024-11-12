import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import BusinessImage from "../../assets/images/business.png";
import BlogImage from "../../assets/images/blog.png";
import CommunityImage from "../../assets/images/community.png";
import NewsImage from "../../assets/images/news.png";

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
  const { isExtraSmall, isSmall } = useMediaQuery();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "48px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: "48px",
          fontWeight: 600,
          color: "#4c2e88",
          lineHeight: "62px",
          marginBottom: "32px",
        }}
      >
        Кому будет полезно
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: "24px",
          fontWeight: 400,
          color: "#7652b1",
          marginBottom: "48px",
        }}
      >
        Наше приложение идеально подойдет вам благодаря своей гибкости и
        множеству функций
      </Typography>
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
          <Paper
            key={index}
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
              borderRadius: "16px",
              backgroundColor: "#f7eef6",
              textAlign: "center",
              minWidth: "360px",
              maxWidth: "360px",
              minHeight: "380px",
              maxHeight: "380px",
              flex: "1 1 calc(50% - 24px)", // 2 карточки в ряд
              "@media (max-width:768px)": {
                flex: "1 1 100%", // 1 карточка в ряд
              },
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat Alternates, sans-serif",
                fontSize: isSmall || isExtraSmall ? "18px" : "20px",
                fontWeight: 600,
                color: "#3f2274",
                marginBottom: "8px",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#4c2e88",
              }}
            >
              {item.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ForWhomSection;
