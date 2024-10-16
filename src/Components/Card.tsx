import { Box, Heading, UnorderedList, ListItem, Text } from "@chakra-ui/react";

interface Card {
  title: string;
  description?: string;
  color: string;
  company?: string;
  missionsList?: string[];
  year: string;
}

export default function Card({ title, description, color, company, missionsList, year }: Card) {
  return (
    <Box
      backgroundColor={color}
      borderRadius="12px"
      padding="1rem"
      width="100%"
      marginTop="1.5rem"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: "scale(1.02)", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)" }}
    >
      <Heading as="h2" size="lg" color="#2D3748">{title}</Heading>
      {company && <Heading as="h3" size="md" marginTop="0.5rem" color="#4A5568">{company}</Heading>}
      <Heading as="h4" size="sm" marginTop="0.5rem" color="#718096">{year}</Heading>
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
        <Text marginTop="1rem" color="#4A5568">{description}</Text>
      )}
    </Box>
  );
}
