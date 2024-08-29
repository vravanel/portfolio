import { Text, Heading, Divider } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Heading as="h1">A propos de moi</Heading>
      <Divider color="#ff9c1a" width="50%" />
      <Text as="p" maxWidth="65ch">
        Actuellement, formateur assistant en PHP/Symfony en alternance. Cette
        expérience m&apos;a permis d&apos;approfondir mes connaissances tout en
        développant de nouvelles compétences telles que TypeScript, React,
        Node.js, GraphQL et Docker. De plus, j&apos;ai développé mes aptitudes
        pédagogiques en aidant les apprenants à maîtriser ces concepts.
        Déterminé à progresser dans le domaine du développement web, je suis
        prêt à relever de nouveaux défis
      </Text>
    </>
  );
}
