import { Box, Heading, UnorderedList, ListItem, Text, useColorMode } from "@chakra-ui/react";
import theme from "@/context/theme";

interface Card {
  title: string;
  description?: string;
  color: string;
  company?: string;
  missionsList?: string[];
  year: string;
}

export default function Card({ title, description, color, company, missionsList, year }: Card) {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={theme.colors.background[colorMode]}
      borderRadius="12px"
      padding="1rem"
      width="100%"
      marginTop="1.5rem"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: "scale(1.02)", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)" }}
    >
      <Heading as="h2" size="lg" color={theme.colors.text[colorMode]}>
        {title}
      </Heading>
      {company && (
        <Heading as="h3" size="md" marginTop="0.5rem" color={theme.colors.text[colorMode]}>
          {company}
        </Heading>
      )}
      <Heading as="h4" size="sm" marginTop="0.5rem" color={theme.colors.text[colorMode]}>
        {year}
      </Heading>
      {missionsList && (
        <UnorderedList marginTop="1rem" spacing={2} styleType="none">
          {missionsList.map((mission, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <Box as="span" color="#FF9C1A" marginRight="0.5rem">•</Box>
              {mission}
            </ListItem>
          ))}
        </UnorderedList>
      )}
      {description && (
        <Text marginTop="1rem" color={theme.colors.text[colorMode]}>
          {description}
        </Text>
      )}
    </Box>
  );
}
