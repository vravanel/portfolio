import {
  Flex,
  Spacer,
  Box,
  Grid,
  GridItem,
  Container,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Aside from "./Aside";
import NavBar from "./NavBar";
import Contact from "./Contact";
import About from "./About";
import Resume from "./Resume";
import Projet from "./Projet";
import theme from "@/context/theme";

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
      return setPage(<Projet />);
    }
  };

  return (
    <>
      <Flex>
        <Box p="4" color='white'>
          Vincent Ravanel
        </Box>
        <Spacer />
        <Box p="4" bg={colorMode === "light" ? "#ECF2FA" : "#2D3748"} borderRadius="50%">
          <Button onClick={toggleColorMode}>
            <FontAwesomeIcon icon={faMoon} />
          </Button>
        </Box>
      </Flex>
      <Flex justifyContent="flex-end" maxW="95%" marginTop="2rem">
        <NavBar onClick={handleChange} />
      </Flex>
      <Container maxW="85%" marginTop="1rem">
        <Grid
          h="80vh"
          templateColumns="22% 78%"
          gap={6}
        >
          <GridItem
            bg={colorMode === "light" ? "white" : "#2D3748"}
            borderRadius="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            color={theme.colors.text[colorMode]}
          >
            <Aside />
          </GridItem>
          <GridItem
            bg={colorMode === "light" ? "white" : "#2D3748"}
            borderRadius="20px"
            padding="4rem"
            color={theme.colors.text[colorMode]}
          >
            {page}
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
