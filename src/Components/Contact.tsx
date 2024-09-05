import { Text, Heading, Divider, Flex } from "@chakra-ui/react";

export default function Contact() {
  return (
    <>
      <Flex alignItems="center">
        <Heading as="h1" marginRight="5rem">
          Contact
        </Heading>
        <Divider color="#FF9C1A" width="30%" />
      </Flex>
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
