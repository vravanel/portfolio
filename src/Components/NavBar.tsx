import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { useState } from "react";

interface BoxProps {
  onClick: (event: string) => void;
}

export default function NavBar({ onClick }: BoxProps) {
  const [activeBox, setActiveBox] = useState("home");
  const handleChange = (box: string) => {
    setActiveBox(box);
    onClick(box);
  };

  return (
    <>
      <Box
        border="solid #E1E8EF"
        padding="1rem"
        borderRadius="10px"
        display="flex"
        flexDirection="row"
      >
        <Box
          backgroundColor={activeBox === "home" ? "#FF9C1A" : "white"}
          padding="0.75rem"
          borderRadius="10px"
          onClick={() => handleChange("home")}
          cursor="pointer"
        >
          <FontAwesomeIcon icon={faHouse} style={{ color: "#000000" }} />
          <Text fontSize="0.75rem">Home</Text>
        </Box>
        <Box
          backgroundColor={activeBox === "resume" ? "#FF9C1A" : "white"}
          padding="0.75rem"
          marginLeft="1rem"
          borderRadius="10px"
          onClick={() => handleChange("resume")}
          cursor="pointer"
        >
          <FontAwesomeIcon icon={faHouse} style={{ color: "#000000" }} />
          <Text fontSize="0.75rem">Resume</Text>
        </Box>
        <Box
          backgroundColor={activeBox === "projet" ? "#FF9C1A" : "white"}
          padding="0.75rem"
          marginLeft="1rem"
          borderRadius="10px"
          onClick={() => handleChange("projet")}
          cursor="pointer"
        >
          <FontAwesomeIcon icon={faHouse} style={{ color: "#000000" }} />
          <Text fontSize="0.75rem">Projet</Text>
        </Box>
        <Box
          backgroundColor={activeBox === "contact" ? "#FF9C1A" : "white"}
          padding="0.75rem"
          marginLeft="1rem"
          borderRadius="10px"
          onClick={() => handleChange("contact")}
          cursor="pointer"
        >
          <FontAwesomeIcon icon={faHouse} style={{ color: "#000000" }} />
          <Text fontSize="0.75rem">Contact</Text>
        </Box>
      </Box>
    </>
  );
}
