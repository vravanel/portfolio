import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAddressCard, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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

  const navItems = [
    { id: "home", icon: faHouse, label: "Home" },
    { id: "resume", icon: faAddressCard, label: "Resume" },
    { id: "projet", icon: faBriefcase, label: "Projet" },
    { id: "contact", icon: faEnvelope, label: "Contact" }
  ];

  return (
    <Box
      border="solid #E1E8EF"
      padding="1rem"
      borderRadius="10px"
      display="flex"
      flexDirection="row"
      backgroundColor="#f7f7f7"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
    >
      {navItems.map((item) => (
        <Box
          key={item.id}
          backgroundColor={activeBox === item.id ? "#FF9C1A" : "white"}
          color={activeBox === item.id ? "white" : "black"}
          padding="0.75rem"
          marginLeft={item.id !== "home" ? "1rem" : "0"}
          borderRadius="10px"
          onClick={() => handleChange(item.id)}
          cursor="pointer"
          boxShadow={activeBox === item.id ? "0px 4px 12px rgba(0, 0, 0, 0.2)" : ""}
          transition="background-color 0.3s, transform 0.2s"
          _hover={{ backgroundColor: "#FF7A00", transform: "scale(1.05)" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minWidth="80px"
        >
          <FontAwesomeIcon icon={item.icon} style={{ marginBottom: "0.5rem" }} />
          <Text fontSize="0.75rem">{item.label}</Text>
        </Box>
      ))}
    </Box>
  );
}
