import Reveal from "./Reveal";

const signs = [
  "Your child is difficult to understand, even by family members.",
  "They aren't talking yet, or struggle to express what they need.",
  "Mealtimes are a battle — new textures and foods are refused.",
  "Frustration builds quickly when they can't get their message across.",
];

export default function Signs() {
  return (
    <section className="py-[90px]" id="signs">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[560px] mb-[52px]">
          <span className="eyebrow">Signs to look for</span>
          <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,38px)]">
            What families usually notice first
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          {signs.map((text, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className="bg-white rounded-md2 border border-line px-[30px] py-7 flex gap-[18px] items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="font-display italic text-[15px] text-coral-deep bg-sage w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <p className="text-[16.5px] leading-snug text-ink font-medium">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
