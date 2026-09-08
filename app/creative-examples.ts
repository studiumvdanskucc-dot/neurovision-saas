export const creativeExamples = [
  {
    id: "adidas", name: "Adidas", category: "Campaign typography",
    original: { src: "/assets/examples/adidas-original.webp", width: 424, height: 600, alt: "Original Adidas running ad with widely spaced lettering over a runner" },
    recreated: { src: "/assets/examples/adidas-recreated.webp", width: 1024, height: 1536, alt: "Recreated Adidas running ad with a left-aligned headline beside the runner" },
    summary: "A new reading order. The headline moves into a clear column, with the runner alongside it.",
    changes: "The recreation groups the headline, brings the supporting message forward and changes the image and layout. It is a new creative direction, rather than a controlled single-element edit.",
    question: "Can viewers read the main message sooner, without losing sight of the runner and brand? Compare attention, then ask people what they remember.",
  },
  {
    id: "fanta", name: "Fanta", category: "Product and brand hierarchy",
    original: { src: "/assets/examples/fanta-original.webp", width: 736, height: 1041, alt: "Original Fanta ad showing an orange with a can lid, a curved headline and a small logo" },
    recreated: { src: "/assets/examples/fanta-recreated.webp", width: 1054, height: 1492, alt: "Recreated Fanta ad with a level headline, central orange and a larger brand mark" },
    summary: "The same central idea. A straighter headline and larger brand mark create a different hierarchy.",
    changes: "The recreation reorganises the headline and supporting copy, changes the product imagery and increases the logo’s presence. The orange-can concept remains the focus.",
    question: "Does the new hierarchy help people connect the visual idea to the brand? Re-test brand attention and message recall before choosing a version.",
  },
  {
    id: "adobe", name: "Adobe", category: "Explaining a product benefit",
    original: { src: "/assets/examples/adobe-original.webp", width: 174, height: 174, alt: "Original Adobe Acrobat ad with the headline Merge your files into one polished PDF above document previews" },
    recreated: { src: "/assets/examples/adobe-recreated.webp", width: 1254, height: 1254, alt: "Recreated Adobe Acrobat ad with a larger headline and a visual showing documents combining into one PDF" },
    summary: "A product benefit made visual. Separate files lead into one PDF, directly beneath the headline.",
    changes: "The recreation replaces the document collage with a simple merge diagram and gives the headline more space. The supplied original is low resolution; image sharpness is not a measured outcome.",
    question: "Do viewers understand what Acrobat does after a brief glance? Use the same clarity question for both versions and check the attention on the brand.",
  },
  {
    id: "mcdonalds", name: "McDonald’s", category: "Message placement",
    original: { src: "/assets/examples/mcdonalds-original.webp", width: 736, height: 920, alt: "Original McDonald’s ad with chairs and a table made from fries, and a small message near the bottom" },
    recreated: { src: "/assets/examples/mcdonalds-recreated.webp", width: 1086, height: 1448, alt: "Recreated McDonald’s ad with the meal message above the fries furniture and a larger closing line" },
    summary: "The message comes forward. The playful food idea stays, with a more prominent headline above it.",
    changes: "The recreation moves the message above the central scene, increases the closing line and changes the composition. The fries-as-furniture concept remains recognisable.",
    question: "Does bringing the message forward help the idea make sense, or compete with the visual joke? Compare attention and ask people to explain the ad in their own words.",
  },
] as const;

export type CreativeExampleId = (typeof creativeExamples)[number]["id"];
export type CreativeAsset = { src: string; width: number; height: number; alt: string };
