import {
  Box,
  Heading,
  Image,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  useColorMode,
} from "@chakra-ui/react";
import theme from "@/context/theme";

interface Projet {
  title: string;
  description: string;
  stacksFront: string[];
  stacksBack: string[];
}

export default function CardProjet({
  title,
  description,
  stacksFront,
  stacksBack,
}: Projet) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        borderRadius="10px"
        backgroundColor={theme.colors.background[colorMode]}
        padding=".75rem"
        onClick={onOpen}
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <Image src="https://picsum.photos/seed/picsum/600/300" alt={title} />
        <Heading as="h2" color={theme.colors.text[colorMode]}>
          {title}
        </Heading>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={theme.colors.text[colorMode]}>
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src="https://picsum.photos/seed/picsum/600/300"
              alt={title}
            />
            <Heading as="h3" size="lg" color={theme.colors.text[colorMode]}>
              Description
            </Heading>
            <Text margin="1rem 0" color={theme.colors.text[colorMode]}>
              {description}
            </Text>
            <Heading as="h3" size="lg" color={theme.colors.text[colorMode]}>
              Stacks Front
            </Heading>
            <Box display="flex" gap={5} margin="1rem 0">
              {stacksFront.map((stack, index) => (
                <Box
                  key={index}
                  padding=".5rem"
                  backgroundColor={theme.colors.background[colorMode]}
                  borderRadius="10px"
                >
                  <Text textAlign="center" color={theme.colors.text[colorMode]}>
                    {stack}
                  </Text>
                </Box>
              ))}
            </Box>
            <Heading as="h3" size="lg" color={theme.colors.text[colorMode]}>
              Stacks Back
            </Heading>
            <Box display="flex" gap={5} margin="1rem 0">
              {stacksBack.map((stack, index) => (
                <Box
                  key={index}
                  padding=".5rem"
                  backgroundColor={theme.colors.background[colorMode]}
                  borderRadius="10px"
                >
                  <Text textAlign="center" color={theme.colors.text[colorMode]}>
                    {stack}
                  </Text>
                </Box>
              ))}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Lien du site</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
