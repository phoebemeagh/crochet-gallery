import { Container, Heading, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { works } from "./data/works";
import { WorkCard } from "@/components/source_card";

export default function App() {
  return (
    <Container>
      <Center>
        <Heading as="h1" size="4xl" mb="3" mt="4">
          Phoebe's Crochet
        </Heading>
      </Center>
      <Center>
        <Text mb="8" fontFamily={"siteDescription"} textStyle="xl">
          Some of my crochet projects.
        </Text>
      </Center>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="6">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
