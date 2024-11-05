import React from "react";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: "#fcf0f2",
        display: "flex",
        justifyContent: "center",
        padding: "0 156px",
        marginTop: "24px",
        maxHeight: "72px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          minHeight: "72px",
          padding: 0,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "31.2px",
            color: "#FF7F00",
            userSelect: "none",
          }}
        >
          U - Morphe
        </Typography>

        <Box sx={{ display: "flex", gap: "36px" }}>
          {["О проекте", "Возможности", "Для кого", "Тарифы", "Контакты"].map(
            (text, index) => (
              <Link
                key={index}
                href={`#${text.toLowerCase()}`}
                color="inherit"
                underline="none"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20.8px",
                  color: "#5A287F",
                  position: "relative",
                  transition: "color 0.3s ease",
                  userSelect: "none",
                  "&:hover": {
                    color: "#FF7F00",
                    "&::after": {
                      width: "100%",
                    },
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#FF7F00",
                    transition: "width 0.3s ease",
                  },
                }}
              >
                {text}
              </Link>
            ),
          )}
        </Box>

        <Button
          variant="outlined"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20.8px",
            color: "#5A287F",
            borderColor: "#5A287F",
            borderRadius: "20px",
            padding: "5px 20px",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#913E98", // Фиолетовый фон при наведении
              color: "#fff", // Белый текст при наведении
              borderColor: "#913E98", // Изменение цвета границы
              boxShadow: "0px 4px 20px rgba(145, 62, 152, 0.5)",
            },
          }}
        >
          Оставить заявку &rarr;
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
