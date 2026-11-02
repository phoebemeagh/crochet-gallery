import { Card, Image, Button, HStack, Tag } from "@chakra-ui/react";
import type { Work } from "@/data/works";

export function WorkCard({ work }: { work: Work }) {
  return (
    <Card.Root>
      <Image src={work.images[0]} loading="lazy" aspectRatio={4 / 3} />
      <Card.Body gap="2">
        <Card.Title>{work.projectName}</Card.Title>
        <Card.Description>{work.projectDescription}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button asChild>
          <a href={work.pattern} target="_blank" rel="noopener noreferrer">
            View Pattern
          </a>
        </Button>
        <HStack wrap="wrap" gap="2">
          {work.tags.map((tag) => (
            <Tag.Root key={tag} size="md" borderRadius="full">
              <Tag.Label>{tag}</Tag.Label>
            </Tag.Root>
          ))}
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
}
