import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#daf9ff",
      100: "#aee7ff",
      200: "#81d5fb",
      300: "#51c4f7",
      400: "#25b3f4",
      500: "#0b99da",
      600: "#0077ab",
      700: "#00557b",
      800: "#00344d",
      900: "#00131f",
    },
  },
});

export default theme;
