import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import BackgroundImage from "../../images/about-image.png";
import DotImage from "../../images/about-image-dot.png";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 768px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 192px;
  user-select: none;
  position: relative;
`;

const Title = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 62px;
  color: #3f2274;
  text-align: center;
  user-select: none;
`;

const Subtitle = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  color: #6f4baf;
  margin-top: 48px;
  text-align: left;
  user-select: none;
`;

const ContentWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 98px;
  user-select: none;
`;

const TextBox = styled(Box)`
  max-width: 516px;
  max-height: 528px;
  background: #f7eef6b2;
  border-radius: 24px;
  box-shadow: 0 4px 4px 0 #00000040;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 157px;
  padding: 48px;
  user-select: none;
`;

const TextContent = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #4c2e88;
  user-select: none;
`;

const ImageBox = styled(Box)`
  background-image: url(${BackgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  width: 600px;
  height: 600px;
  flex-shrink: 0;
  user-select: none;
`;

const DotImageBox = styled(Box)`
  position: absolute;
  bottom: -250px;
  right: 0;
  background-image: url(${DotImage});
  background-size: contain;
  background-repeat: no-repeat;
  width: 289px;
  height: 289px;
  user-select: none;
`;

const AboutSection: React.FC = () => {
  return (
    <Container>
      <Title>Одно пространство — множество решений</Title>
      <Subtitle>Платформа, которая подстраивается под вас</Subtitle>
      <ContentWrapper>
        <TextBox>
          <TextContent>
            U-Morphe — это не просто платформа для коммуникации, а ваш
            персонализированный инструмент для создания идеального рабочего
            пространства. Наша CRM-система подходит как для небольших команд,
            так и для крупных сообществ. Вы можете настроить всё: управление
            доступом, процесс регистрации и набор функций, включая интеграцию
            сторонних решений.
            <br />
            <br />
            Ищете систему с гибким управлением пользователями? Не проблема! Наши
            модули расширяют функционал, позволяя решать конкретные задачи
            вашего сообщества.
            <br />
            <br />
            Мы акцентируем внимание на удобстве, безопасности и
            конфиденциальности, чтобы совместная работа была не только
            эффективной, но и комфортной.
            <br />
            <br />
            Настройте U-Morphe в соответствии с вашими требованиями. Благодаря
            интуитивно понятному интерфейсу обучение вашей команды станет
            быстрым и простым. Каждый участник сможет быстро освоить необходимые
            функции и начать активно использовать платформу.
            <br />
            <br />
            Откройте новые горизонты для совместной работы и сделайте каждую
            встречу продуктивной!
          </TextContent>
        </TextBox>
        <ImageBox />
        <DotImageBox />
      </ContentWrapper>
    </Container>
  );
};

export default AboutSection;
