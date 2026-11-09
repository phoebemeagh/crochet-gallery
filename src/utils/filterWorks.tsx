import type { Work } from "../data/works";

export function getAllTags(works: Work[]): string[] {
  //* Returns array of all unique tags from all projects in alphabetical order
  const tags = new Set<string>(); // Set used to ensure no duplicates
  for (const work of works) {
    for (const tag of work.tags) {
      tags.add(tag);
    }
  }
  return [...tags].sort((a, b) => a.localeCompare(b));
  // Spread operator used to unpack Set into an array - so .sort() can be applied to put in alphabetical order
}
