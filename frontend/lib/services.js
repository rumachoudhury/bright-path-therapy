// Static service catalog. Swap this for a database call (Mongo, Postgres,
// a headless CMS, etc.) if services need to be editable without a deploy —
// app/page.js is a server component, so any async data-fetching there
// works without extra plumbing.
export const services = [
  {
    slug: "articulation-therapy",
    title: "Articulation Therapy",
    description:
      "Targeted support for how speech sounds are produced, sequenced and perceived, so speech comes out clearer.",
  },
  {
    slug: "auditory-processing",
    title: "Auditory Processing",
    description:
      "Thorough assessment across all areas of speech and language to pinpoint exactly where support is needed.",
  },
  {
    slug: "autism-therapy",
    title: "Autism Therapy",
    description:
      "Individualized communication and social-interaction support across the full spectrum of needs.",
  },
  {
    slug: "feeding-therapy",
    title: "Feeding Therapy",
    description:
      "Helping picky and problem eaters alike, with parent counseling built into every plan.",
  },
  {
    slug: "language-skills-therapy",
    title: "Language Skills Therapy",
    description:
      "Support for following directions, understanding questions, and building the words to say what's meant.",
  },
  {
    slug: "voice-therapy",
    title: "Voice Therapy",
    description:
      "Personalized sessions to help you reach and maintain a healthy, sustainable voice.",
  },
];
