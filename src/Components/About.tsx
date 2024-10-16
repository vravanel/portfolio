import { Text, Heading, Divider, Flex, Grid, GridItem, useTheme } from "@chakra-ui/react";
import Skill from "./Skill";
import theme from "@/context/theme"; 
import { useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";

export default function About() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex alignItems="center">
        <Heading as="h1" color={theme.colors.text[colorMode]}>A propos de moi</Heading>
        <Divider
          borderColor={theme.colors.borderColor[colorMode]}
          borderBottomWidth=".2rem"
          width="40%"
          marginLeft="2rem"
        />
      </Flex>
      <Text
        as="p"
        maxWidth="90ch"
        lineHeight="2rem"
        fontSize="1.25rem"
        marginTop="1rem"
        color={theme.colors.text[colorMode]}
      >
        Actuellement, formateur assistant en PHP/Symfony en alternance. Cette
        expérience m&apos;a permis d&apos;approfondir mes connaissances tout en
        développant de nouvelles compétences telles que TypeScript, React,
        Node.js, GraphQL et Docker. De plus, j&apos;ai développé mes aptitudes
        pédagogiques en aidant les apprenants à maîtriser ces concepts.
        Déterminé à progresser dans le domaine du développement web, je suis
        prêt à relever de nouveaux défis.
      </Text>
      <Heading margin="1rem 0">Mes Compétences</Heading>
      <GridItem marginBottom="1rem" display="grid" gap={10} gridTemplateColumns="45% 45%">
        <Heading size="md">Hard Skills</Heading>
        <Heading size="md">Soft Skills</Heading>
      </GridItem>
      <Grid templateColumns="47% 47%" gap={6} backgroundColor={theme.colors.background[colorMode]}>
        <GridItem
          display="grid"
          gap={4}
          gridTemplateColumns="repeat(4, 1fr)"
        >
          <Skill title="HTML" />
          <Skill title="CSS" />
          <Skill title="SCSS" />
          <Skill title="PHP" />
          <Skill title="Javascript" />
          <Skill title="Typescript" />
          <Skill title="Node.js" />
          <Skill title="Bootstrap" />
          <Skill title="Tailwind" />
          <Skill title="Symfony" />
          <Skill title="React" />
          <Skill title="Next.js" />
          <Skill title="MySQL" />
          <Skill title="PostgresSQL" />
          <Skill title="GraphQL" />
          <Skill title="PHPUnit" />
          <Skill title="Jest" />
          <Skill title="Docker" />
          <Skill title="Déploiement" />
          <Skill title="Git" />
        </GridItem>
        <GridItem
          display="grid"
          gap={4}
           gridTemplateColumns="repeat(4, 1fr)"
          gridTemplateRows="20% 20%"
        >
          <Skill title="Esprit d'équipe" />
          <Skill title="Curiosité" />
          <Skill title="Force d'adaptation" />
          <Skill title="Autonomie" />
        </GridItem>
      </Grid>
    </>
  );
}
