import { Grid, Heading } from "@chakra-ui/react";
import CardProjet from "./CardProjet";

export default function Projet() {
    return (
        <>
        <Heading as="h1">Projets</Heading>
        <Grid gridTemplateColumns="repeat(2, 50%)" gap="2rem" marginTop="1rem">

        <CardProjet title="test1" description="Ma description 1" />
        <CardProjet title="test2" description="Ma description 2" />
        <CardProjet title="test3" description="Ma description 3"/>
        <CardProjet title="test4" description="Ma description 4"/>
        </Grid>

        </>
    );
}