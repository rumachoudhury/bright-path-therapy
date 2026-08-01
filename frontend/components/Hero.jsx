import Waveform from "./Waveform";
import Reveal from "./Reveal";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left Content */}
        <div>
          <p className="eyebrow">
            Eastern Long Island · In-person & teletherapy
          </p>

          <h1 className="text-5xl font-serif font-bold text-ink leading-tight">
            Helping every voice
            <br />
            be heard and understood.
          </h1>

          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-xl">
            At Bright Path, we provide personalized speech therapy for children
            and adults. We take the time to understand each person's unique
            communication needs and create a plan that helps them feel more
            confident every step of the way.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="#contact" className="btn btn-primary">
              Book a free consultation
            </Link>

            <Link href="#services" className="btn btn-primary">
              Explore our services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <strong className="text-2xl text-ink">1:1</strong>
              <p className="text-sm text-ink-soft">Personalized sessions</p>
            </div>

            <div>
              <strong className="text-2xl text-ink">11</strong>
              <p className="text-sm text-ink-soft">Insurance plans accepted</p>
            </div>

            <div>
              <strong className="text-2xl text-ink">5+</strong>
              <p className="text-sm text-ink-soft">
                Towns served on Long Island
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <Reveal className="relative bg-gradient-to-br from-sage to-paper-dim rounded-lg p-10 min-h-[420px] flex flex-col justify-center items-center shadow-soft overflow-hidden">
          <div className="absolute w-[220px] h-[220px] bg-sun opacity-35 rounded-full blur-[40px] -top-16 -right-16" />

          <div className="relative z-10 bg-white rounded-3xl px-[26px] py-[22px] shadow-soft max-w-[280px] text-[15px] text-ink-soft self-start">
            <strong className="text-ink">
              “My child knows what they want to say, but it's hard to express
              it.”
            </strong>
            <br />
            Together, we can build stronger communication skills.
          </div>

          <div className="relative z-10 self-end mt-[18px] bg-coral text-white rounded-3xl px-[26px] py-[22px] shadow-soft max-w-[280px] text-[15px]">
            <strong>“Let's create a plan that works for your family.”</strong>
          </div>

          <div className="relative z-10 mt-[26px] w-full">
            <Waveform count={34} height={40} />
          </div>
        </Reveal>
      </div>

      <div className="max-w-[1180px] mx-auto px-8 mt-6">
        <Waveform count={90} height={30} />
      </div>
    </section>
  );
}
