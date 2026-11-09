import type { Work } from "../data/works";

/**
 * Returns array of all unique tags from all projects in alphabetical order
 */
export function getAllTags(works: Work[]): string[] {
  const tags = new Set<string>(); // Set used to ensure no duplicates
  for (const work of works) {
    for (const tag of work.tags) {
      tags.add(tag);
    }
  }
  return [...tags].sort((a, b) => a.localeCompare(b));
  // Spread operator used to unpack Set into an array - so .sort() can be applied to put in alphabetical order
}

/**
 * Returns the works that have ALL of the selected tags.
 * With nothing selected, every work is returned.
 */
export function filterWorksByTags(
  works: Work[],
  selectedTags: string[],
): Work[] {
  if (selectedTags.length === 0) return works; // If no tags selected return all the projects
  return works.filter(
    (work) => selectedTags.every((tag) => work.tags.includes(tag)), // If tags are selected, return projects that have all the tags
  );
}
