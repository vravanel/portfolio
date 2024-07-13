import { Flex, Spacer, Box, Grid, GridItem, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Aside from "./Aside";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Flex>
        <Box p="4">Vincent Ravanel</Box>
        <Spacer />
        <Box p="4" bg="#ECF2FA" borderRadius="50%">
          <FontAwesomeIcon icon={faMoon} />
        </Box>
      </Flex>
      <Container maxW="90%" marginTop="2rem">
        <Grid h="80vh" templateColumns="30% 70%" gap={6}>
          <GridItem
            bg="white"
            borderRadius="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Aside />
          </GridItem>
          <GridItem bg="white" borderRadius="20px">
            {children}
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
