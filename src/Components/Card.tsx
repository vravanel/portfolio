import { Box, Heading, UnorderedList, ListItem, Text } from "@chakra-ui/react";

interface Card {
    title : string, 
    description? : string,
    color : string,
    company? : string,
    missionsList? : string[],
    year : string,
}


export default function Card({title, description, color, company, missionsList, year} : Card) {
    return (
        <>
        <Box backgroundColor={color} borderRadius="10px" padding=".75rem" width="85%" marginTop="1rem">
            <Heading as="h2" size="lg">{title}</Heading>
            <Heading as="h3" size="md" marginTop=".5rem">{company}</Heading>
            <Heading as="h4" size="sm" marginTop=".5rem">{year}</Heading>
            <UnorderedList marginTop="1rem">
            {missionsList?.map((mission, index) => (
            <ListItem key={index}>{mission}</ListItem>
            ))}
            </UnorderedList>
            <Text>{description}</Text>
        </Box>
        </>
    )
}