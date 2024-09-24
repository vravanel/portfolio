import { Box, Heading, Text } from "@chakra-ui/react";

interface Card {
    title : string, 
    description : string,
    color : string
}


export default function Card({title, description, color} : Card) {
    return (
        <>
        <Box backgroundColor={color} borderRadius="10px" padding=".75rem">
            <Heading as="h3" size="lg">{title}</Heading>
            <Text marginTop="1rem">
                {description}
            </Text>
        </Box>
        </>
    )
}