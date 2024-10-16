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
} from "@chakra-ui/react";

interface Projet {
  title: string;
  description: string;
  stacksFront: string[];
  stacksBack : string[];
}

export default function CardProjet({ title, description, stacksFront, stacksBack }: Projet) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        borderRadius="10px"
        backgroundColor="#FFE3BF"
        padding=".75rem"
        onClick={onOpen}
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <Image src="https://picsum.photos/seed/picsum/600/300" alt={title} />
        <Heading as="h2">{title}</Heading>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src="https://picsum.photos/seed/picsum/600/300"
              alt={title}
            />
            <Heading as="h3" size="lg">
              Description
            </Heading>
            <Text             margin="1rem 0">{description}</Text>
            <Heading as="h3" size="lg">
              Stacks Front
            </Heading>
            <Box
            display='flex'
            gap={5}
            margin="1rem 0"
              >
            {stacksFront.map((stack, index) => (
              <Box
                key={index}
                padding=".5rem"
                backgroundColor="#E1E8EF"
                borderRadius="10px"
              >
                <Text textAlign="center">{stack}</Text>
              </Box>
            ))}
            </Box>
            <Heading as="h3" size="lg">
              Stacks Back
            </Heading>
            <Box
            display='flex'
            gap={5}
            margin="1rem 0"
              >
            {stacksBack.map((stack, index) => (
              <Box
                key={index}
                padding=".5rem"
                backgroundColor="#E1E8EF"
                borderRadius="10px"
              >
                <Text textAlign="center">{stack}</Text>
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
