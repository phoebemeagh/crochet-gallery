import { Button, HStack } from "@chakra-ui/react";

type Props = {
  tags: string[];
  selected: string[];
  onToggle: (tag: string) => void;
  onClear: () => void;
};

export function TagFilter({ tags, selected, onToggle, onClear }: Props) {
  if (tags.length === 0) return null;

  return (
    <HStack wrap="wrap" gap="2" role="group" aria-label="Filter by tag">
      {tags.map((tag) => {
        const isOn = selected.includes(tag);
        return (
          <Button
            fontFamily="description"
            key={tag}
            size="sm"
            rounded="full"
            aria-pressed={isOn}
            onClick={() => onToggle(tag)}
            bg={isOn ? "cottage.sageDeep" : "cottage.sageSoft"}
            color={isOn ? "cottage.paper" : "cottage.sageDeep"}
            _hover={{ opacity: 0.85 }}
          >
            {tag}
          </Button>
        );
      })}
      {selected.length > 0 && (
        <Button
          fontFamily="description"
          size="sm"
          variant="ghost"
          onClick={onClear}
        >
          Clear filters
        </Button>
      )}
    </HStack>
  );
}
