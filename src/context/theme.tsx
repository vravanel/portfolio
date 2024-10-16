import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customColors = {
  colors: {
    background: {
      dark: '#1A202C', 
      light: '#F3F5F9' 
    },
    text: {
      light: "#2D3748", 
      dark: "#E2E8F0",  
      secondaryDark: "#A0AEC0", 
    },
    textStrong: { 
      light: "#2D3748", 
      dark: "#1A202C"   
    },
    borderColor: {
      light: "#E2E8F0", 
      dark: "#4A5568", 
    },
    accent: {
      dark: "#ff9c1a", 
      light: "#63B3ED" 
    },
  },
};

const theme = extendTheme({ config, ...customColors });

export default theme;
