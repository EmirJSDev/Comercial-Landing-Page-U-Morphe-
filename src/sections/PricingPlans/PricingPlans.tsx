import React from "react";
import { Box, Button, Paper, Tooltip, Typography } from "@mui/material";

import { ReactComponent as CheckIcon } from "../../assets/icons/checked.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";

const lightTheme = {
  backgroundColor: "#F7EEF6",
  textColor: "#4C2E88",
  priceColor: "#3F2274",
  descriptionColor: "#6F4BAF",
  buttonBackgroundColor: "#6F4BAF",
  buttonTextColor: "#FFFFFF",
  iconColor: "#4C2E88", // Фиолетовый
};

const purpleTheme = {
  backgroundColor: "#4C2E88",
  textColor: "#FFFFFF",
  priceColor: "#FFFFFF",
  descriptionColor: "#E5E5E5",
  buttonBackgroundColor: "#FFFFFF",
  buttonTextColor: "#A590C1",
  iconColor: "#FFFFFF", // Белый
};

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
              backgroundColor: lightTheme.backgroundColor,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: purpleTheme.backgroundColor,
                "& *": {
                  color: purpleTheme.textColor,
                },
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
                  color: lightTheme.textColor,
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
                  color: lightTheme.priceColor,
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
                  color: lightTheme.descriptionColor,
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
                      gap: "12px",
                      marginBottom: "12px",
                      color: purpleTheme.backgroundColor
                        ? lightTheme.iconColor
                        : purpleTheme.iconColor,
                    }}
                  >
                    <CheckIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "currentColor",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        flex: 1,
                      }}
                    >
                      {feature.text}
                    </Typography>
                    {feature.info && (
                      <Tooltip title={feature.info} arrow>
                        <InfoIcon
                          style={{
                            width: "16px",
                            height: "16px",
                            color: "currentColor",
                          }}
                        />
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
                  backgroundColor: lightTheme.buttonBackgroundColor,
                  color: lightTheme.buttonTextColor,
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
