import Reveal from "./Reveal";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

const towns = [
  "Holbrook",
  "Riverhead",
  "Shirley",
  "Southampton",
  "+ surrounding areas",
];

export default function Area() {
  return (
    <section
      className="py-[90px] bg-ink text-paper rounded-[40px] mx-3.5 md:mx-6"
      id="area"
    >
      <div className="max-w-[1132px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="eyebrow-invert">Where we work</span>
          <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,38px)] text-paper">
            Serving Eastern Long Island
          </h2>
          <p className="mt-[18px] text-base leading-[1.7] text-[#C9D6CF] max-w-[440px]">
            With offices and teletherapy reaching Holbrook, Riverhead, Shirley,
            Southampton and the surrounding areas — our team meets your family
            close to home, or online.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-7">
            {towns.map((t) => (
              <span
                key={t}
                className="pill !bg-paper/5 !border-paper/20 !text-paper"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* <Reveal className="bg-paper/[0.06] border border-paper/[0.16] rounded-3xl p-[34px] min-h-[280px]">
          <svg viewBox="0 0 380 240" fill="none" className="w-full h-auto">
            <path
              d="M20 120 Q60 40 140 55 Q220 68 260 40 Q320 20 360 70 Q340 130 300 150 Q260 180 200 190 Q120 205 70 170 Q30 150 20 120Z"
              stroke="rgba(247,244,236,0.35)"
              strokeWidth="1.4"
              fill="rgba(247,244,236,0.04)"
            />
            <circle cx="95" cy="120" r="5" fill="#EEB43D" />
            <circle cx="185" cy="95" r="5" fill="#E86F4B" />
            <circle cx="245" cy="150" r="5" fill="#EEB43D" />
            <circle cx="300" cy="110" r="5" fill="#E86F4B" />
            <text x="95" y="105" fill="#C9D6CF" fontSize="11" textAnchor="middle">Riverhead</text>
            <text x="185" y="80" fill="#C9D6CF" fontSize="11" textAnchor="middle">Shirley</text>
            <text x="245" y="170" fill="#C9D6CF" fontSize="11" textAnchor="middle">Holbrook</text>
            <text x="300" y="95" fill="#C9D6CF" fontSize="11" textAnchor="middle">Southampton</text>
          </svg>
        </Reveal> */}
        <Reveal className="bg-paper/[0.06] p-[34px]">
          <Map />
        </Reveal>
      </div>
    </section>
  );
}
