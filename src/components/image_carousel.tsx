import { useState } from "react";
import { Box, HStack, IconButton, Image } from "@chakra-ui/react";

type Props = {
  images: string[];
  alt: string;
};

export function ImageCarousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  if (count === 0) return null;

  const hasMany = count > 1;
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    rounded: "full",
    size: "sm",
    bg: "cottage.paper",
    color: "cottage.brown",
    opacity: 0.9,
    _hover: { opacity: 1, bg: "cottage.paper" },
  } as const;

  return (
    <Box position="relative">
      <Image
        src={images[index]}
        alt={`${alt}, photo ${index + 1} of ${count}`}
        loading="lazy"
        aspectRatio={4 / 3}
        objectFit="cover"
        w="100%"
      />

      {hasMany && (
        <>
          <IconButton
            aria-label="Previous photo"
            onClick={prev}
            left="2"
            {...arrowStyles}
          >
            ‹
          </IconButton>
          <IconButton
            aria-label="Next photo"
            onClick={next}
            right="2"
            {...arrowStyles}
          >
            ›
          </IconButton>

          <HStack
            position="absolute"
            bottom="2"
            left="0"
            right="0"
            justify="center"
            gap="2"
          >
            {images.map((_, i) => (
              <Box
                key={i}
                as="button"
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                w="2.5"
                h="2.5"
                rounded="full"
                bg={i === index ? "cottage.paper" : "blackAlpha.500"}
                borderWidth="1px"
                borderColor="cottage.paper"
                cursor="pointer"
              />
            ))}
          </HStack>
        </>
      )}
    </Box>
  );
}
