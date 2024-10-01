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
  title: string,
  description : string,
}

export default function CardProjet({ title, description }: Projet) {
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image src="https://picsum.photos/seed/picsum/600/300" alt={title} />
          <Heading as="h3" size="lg">Description</Heading>
            <Text>{description}</Text>
            <Heading as="h3" size="lg">Stacks Front</Heading>
            <Text>{description}</Text>
            <Heading as="h3" size="lg">Stacks Back</Heading>
            <Text>{description}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
