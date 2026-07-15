import Reveal from "./Reveal";

export default function Services({ services }) {
  return (
    <section className="py-24" id="services">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="flex justify-between items-end gap-6 flex-wrap mb-[52px]">
          <div>
            <span className="eyebrow">Our services</span>
            <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,38px)] max-w-[520px]">
              Comprehensive care for every stage of communication
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 60}
              className="bg-white border border-line rounded-md2 px-7 py-[30px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft hover:border-transparent"
            >
              <div className="w-[46px] h-[46px] rounded-2xl bg-sage flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12c0-3.5 1.5-6 3-6s2 5 3 5 1.5-7 3-7 2 9 3 9 1.5-3.5 3-3.5"
                    stroke="#CC5A38"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[19px] mb-2.5">{service.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
