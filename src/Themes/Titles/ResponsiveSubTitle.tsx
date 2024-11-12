import React from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "../MediaQuery/useMediaQuery";

interface ResponsiveSubTitleProps {
  children: React.ReactNode;
  className?: string;
}

const ResponsiveSubTitle: React.FC<ResponsiveSubTitleProps> = ({
  children,
  className,
}) => {
  const { isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge } =
    useMediaQuery();

  const styles = {
    fontFamily: "Montserrat Alternates, sans-serif",
    fontWeight: 400,
    lineHeight: (() => {
      if (isExtraSmall) return "15px";
      if (isSmall) return "18px";
      if (isMedium) return "24px";
      if (isLarge) return "28px";
      if (isExtraLarge) return "30px";
      return "32px"; // UltraWide или по умолчанию
    })(),
    fontSize: (() => {
      if (isExtraSmall) return "12px";
      if (isSmall) return "14px";
      if (isMedium) return "18px";
      if (isLarge) return "20px";
      if (isExtraLarge) return "22px";
      return "24px"; // UltraWide или по умолчанию
    })(),
    color: "#6F4BAF",
    textAlign: "center" as const,
    marginBottom: (() => {
      if (isExtraSmall) return "16px";
      if (isSmall) return "24px";
      if (isMedium) return "48px";
      if (isLarge) return "72px";
      if (isExtraLarge) return "84px";
      return "96px"; // UltraWide или по умолчанию
    })(),
    zIndex: 2,
    position: "relative" as const,
  };

  return (
    <Typography sx={styles} className={className}>
      {children}
    </Typography>
  );
};

export default ResponsiveSubTitle;
