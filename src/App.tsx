import { Container, Heading, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { works } from "./data/works";
import { WorkCard } from "@/components/source_card";

export default function App() {
  return (
    <Container>
      <Center>
        <Heading as="h1" size="3xl" mb="2">
          Phoebe's Crochet
        </Heading>
      </Center>
      <Text color="fg.muted" mb="8">
        Some of my crochet projects.
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="6">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
