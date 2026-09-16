import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { contact, solutionLayers } from "../src/data/site-content";

const requiredBrands = ["Lecmax", "Vicostone", "Panasonic", "Konox"];

describe("Bếp Ấm content contract", () => {
  it("presents all four selected solution brands", () => {
    expect(solutionLayers.map((layer) => layer.brand)).toEqual(requiredBrands);
  });

  it("keeps the verified showroom contact details", () => {
    expect(contact.phoneDisplay).toBe("0923 179 169");
    expect(contact.phoneHref).toBe("tel:+84923179169");
    expect(contact.secondaryPhoneDisplay).toBe("0988 425 263");
    expect(contact.secondaryPhoneHref).toBe("tel:+84988425263");
    expect(contact.address).toContain("168C Xô Viết Nghệ Tĩnh");
    expect(contact.openingHours).toContain("19:00");
  });

  it("keeps the core promise and showroom conversion in the homepage source", async () => {
    const homepage = await readFile(
      new URL("../src/pages/index.astro", import.meta.url),
      "utf8",
    );
    const headline = homepage
      .match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]
      .replace(/<br\s*\/?>/g, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    expect(headline).toBe("Một nơi, trọn vẹn gian bếp.");
    expect(homepage).toContain('href="#tu-van"');
    const showroom = await readFile(
      new URL("../src/components/showroom-cta.astro", import.meta.url),
      "utf8",
    );
    expect(showroom).toContain('id="tu-van"');
    expect(showroom).toContain("href={contact.phoneHref}");
    expect(homepage).toContain("Ghé showroom trải nghiệm");
    for (const brand of requiredBrands) {
      expect(solutionLayers.some((layer) => layer.brand === brand)).toBe(true);
    }
  });

  it("does not introduce price pressure language", async () => {
    const homepage = (
      await readFile(
        new URL("../src/pages/index.astro", import.meta.url),
        "utf8",
      )
    ).toLocaleLowerCase("vi");
    expect(homepage).not.toMatch(/sale|giảm giá|rẻ nhất|số 1/);
  });
});
