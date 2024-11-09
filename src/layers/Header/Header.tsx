import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Тема Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7F00",
    },
    secondary: {
      main: "#5A287F",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

// Общие стили
const commonStyles = {
  fontFamily: "Roboto, sans-serif",
  borderRadius: "20px",
  transition: "all 0.3s ease",
};

// Ссылки навигации
const links = [
  { text: "О проекте", href: "#project" },
  { text: "Возможности", href: "#features" },
  { text: "Для кого", href: "#for-whom" },
  { text: "Тарифы", href: "#pricing" },
  { text: "Контакты", href: "#contacts" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMediumScreen = useMediaQuery("(max-width:1300px)");
  const isSmallScreen = useMediaQuery("(max-width:925px)");
  const isBurgerMenu = useMediaQuery("(max-width:768px)");
  const isIconButton = useMediaQuery("(max-width:970px)");
  const isVerySmallScreen = useMediaQuery("(max-width:300px)");

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          backgroundColor: "#fcf0f2",
          display: "flex",
          justifyContent: "center",
          padding: isMediumScreen ? "0 24px" : "0 156px",
          marginTop: "24px",
          minHeight: "72px",
          boxShadow: "0px 4px 4px 0px #00000040",
          backdropFilter: "blur(20px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: isMediumScreen ? "16px" : "24px", // Центрирование контента
          }}
        >
          {isBurgerMenu ? (
            <IconButton
              color="primary"
              aria-label="menu"
              onClick={handleMenuToggle}
              sx={{
                fontSize: "24px",
                color: theme.palette.primary.main,
                marginRight: "auto",
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            !isVerySmallScreen && (
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "31.2px",
                  color: theme.palette.primary.main,
                  userSelect: "none",
                  marginLeft: isSmallScreen ? 0 : "auto",
                  whiteSpace: "nowrap",
                  textAlign: "center", // Центрирование текста
                }}
              >
                U - Morphe
              </Typography>
            )
          )}

          {!isBurgerMenu && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Центрирование ссылок
                gap: "36px",
                marginLeft: "auto",
                marginRight: "0",
                padding: "0 24px",
              }}
            >
              {links.map(({ text, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  color="inherit"
                  underline="none"
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: isMediumScreen ? "14px" : "16px",
                    fontWeight: 400,
                    lineHeight: "20.8px",
                    color: theme.palette.secondary.main,
                    position: "relative",
                    transition: "color 0.3s ease",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      color: theme.palette.primary.main,
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
                      backgroundColor: theme.palette.primary.main,
                      transition: "width 0.3s ease",
                    },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          )}

          {isBurgerMenu
            ? !isVerySmallScreen && (
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "31.2px",
                    color: theme.palette.primary.main,
                    userSelect: "none",
                    flexGrow: 1, // Растягиваем текст для центрирования
                    textAlign: "center", // Центрируем текст
                  }}
                >
                  U - Morphe
                </Typography>
              )
            : null}

          {isIconButton ? (
            <IconButton
              color="primary"
              aria-label="send"
              sx={{
                ...commonStyles,
                fontSize: "24px",
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
                padding: "5px",
                marginLeft: "auto",
                "&:hover": {
                  backgroundColor: "#913E98",
                  color: "#fff",
                  borderColor: "#913E98",
                  boxShadow: "0px 4px 20px rgba(145, 62, 152, 0.5)",
                },
              }}
            >
              <SendIcon />
            </IconButton>
          ) : (
            <Button
              variant="outlined"
              sx={{
                ...commonStyles,
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20.8px",
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
                padding: "10px 20px",
                textTransform: "none",
                whiteSpace: "nowrap",
                margin: isMediumScreen ? 0 : "auto",
                "&:hover": {
                  backgroundColor: "#913E98",
                  color: "#fff",
                  borderColor: "#913E98",
                  boxShadow: "0px 4px 20px rgba(145, 62, 152, 0.5)",
                },
              }}
            >
              Оставить заявку &rarr;
            </Button>
          )}
        </Toolbar>

        <Drawer
          anchor="left"
          open={isMenuOpen}
          onClose={handleMenuToggle}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#e7b2b8",
              padding: "20px",
              width: "250px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              transition: "all 0.3s ease",
            },
          }}
        >
          <List>
            {links.map(({ text, href }, index) => (
              <ListItem
                key={index}
                onClick={handleMenuToggle}
                component="a"
                href={href}
                sx={{
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#ffdfef",
                  },
                }}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#FFFFFF", // белый цвет текста
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ marginY: "16px", backgroundColor: "#FFFFFF" }} />
        </Drawer>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
