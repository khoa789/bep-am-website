import { access } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
  articles,
  collections,
  kitchenConcepts,
} from "../src/data/editorial-content";

describe("editorial publishing contracts", () => {
  it("resolves every collection image to an available concept and published asset", async () => {
    expect(kitchenConcepts).toHaveLength(5);
    expect(new Set(collections.map((item) => item.slug)).size).toBe(
      collections.length,
    );
    for (const collection of collections) {
      expect(
        kitchenConcepts.some((item) => item.image === collection.image),
      ).toBe(true);
      for (const number of collection.images)
        expect(kitchenConcepts[number - 1]).toBeDefined();
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
