import Reveal from "./Reveal";

const insurers = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "Emblem Health",
  "Humana TriCare",
  "MagnaCare",
  "Medicare",
  "NYSHIP",
  "UMR",
  "United Healthcare",
];

export default function About() {
  return (
    <section className="bg-sage py-[90px]" id="about">
      <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
        <Reveal>
          <span className="eyebrow">
            Personalized therapy, personalized results
          </span>
          <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,38px)] leading-[1.15]">
            A private practice built around your family
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-soft">
            We treat both pediatric and adult clients, offering in-person and
            teletherapy sessions tailored to how each person communicates best.
            Every plan starts with a real conversation about what's getting in
            the way — and what progress should look like for you.
          </p>
          <a href="#contact" className="btn btn-primary mt-[26px]">
            Schedule a meet &amp; greet
          </a>
        </Reveal>

        <Reveal className="bg-paper rounded-md2 px-8 py-[30px] shadow-soft">
          <h3 className="text-base font-bold tracking-wide mb-5">
            Most major insurance accepted
          </h3>
          <div className="flex flex-wrap gap-[9px]">
            {insurers.map((name) => (
              <span className="pill" key={name}>
                {name}
              </span>
            ))}
          </div>
          <p className="mt-5 text-[13.5px] text-ink-soft">
            Don't see your plan? Reach out — we're happy to check.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
