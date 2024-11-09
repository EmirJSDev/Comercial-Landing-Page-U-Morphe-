import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import CalendarIcon from "../../../icons/CalendarToday.jpg";
import ChatIcon from "../../../icons/Chat.jpg";
import VideoIcon from "../../../icons/VideoCall.jpg";
import DesktopIcon from "../../../icons/DesktopWindows.jpg";
import AssignmentIcon from "../../../icons/Assignment.jpg";
import SecurityIcon from "../../../icons/Security.jpg";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: CalendarIcon,
      title: "Календарь",
      description:
        "Инструмент для планирования встреч, мероприятий и совместной работы с возможностью синхронизации с внешними календарями.",
    },
    {
      icon: ChatIcon,
      title: "Мессенджер",
      description:
        "Мгновенный чат для общения с коллегами и членами сообщества, поддерживающий отправку файлов, ссылки и реакции.",
    },
    {
      icon: VideoIcon,
      title: "Видеоконференции",
      description:
        "Интегрированная платформа для видеозвонков и вебинаров с функциями совместного использования экрана и записи сессий.",
    },
    {
      icon: DesktopIcon,
      title: "Виртуальный офис",
      description:
        "Позволяет сотрудникам удобно резервировать свободные столы и кабинеты, что способствует повышению эффективности работы.",
    },
    {
      icon: AssignmentIcon,
      title: "Планирование",
      description:
        "Система для отслеживания и распределения задач между пользователями с возможностью назначения ролей и контроля сроков.",
    },
    {
      icon: SecurityIcon,
      title: "Система ролей",
      description:
        "Гибкая система управления правами доступа, которая позволяет назначать роли и разграничивать доступ к различным функциям и контенту.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "192px",
        maxWidth: "1440px",
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
          marginBottom: "62px",
        }}
      >
        Функции и интеграции
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontSize: "24px",
          fontWeight: 400,
          lineHeight: "31px",
          color: "#7652b1",
          marginBottom: "96px",
        }}
      >
        Все задачи решаются в одном пространстве
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
        {features.map((feature, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
              borderRadius: "24px",
              background: "#f7eef6",
              textAlign: "center",
              maxWidth: "360px",
              maxHeight: "390px",
              flex: "1 1 calc(33.33% - 24px)", // 3 карточки в ряд
            }}
          >
            <Box
              sx={{
                width: "144px",
                height: "144px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fdecef",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat Alternates, sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#3f2274",
                marginTop: "16px",
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "21px",
                color: "#4c2e88",
                marginTop: "16px",
              }}
            >
              {feature.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturesSection;
