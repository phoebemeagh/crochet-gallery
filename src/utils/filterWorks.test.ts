import { describe, expect, it } from "vitest";
import type { Work } from "../data/works";
import { filterWorksByTags, getAllTags } from "./filterWorks";

const make = (id: string, tags: string[]): Work => ({
  id: id,
  projectName: "",
  projectDescription: "",
  pattern: "",
  images: [],
  toolsUsed: "",
  tags,
});

const works = [
  make("bat", ["amigurumi", "paid"]),
  make("eagle", ["blanket", "cotton", "free"]),
  make("hat", ["wearable", "cotton"]),
];

describe("getAllTags", () => {
  it("returns unique tags in alphabetical order", () => {
    expect(getAllTags(works)).toEqual([
      "amigurumi", "blanket", "cotton", "free", "paid", "wearable",
    ]);
  });
});

describe("filterWorksByTags", () => {
  it("returns everything when no tags are selected", () => {
    expect(filterWorksByTags(works, [])).toHaveLength(3);
  });

  it("filters by a single tag", () => {
    expect(filterWorksByTags(works, ["cotton"]).map((w) => w.id)).toEqual(["eagle", "hat"]);
  });

  it("requires all selected tags", () => {
    expect(filterWorksByTags(works, ["cotton", "free"]).map((w) => w.id)).toEqual(["eagle"]);
  });

  it("returns nothing when no work matches", () => {
    expect(filterWorksByTags(works, ["nope"])).toEqual([]);
  });
});