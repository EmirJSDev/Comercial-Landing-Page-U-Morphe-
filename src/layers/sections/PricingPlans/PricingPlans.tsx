import React from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";

import CheckedPurple from "../../../icons/chekedPurple.png";
import CheckedWhite from "../../../icons/chekedWhite.png";
import IPurple from "../../../icons/iPurple.png";
import IWhite from "../../../icons/iWhite.png";

const PricingPlans: React.FC = () => {
  const plans = [
    {
      title: "Базовый",
      price: "бесплатно",
      description: "Запустите свой бизнес с помощью нашей CRM-системы",
      features: [
        { text: "Установка системы", info: "Подробности об установке" },
        { text: "Защита всех данных" },
        { text: "Совместная работа", info: "Подробности о совместной работе" },
        { text: "Система прав и ролей", info: "Подробности о правах и ролях" },
        { text: "Интеграция", info: "Подробности об интеграции" },
        { text: "Круглосуточная поддержка" },
        { text: "Общий диск 10 ГБ" },
        { text: "До 50 участников" },
      ],
      isHighlighted: false,
    },
    {
      title: "Стандарт",
      price: "20 000 ₽ / мес",
      description: "Создайте эффективное взаимодействие в вашей команде",
      features: [
        { text: "Установка системы", info: "Подробности об установке" },
        { text: "Защита всех данных" },
        { text: "Совместная работа", info: "Подробности о совместной работе" },
        { text: "Система прав и ролей", info: "Подробности о правах и ролях" },
        { text: "Интеграция", info: "Подробности об интеграции" },
        { text: "Приоритетная поддержка" },
        { text: "Общий диск 50 ГБ" },
        { text: "До 100 участников" },
      ],
      isHighlighted: false,
    },
    {
      title: "Премиум",
      price: "50 000 ₽ / мес",
      description: "Оптимизируйте бизнес-процессы в своей компании",
      features: [
        { text: "Установка системы", info: "Подробности об установке" },
        { text: "Защита всех данных" },
        { text: "Совместная работа", info: "Подробности о совместной работе" },
        { text: "Система прав и ролей", info: "Подробности о правах и ролях" },
        { text: "Интеграция", info: "Подробности об интеграции" },
        { text: "Персональный консультант" },
        { text: "Общий диск 1 ТБ" },
        { text: "Нет ограничений" },
        { text: "Настройки пользователя", info: "Подробности о настройках" },
        { text: "Проверка сервисов", info: "Подробности о проверке" },
      ],
      isHighlighted: true,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px",
        backgroundColor: "#FBE5E7",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Montserrat Alternates, sans-serif",
          fontWeight: 700,
          fontSize: "32px",
          color: "#4C2E88",
          marginBottom: "8px",
        }}
      >
        Подберите подходящий план
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          color: "#6F4BAF",
          marginBottom: "32px",
        }}
      >
        Экономьте 20% при ежегодной оплате
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {plans.map((plan, index) => (
          <Paper
            key={index}
            sx={{
              width: "360px",
              padding: "24px",
              borderRadius: "16px",
              backgroundColor: plan.isHighlighted ? "#A590C1" : "#F7EEF6",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: plan.isHighlighted ? "#9268AC" : "#E3D4E8",
              },
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: plan.isHighlighted ? "#FFFFFF" : "#4C2E88",
                  marginBottom: "8px",
                }}
              >
                {plan.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: plan.isHighlighted ? "#FFFFFF" : "#3F2274",
                  marginBottom: "8px",
                }}
              >
                {plan.price}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: plan.isHighlighted ? "#E5E5E5" : "#6F4BAF",
                  marginBottom: "16px",
                }}
              >
                {plan.description}
              </Typography>
              <Box>
                {plan.features.map((feature, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <Box
                      component="img"
                      src={plan.isHighlighted ? CheckedWhite : CheckedPurple}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: plan.isHighlighted ? "#FFFFFF" : "#4C2E88",
                        flex: 1,
                      }}
                    >
                      {feature.text}
                    </Typography>
                    {feature.info && (
                      <Tooltip title={feature.info} arrow>
                        <IconButton size="small">
                          <Box
                            component="img"
                            src={plan.isHighlighted ? IWhite : IPurple}
                          />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ marginTop: "auto" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: plan.isHighlighted ? "#FFFFFF" : "#6F4BAF",
                  color: plan.isHighlighted ? "#A590C1" : "#FFFFFF",
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontWeight: 600,
                  borderRadius: "24px",
                  padding: "8px 16px",
                  textTransform: "none",
                }}
              >
                Подключить
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default PricingPlans;
