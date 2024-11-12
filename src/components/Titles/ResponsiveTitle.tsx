import React from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "../../hooks/useMediaQuery";

interface ResponsiveTitleProps {
  children: React.ReactNode;
  className?: string;
}

const ResponsiveTitle: React.FC<ResponsiveTitleProps> = ({
  children,
  className,
}) => {
  const { isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge } =
    useMediaQuery();

  const styles = {
    fontFamily: "Montserrat Alternates, sans-serif",
    fontWeight: 600,
    lineHeight: (() => {
      if (isExtraSmall) return "28px";
      if (isSmall) return "32px";
      if (isMedium) return "40px";
      if (isLarge) return "48px";
      if (isExtraLarge) return "56px";
      return "64px"; // UltraWide или по умолчанию
    })(),
    fontSize: (() => {
      if (isExtraSmall) return "24px";
      if (isSmall) return "32px";
      if (isMedium) return "36px";
      if (isLarge) return "42px";
      if (isExtraLarge) return "46px";
      return "48px"; // UltraWide или по умолчанию
    })(),
    color: "#3F2274",
    textAlign: "center" as const,
    marginBottom: (() => {
      if (isExtraSmall) return "12px";
      if (isSmall) return "16px";
      if (isMedium) return "20px";
      if (isLarge) return "24px";
      if (isExtraLarge) return "28px";
      return "32px"; // UltraWide или по умолчанию
    })(),
    zIndex: 2,
    position: "relative" as const,
  };

  return (
    <Typography
      variant={isSmall || isExtraSmall ? "h4" : "h2"}
      sx={styles}
      className={className}
    >
      {children}
    </Typography>
  );
};

export default ResponsiveTitle;
