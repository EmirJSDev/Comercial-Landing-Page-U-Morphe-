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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "../../Themes/MediaQuery/useMediaQuery"; // Тема Material-UI

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

  // Использование кастомного хука
  const {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isUltraWide,
  } = useMediaQuery();

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
          padding:
            isLarge || isMedium || isSmall || isExtraSmall
              ? "0 24px"
              : "0 156px",
          marginTop: "24px",
          minHeight: isExtraSmall ? "64px" : "72px",
          boxShadow: "0px 4px 4px 0px #00000040",
          backdropFilter: "blur(20px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: isLarge || isMedium ? "16px" : "24px",
          }}
        >
          {isSmall || isExtraSmall ? (
            <IconButton
              color="primary"
              aria-label="menu"
              onClick={handleMenuToggle}
              sx={{
                fontSize: "24px",
                color: theme.palette.primary.main,
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Montserrat Alternates, sans-serif",
                fontSize: isExtraSmall ? "20px" : isSmall ? "22px" : "24px",
                fontWeight: 600,
                lineHeight: isExtraSmall ? "28px" : "31.2px",
                color: theme.palette.primary.main,
                userSelect: "none",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              U - Morphe
            </Typography>
          )}

          {!isSmall && !isExtraSmall && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: isMedium || isLarge ? "24px" : "36px",
                margin: "0 auto",
                padding: "0 24px",
                flexGrow: 1,
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
                    fontSize: isMedium || isLarge ? "14px" : "16px",
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: "auto",
              gap: "16px",
            }}
          >
            {isMedium || isSmall || isExtraSmall ? (
              <IconButton
                color="primary"
                aria-label="send"
                sx={{
                  fontSize: "24px",
                  color: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                  padding: "5px",
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
                  fontSize: isUltraWide ? "18px" : "16px",
                  fontWeight: 400,
                  lineHeight: "20.8px",
                  color: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                  padding: "10px 20px",
                  textTransform: "none",
                  whiteSpace: "nowrap",
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
          </Box>
        </Toolbar>
        <Drawer
          anchor="left"
          open={isMenuOpen}
          onClose={handleMenuToggle}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#e7b2b8",
              padding: "20px",
              width: isSmall || isExtraSmall ? "200px" : "250px",
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
                    fontSize: isSmall || isExtraSmall ? "14px" : "16px",
                    fontWeight: 500,
                    color: "#FFFFFF",
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

//<Typography
//             variant="h6"
//             component="div"
//             sx={{
//               fontFamily: "Montserrat Alternates, sans-serif",
//               fontSize: isExtraSmall ? "20px" : isSmall ? "22px" : "24px",
//               fontWeight: 600,
//               lineHeight: isExtraSmall ? "28px" : "31.2px",
//               color: theme.palette.primary.main,
//               userSelect: "none",
//               whiteSpace: "nowrap",
//               textAlign: "center",
//               display:
//                 isMedium || isLarge || isExtraLarge || isUltraWide
//                   ? "none"
//                   : "flex",
//             }}
//           >
//             U - Morphe
//           </Typography>
