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
import About from "./About";
import Resume from "./Resume";
import Projet from "./Projet";

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
    if (pageId === "resume") {
      return setPage(<Resume />);
    }
    if (pageId === "projet") {
      return setPage(<Projet />)
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
      <Container maxW="85%" marginTop="1rem">
        <Grid h="80vh" templateColumns="22% 78%" gap={6}>
          <GridItem
            bg="white"
            borderRadius="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Aside />
          </GridItem>
          <GridItem bg="white" borderRadius="20px" padding="4rem">
            {page}
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
