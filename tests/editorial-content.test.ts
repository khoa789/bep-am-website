import { access } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
  articles,
  collections,
  homepageCollections,
  kitchenConcepts,
} from "../src/data/editorial-content";
import { collectionAlbums } from "../src/data/collection-albums";

describe("editorial publishing contracts", () => {
  it("resolves every collection image to an available concept and published asset", async () => {
    expect(kitchenConcepts).toHaveLength(5);
    expect(new Set(collections.map((item) => item.slug)).size).toBe(
      collections.length,
    );
    for (const collection of collections) {
      expect(
        kitchenConcepts.some((item) => item.image === collection.image) ||
          collectionAlbums[collection.slug].some((item) => `collections/${item.image}` === collection.image),
      ).toBe(true);
      for (const number of collection.images)
        expect(kitchenConcepts[number - 1]).toBeDefined();
      for (const width of [800, 1600])
        await access(new URL(`../public/images/${collection.image}-${width}.webp`, import.meta.url));
    }
    for (const concept of kitchenConcepts) {
      for (const width of [800, 1600])
        await access(
          new URL(
            `../public/images/${concept.image}-${width}.webp`,
            import.meta.url,
          ),
        );
    }
  });
  it("keeps only the original three collections on the homepage", () => {
    expect(homepageCollections.map(({ slug, image }) => ({ slug, image }))).toEqual([
      { slug: "can-ho-tinh-gon", image: "kitchen-concept-2" },
      { slug: "hai-hoa-ban-menh", image: "kitchen-concept-3" },
      { slug: "nhip-song-hien-dai", image: "kitchen-concept-4" },
    ]);
    expect(homepageCollections.every((collection) => collections.includes(collection))).toBe(true);
  });
  it("publishes complete articles with unique route slugs and existing images", async () => {
    expect(new Set(articles.map((item) => item.slug)).size).toBe(
      articles.length,
    );
    for (const article of articles) {
      expect(article.sections.length).toBeGreaterThan(0);
      expect(
        article.sections.every((section) => section.title && section.body),
      ).toBe(true);
      await access(
        new URL(`../public/images/${article.image}`, import.meta.url),
      );
    }
  });
});
