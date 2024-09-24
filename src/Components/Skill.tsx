import { Box, Text } from "@chakra-ui/react";

interface Skill {
    title : string
}

export default function Skill({title} : Skill) {
    return (
        <>
        <Box padding=".5rem" backgroundColor="#E1E8EF"  borderRadius="10px">
        <Text textAlign="center">{title}</Text>
        </Box>
        </>
    )
}