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
      <Box
        bgGradient="linear(to-r, #ECF2FA, #F9FBFD)"
        w="90%"
        p={5}
        color="black"
        marginTop="1.5rem"
        borderRadius="12px"
        shadow="lg"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          borderBottom="1px solid rgba(0,0,0,0.1)"
          pb="0.75rem"
          mb="0.75rem"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#ff9c1a", marginRight: "0.75rem" }}
          />
          <Box>
            <Text color="rgba(0,0,0,0.6)">Email</Text>
            <Text fontWeight="700">vincentravanelpro@gmail.com</Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "#ff9c1a", marginRight: "0.75rem" }}
          />
          <Box>
            <Text color="rgba(0,0,0,0.6)">Localisation</Text>
            <Text fontWeight="700">Paris</Text>
          </Box>
        </Box>
        <Box mt="1.75rem" display="flex" justifyContent="center">
          <Link
            href="./downloads/CV_RAVANEL_Vincent.pdf"
            download
            py={3}
            px={5}
            bgGradient="linear(to-r, #ff9c1a, #e80505)"
            color="white"
            borderRadius="25px"
            display="flex"
            alignItems="center"
          >
            <FontAwesomeIcon
              icon={faDownload}
              color="white"
              style={{ marginRight: "0.75rem" }}
            />
            Télécharger mon CV
          </Link>
        </Box>
      </Box>
    </>
  );
}
