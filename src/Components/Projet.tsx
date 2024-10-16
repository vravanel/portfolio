import { Grid, Heading, useColorMode } from "@chakra-ui/react";
import CardProjet from "./CardProjet";
import theme from "@/context/theme";

export default function Projet() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading
        as="h1"
        fontSize="2xl"
        textAlign="center"
        marginBottom="2rem"
        color={theme.colors.text[colorMode]}
      >
        Projets
      </Heading>

        <Grid gridTemplateColumns="repeat(2, 50%)" gap="2rem" marginTop="1rem">

        <CardProjet title="test1" description="Ma description 1" stacksFront={['test', 'test2', 'test3']}  stacksBack={['test5', 'test6']}/>
        <CardProjet title="test2" description="Ma description 2" stacksFront={['test', 'test2', 'test3']}  stacksBack={['test5', 'test6']}/>
        <CardProjet title="test3" description="Ma description 3" stacksFront={['test', 'test2', 'test3']}  stacksBack={['test5', 'test6']}/>
        <CardProjet title="test4" description="Ma description 4" stacksFront={['test', 'test2', 'test3']}  stacksBack={['test5', 'test6']}/>
        </Grid>

        </>
    );
}