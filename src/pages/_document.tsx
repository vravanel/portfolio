import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript,  useColorMode } from "@chakra-ui/react";
import theme from "@/context/theme";

export default function Document() {
 
  const { colorMode } = useColorMode();

  return (
    <Html lang="fr">
      <Head />
      <body style={{ backgroundColor : colorMode === 'light' ? '#F3F5F9' : ' #1A202C'}}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
