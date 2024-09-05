import { Flex, Heading, Image, Text, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

export default function Aside() {
  return (
    <>
      <Image
        src="https://picsum.photos/seed/picsum/200/200"
        alt="test"
        borderRadius="20px"
        position="absolute"
        top="140px"
      />
      <Heading as="h1" size="md" marginTop="9rem">
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
        height="35vh"
        display="flex"
        flexDirection="column"
      >
        <Box
          marginTop="1rem"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ff9c1a" }} />
          <Box
            marginTop=".5rem"
            marginLeft="1rem"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Text color="rgba(0,0,0,0.5)"> Email</Text>
            <Text fontWeight="700">vincentravanelpro@gmail.com</Text>
          </Box>
        </Box>
        <Box
          marginTop="1rem"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ff9c1a" }} />
          <Box
            marginTop=".5rem"
            marginLeft="1rem"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Text color="rgba(0,0,0,0.5)"> Localisation</Text>
            <Text fontWeight="700">Paris</Text>
          </Box>
        </Box>
        <Box marginTop="1.5rem" margin="auto">
          <Link
            href="./downloads/CV_RAVANEL_Vincent.pdf"
            download
            p={5}
            bgGradient="linear(to-r, rgba(255,156,26,1) 10%, rgba(232,5,5,1) 60%)"
            color="white"
            borderRadius="30px"
          >
            <FontAwesomeIcon
              icon={faDownload}
              color="white"
              style={{ marginRight: ".75rem" }}
            />
            Téléchargez mon CV
          </Link>
        </Box>
      </Box>
    </>
  );
}
