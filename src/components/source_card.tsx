import { Card, Image, Button, HStack, Tag } from "@chakra-ui/react";
import type { Work } from "@/data/works";

export function WorkCard({ work }: { work: Work }) {
  return (
    <Card.Root
      overflow="hidden"
      transition="transform 0.2s, box-shadow 0.2s, border-color 0.2s"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: "cottage.rose",
        boxShadow: "0 14px 32px rgba(90, 66, 50, 0.16)",
      }}
      _motionReduce={{ transition: "none", _hover: { transform: "none" } }}
    >
      <Image src={work.images[0]} loading="lazy" aspectRatio={4 / 3} />
      <Card.Body gap="2">
        <Card.Title fontFamily="heading">{work.projectName}</Card.Title>
        <Card.Description fontFamily="description">
          {work.projectDescription}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button asChild bg="cottage.brown">
          <a href={work.pattern} target="_blank" rel="noopener noreferrer">
            View Pattern
          </a>
        </Button>
        <HStack wrap="wrap" gap="2">
          {work.tags.map((tag) => (
            <Tag.Root
              key={tag}
              size="md"
              borderRadius="full"
              bg="cottage.sageSoft"
              color="cottage.sageDeep"
              fontFamily="description"
            >
              <Tag.Label>{tag}</Tag.Label>
            </Tag.Root>
          ))}
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
}
