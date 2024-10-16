import { Box, Text, Image } from "@chakra-ui/react";

interface Skill {
    title : string,
}

export default function Skill({title} : Skill) {
    return (
        <Box
        padding=".75rem"
        backgroundColor="#E1E8EF"
        borderRadius="10px"
        transition="background-color 0.3s"
        _hover={{ transform: "scale(1.1)", backgroundColor: "#D4DDE4" }}
        cursor="pointer"
      >
        <Text textAlign="center">{title}</Text>
      </Box>
      );
}