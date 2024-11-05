import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { ReactComponent as CalendarIcon } from "../../icons/CalendarToday.svg";
import { ReactComponent as ChatIcon } from "../../icons/Chat.svg";
import { ReactComponent as VideoIcon } from "../../icons/VideoCall.svg";
import { ReactComponent as DesktopIcon } from "../../icons/DesktopWindows.svg";
import { ReactComponent as AssignmentIcon } from "../../icons/Assignment.svg";
import { ReactComponent as SecurityIcon } from "../../icons/Security.svg";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 1080px;
  margin: 0 auto;
  text-align: center;
  user-select: none;
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

const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  justify-items: center;
`;

const Card = styled(Box)`
  max-width: 360px;
  max-height: 432px;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #ddd;
  background: #f7eef6;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const FeatureTitle = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #3f2274;
`;

const FeatureDescription = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #4c2e88;
`;

const FeaturesSection: React.FC = () => {
  return (
    <Container>
      <Title>Функции и интеграции</Title>
      <Subtitle>Все задачи решаются в одном пространстве</Subtitle>
      <GridContainer>
        <Card>
          <IconContainer>
            <CalendarIcon width="100%" height="100%" />
          </IconContainer>
          <FeatureTitle>Календарь</FeatureTitle>
          <FeatureDescription>
            Инструмент для планирования встреч, мероприятий и совместной работы
            с возможностью синхронизации с внешними календарями.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <ChatIcon width="100%" height="100%" />
          </IconContainer>
          <FeatureTitle>Мессенджер</FeatureTitle>
          <FeatureDescription>
            Мгновенный чат для общения с коллегами и членами сообщества,
            поддерживающий отправку файлов, ссылки и реакции.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <VideoIcon width="100%" height="100%" />
          </IconContainer>
          <FeatureTitle>Видеоконференции</FeatureTitle>
          <FeatureDescription>
            Интегрированная платформа для видеозвонков и вебинаров с функциями
            совместного использования экрана и записи сессий.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <DesktopIcon width="100%" height="100%" />
          </IconContainer>
          <FeatureTitle>Виртуальный офис</FeatureTitle>
          <FeatureDescription>
            Позволяет сотрудникам удобно резервировать свободные столы и
            кабинеты, что способствует повышению эффективности работы.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <AssignmentIcon width="100%" height="100%" />
          </IconContainer>
          <FeatureTitle>Планирование</FeatureTitle>
          <FeatureDescription>
            Система для отслеживания и распределения задач между пользователями
            с возможностью назначения ролей и контроля сроков.
          </FeatureDescription>
        </Card>
        <Card>
          <IconContainer>
            <SecurityIcon width="100%" height="100%" />
          </IconContainer>
          <FeatureTitle>Система ролей</FeatureTitle>
          <FeatureDescription>
            Гибкая система управления правами доступа, которая позволяет
            назначать роли и разграничивать доступ к различным функциям и
            контенту.
          </FeatureDescription>
        </Card>
      </GridContainer>
    </Container>
  );
};

export default FeaturesSection;
