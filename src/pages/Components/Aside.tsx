import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Aside() {
  return (
    <>
      <Image
        src="https://picsum.photos/seed/picsum/200/200"
        alt="test"
        borderRadius="20px"
      />
      <Heading as="h1" size="xl" marginTop="1rem">
        Vincent Ravanel
      </Heading>
      <Text fontSize="lg">Développeur Web</Text>
      <Flex marginTop=".5rem">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="xl"
          className="bg-[#ECF2FA] p-4 rounded-lg"
        />
        <FontAwesomeIcon
          icon={faGithub}
          size="xl"
          className="ml-5 bg-[#ECF2FA] p-4 rounded-lg"
        />
      </Flex>
      <Box
        bg="#ECF2FA"
        w="90%"
        p={4}
        color="black"
        marginTop="1rem"
        borderRadius="10px"
      >
        This is the Box
      </Box>
    </>
  );
}
