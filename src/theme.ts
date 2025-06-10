import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "rgb(33, 34, 36)",
      paper: "#266565",
    },
    text: {
      primary: "rgb(255, 255, 255)",
    },
    primary: {
      main: "#BEBEBE",
    },
    secondary: {
      main: "#B67721",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "clamp(2rem, 5vw, 7rem)",
    },
    h2: {
      fontSize: "clamp(1.5rem, 4vw, 6rem)",
    },
    h3: {
      fontSize: "clamp(1.2rem, 3vw, 5rem)",
    },
    h4: {
      fontSize: "clamp(1rem, 2.5vw, 4rem)",
    },
    h5: {
      fontSize: "clamp(0.9rem, 2vw, 3.5rem)",
    },
    h6: {
      fontSize: "clamp(0.8rem, 1.5vw, 2rem)",
    },
    subtitle1: {
      fontSize: "clamp(1rem, 2.5vw, 2rem)",
    },
    subtitle2: {
      fontSize: "clamp(0.9rem, 2vw, 1.5rem)",
    },
    body1: {
      fontSize: "clamp(0.875rem, 1.5vw, 1.55rem)",
    },
    body2: {
      fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: "none",
          color: theme.palette.text.primary,
        }),
      },
      defaultProps: {
        borderBottom: "none",
        size: "small",
      },
    },
  },
} as ThemeOptions);

export default theme;
