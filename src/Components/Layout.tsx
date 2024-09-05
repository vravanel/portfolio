import {
  Flex,
  Spacer,
  Box,
  Grid,
  GridItem,
  Container,
  Button,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Aside from "./Aside";
import { useColorMode } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Home from "@/pages";
import About from "./About";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [page, setPage] = useState(<About />);

  const handleChange = (pageId: string) => {
    if (pageId === "home") {
      return setPage(<About />);
    }
    if (pageId === "contact") {
      return setPage(<Contact />);
    }
  };

  return (
    <>
      <Flex>
        <Box p="4">Vincent Ravanel</Box>
        <Spacer />
        <Box p="4" bg="#ECF2FA" borderRadius="50%">
          <Button onClick={toggleColorMode}>
            <FontAwesomeIcon icon={faMoon} />
          </Button>
        </Box>
      </Flex>
      <Flex justifyContent="flex-end" maxW="95%" marginTop="2rem">
        <NavBar onClick={handleChange} />
      </Flex>
      <Container maxW="90%" marginTop="1rem">
        <Grid h="80vh" templateColumns="20% 80%" gap={6}>
          <GridItem
            bg="white"
            borderRadius="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Aside />
          </GridItem>
          <GridItem bg="white" borderRadius="20px" padding="1rem">
            {page}
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
