import { stat } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { collectionAlbums, collectionImagePath } from "../src/data/collection-albums";
import { collections } from "../src/data/editorial-content";

describe("collection album publishing contract", () => {
  it("provides fifteen uniquely identified concepts for each existing collection route", () => {
    expect(Object.keys(collectionAlbums).sort()).toEqual(collections.map(({ slug }) => slug).sort());
    const allIds: string[] = [];
    const allPaths: string[] = [];
    for (const { slug } of collections) {
      const images = collectionAlbums[slug];
      expect(images).toHaveLength(15);
      images.forEach((image, index) => {
        expect(image.id).toBe(`${slug}-${String(index + 1).padStart(2, "0")}`);
        expect(image.image).toMatch(new RegExp(`^${slug}/[a-z0-9-]+$`));
        expect(image.title.length).toBeGreaterThan(0);
        expect(image.layout.length).toBeGreaterThan(0);
        expect(image.space.length).toBeGreaterThan(0);
        expect(image.alt).toContain("Phối cảnh AI");
        allIds.push(image.id);
        for (const width of [320, 800, 1600] as const) allPaths.push(collectionImagePath(image, width));
      });
    }
    expect(new Set(allIds).size).toBe(45);
    expect(new Set(allPaths).size).toBe(135);
    expect(allPaths.every((path) => path.startsWith("/images/collections/") && path.endsWith(".webp"))).toBe(true);
  });
  it("publishes every responsive image and thumbnail as a nonempty asset", async () => {
    await Promise.all(Object.values(collectionAlbums).flat().flatMap((image) =>
      ([320, 800, 1600] as const).map(async (width) => {
        const assetPath = collectionImagePath(image, width);
        const asset = await stat(new URL(`../public${assetPath}`, import.meta.url));
        expect(asset.isFile(), assetPath).toBe(true);
        expect(asset.size, assetPath).toBeGreaterThan(0);
      }),
    ));
  });
});
