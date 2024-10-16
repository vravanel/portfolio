import { Box, Text, Image, useColorMode } from "@chakra-ui/react";
import theme from "@/context/theme";

interface Skill {
  title: string;
}

export default function Skill({ title }: Skill) {
  const { colorMode } = useColorMode();

  return (
    <Box
      padding=".75rem"
      color={theme.colors.text[colorMode]}
      borderRadius="10px"
      transition="background-color 0.3s"
      _hover={{
        transform: "scale(1.1)",
        backgroundColor: theme.colors.accent.dark, 
        color: theme.colors.text.light, 
      }}
      cursor="pointer"
    >
      <Text textAlign="center" color={theme.colors.text[colorMode]}>
        {title}
      </Text>
    </Box>
  );
}
