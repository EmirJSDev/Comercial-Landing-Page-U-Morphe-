import { useMediaQuery as useMuiMediaQuery } from "@mui/material";

interface MediaQueryBreakpoints {
  isExtraSmall: boolean; // 320px - 480px
  isSmall: boolean; // 481px - 768px
  isMedium: boolean; // 769px - 1024px
  isLarge: boolean; // 1025px - 1200px
  isExtraLarge: boolean; // 1201px - 1330px
  isUltraWide: boolean; // 1331px - 1920px
}

const useMediaQuery = (): MediaQueryBreakpoints => {
  const isExtraSmall = useMuiMediaQuery("(max-width: 480px)");
  const isSmall = useMuiMediaQuery("(min-width: 481px) and (max-width: 768px)");
  const isMedium = useMuiMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)",
  );
  const isLarge = useMuiMediaQuery(
    "(min-width: 1025px) and (max-width: 1200px)",
  );
  const isExtraLarge = useMuiMediaQuery(
    "(min-width: 1201px) and (max-width: 1330px)",
  );
  const isUltraWide = useMuiMediaQuery(
    "(min-width: 1331px) and (max-width: 1920px)",
  );

  return {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isUltraWide,
  };
};

export default useMediaQuery;
