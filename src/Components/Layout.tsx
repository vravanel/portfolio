import {
  Flex,
  Spacer,
  Box,
  Grid,
  GridItem,
  Container,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Aside from "./Aside";
import { useColorMode } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { colorMode, toggleColorMode } = useColorMode();
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
      <Container maxW="90%" marginTop="2rem">
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
            {children}
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
