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

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMediumScreen = useMediaQuery("(max-width:1200px)");
  const isSmallScreen = useMediaQuery("(max-width:925px)");
  const isBurgerMenu = useMediaQuery("(max-width:768px)");
  const isIconButton = useMediaQuery("(max-width:900px)");
  const isVerySmallScreen = useMediaQuery("(max-width:300px)");

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
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
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isBurgerMenu ? (
          <IconButton
            color="primary"
            aria-label="menu"
            onClick={handleMenuToggle}
            sx={{
              fontSize: "24px",
              color: "#FF7F00",
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
                color: "#FF7F00",
                userSelect: "none",
                marginLeft: isSmallScreen ? 0 : "auto",
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
              gap: "36px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {["О проекте", "Возможности", "Для кого", "Тарифы", "Контакты"].map(
              (text, index) => (
                <Link
                  key={index}
                  href={`#${text.toLowerCase()}`}
                  color="inherit"
                  underline="none"
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: isMediumScreen ? "14px" : "16px",
                    fontWeight: 400,
                    lineHeight: "20.8px",
                    color: "#5A287F",
                    position: "relative",
                    transition: "color 0.3s ease",
                    userSelect: "none",
                    whiteSpace: "nowrap",
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
                  color: "#FF7F00",
                  userSelect: "none",
                  flexGrow: 1,
                  textAlign: "center",
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
              fontSize: "24px",
              color: "#5A287F",
              borderColor: "#5A287F",
              borderRadius: "20px",
              padding: "5px",
              transition: "all 0.3s ease",
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
          {["О проекте", "Возможности", "Для кого", "Тарифы", "Контакты"].map(
            (text, index) => (
              <ListItem
                key={index}
                onClick={handleMenuToggle}
                component="a"
                href={`#${text.toLowerCase()}`}
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
            ),
          )}
        </List>
        <Divider sx={{ marginY: "16px", backgroundColor: "#FFFFFF" }} />
      </Drawer>
    </AppBar>
  );
};

export default Header;
