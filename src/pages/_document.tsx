import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/context/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#F3F5F9]">
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
