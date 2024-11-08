import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import CalendarIcon from "../../../icons/CalendarToday.jpg";
import ChatIcon from "../../../icons/Chat.jpg";
import VideoIcon from "../../../icons/VideoCall.jpg";
import DesktopIcon from "../../../icons/DesktopWindows.jpg";
import AssignmentIcon from "../../../icons/Assignment.jpg";
import SecurityIcon from "../../../icons/Security.jpg";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
  user-select: none;
  max-width: 1440px;
  padding-bottom: 192px;
`;

const Title = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 48px;
  font-weight: 600;
  color: #4c2e88;
  line-height: 62px;
  text-align: center;
  margin-bottom: 62px;
`;

const Subtitle = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  color: #7652b1;
  margin-top: 12px;
  margin-bottom: 96px;
  text-align: center;
`;

const FlexContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap; /* Позволяет перенос карточек */
  justify-content: center; /* Центровка карточек */
  gap: 24px;
  width: 100%;
  align-items: center;
`;

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 calc(33.33% - 24px); /* 3 карточки в ряд */
  max-width: 360px; /* Для ограничения размера карточки */
  max-height: 390px;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #ddd;
  background: #f7eef6;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const IconContainer = styled(Box)`
  width: 144px;
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdecef;
  border-radius: 24px;
  overflow: hidden;
`;

const FeatureTitle = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #3f2274;
  margin-top: 16px;
`;

const FeatureDescription = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  color: #4c2e88;
  margin-top: 16px;
`;

const FeaturesSection: React.FC = () => {
  return (
    <Container>
      <Title>Функции и интеграции</Title>
      <Subtitle>Все задачи решаются в одном пространстве</Subtitle>
      <FlexContainer>
        <Card>
          <IconContainer>
            <img
              src={CalendarIcon}
              alt="Календарь"
              width="100%"
              height="100%"
            />
          </IconContainer>
          <FeatureTitle>Календарь</FeatureTitle>
          <FeatureDescription>
            Инструмент для планирования встреч, мероприятий и совместной работы
            с возможностью синхронизации с внешними календарями.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <img src={ChatIcon} alt="Мессенджер" width="100%" height="100%" />
          </IconContainer>
          <FeatureTitle>Мессенджер</FeatureTitle>
          <FeatureDescription>
            Мгновенный чат для общения с коллегами и членами сообщества,
            поддерживающий отправку файлов, ссылки и реакции.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <img
              src={VideoIcon}
              alt="Видеоконференции"
              width="100%"
              height="100%"
            />
          </IconContainer>
          <FeatureTitle>Видеоконференции</FeatureTitle>
          <FeatureDescription>
            Интегрированная платформа для видеозвонков и вебинаров с функциями
            совместного использования экрана и записи сессий.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <img
              src={DesktopIcon}
              alt="Виртуальный офис"
              width="100%"
              height="100%"
            />
          </IconContainer>
          <FeatureTitle>Виртуальный офис</FeatureTitle>
          <FeatureDescription>
            Позволяет сотрудникам удобно резервировать свободные столы и
            кабинеты, что способствует повышению эффективности работы.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <img
              src={AssignmentIcon}
              alt="Планирование"
              width="100%"
              height="100%"
            />
          </IconContainer>
          <FeatureTitle>Планирование</FeatureTitle>
          <FeatureDescription>
            Система для отслеживания и распределения задач между пользователями
            с возможностью назначения ролей и контроля сроков.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <img
              src={SecurityIcon}
              alt="Система ролей"
              width="100%"
              height="100%"
            />
          </IconContainer>
          <FeatureTitle>Система ролей</FeatureTitle>
          <FeatureDescription>
            Гибкая система управления правами доступа, которая позволяет
            назначать роли и разграничивать доступ к различным функциям и
            контенту.
          </FeatureDescription>
        </Card>
      </FlexContainer>
    </Container>
  );
};

export default FeaturesSection;
