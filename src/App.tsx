import { useMemo, useState } from "react";
import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  Center,
  Stack,
  Button,
} from "@chakra-ui/react";
import { works } from "./data/works";
import { WorkCard } from "@/components/source_card";
import { TagFilter } from "./components/tagFilter";
import { filterWorksByTags, getAllTags } from "./utils/filterWorks";

export default function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = useMemo(() => getAllTags(works), []);
  const visibleWorks = useMemo(
    () => filterWorksByTags(works, selectedTags),
    [selectedTags],
  );

  const toggleTag = (tag: string) =>
    setSelectedTags((previous) =>
      previous.includes(tag)
        ? previous.filter((t) => t !== tag)
        : [...previous, tag],
    );

  const clearTags = () => setSelectedTags([]);

  return (
    <Container maxW="6xl" py="10">
      <Center>
        <Heading as="h1" size="4xl" mb="3" mt="4">
          Phoebe's Crochet
        </Heading>
      </Center>
      {/* <Center>
        <Text mb="8" fontFamily={"siteDescription"} textStyle="xl">
          A selection of some of my handmade crochet projects. Here you can find
          details of patterns, pictures of my work, and general info on the
          project!
        </Text>
      </Center> */}

      <Stack gap="4" mb="8">
        <Text fontFamily="description"> Tag Filters</Text>
        <TagFilter
          tags={allTags}
          selected={selectedTags}
          onToggle={toggleTag}
          onClear={clearTags}
        />
        <Text
          fontFamily="description"
          fontSize="sm"
          color="fg.muted"
          aria-live="polite"
        >
          Showing {visibleWorks.length} of {works.length} pieces
        </Text>
      </Stack>

      {visibleWorks.length === 0 ? (
        <Stack align="start" gap="3">
          <Text fontFamily="description">
            No pieces match all of those tags.
          </Text>
          <Button
            fontFamily="description"
            size="sm"
            variant="outline"
            onClick={clearTags}
          >
            Clear filters
          </Button>
        </Stack>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="6">
          {visibleWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}
