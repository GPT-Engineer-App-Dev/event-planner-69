import { Container, VStack, Heading, Text, Button, Box, Flex } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Event Management Platform
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Organize and manage your events effortlessly.
        </Text>
        <Flex direction="column" align="center" justify="center" width="100%">
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg" mb={4} width="100%">
            View Events
          </Button>
          <Button leftIcon={<FaPlusCircle />} colorScheme="teal" size="lg" width="100%">
            Create New Event
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;