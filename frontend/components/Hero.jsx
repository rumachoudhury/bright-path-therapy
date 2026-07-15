// import Waveform from "./Waveform";
// import Reveal from "./Reveal";

// export default function Hero() {
//   return (
//     <section className="pt-[88px] pb-[60px]" id="top">
//       <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
//         <Reveal>
//           <span className="eyebrow">Eastern Long Island · In-person &amp; teletherapy</span>
//           <h1 className="font-display font-semibold text-[clamp(38px,5vw,60px)] leading-[1.05] text-ink">
//             Every voice deserves
//             <br />
//             <em className="italic text-coral-deep">to be understood.</em>
//           </h1>
//           <p className="mt-[22px] text-lg leading-relaxed text-ink-soft max-w-[480px]">
//             Bright Path is a private speech-language pathology practice for children and
//             adults — helping families move from frustration to confident communication,
//             one session at a time.
//           </p>
//           <div className="mt-9 flex gap-4 flex-wrap">
//             <a href="#contact" className="btn btn-primary">Book a free consultation</a>
//             <a href="#services" className="btn btn-ghost">Explore our services</a>
//           </div>
//           <div className="mt-11 flex gap-9 flex-wrap">
//             <div>
//               <strong className="block font-display text-[26px] text-ink">1:1</strong>
//               <span className="text-[13px] text-ink-soft">Personalized sessions</span>
//             </div>
//             <div>
//               <strong className="block font-display text-[26px] text-ink">11</strong>
//               <span className="text-[13px] text-ink-soft">Insurance plans accepted</span>
//             </div>
//             <div>
//               <strong className="block font-display text-[26px] text-ink">5+</strong>
//               <span className="text-[13px] text-ink-soft">Towns served on Long Island</span>
//             </div>
//           </div>
//         </Reveal>

//         <Reveal className="relative bg-gradient-to-br from-sage to-paper-dim rounded-lg2 p-10 min-h-[420px] flex flex-col justify-center items-center shadow-soft overflow-hidden">
//           <div className="absolute w-[220px] h-[220px] bg-sun opacity-35 rounded-full blur-[40px] -top-16 -right-16" />
//           <div className="relative z-10 bg-white rounded-3xl px-[26px] py-[22px] shadow-soft max-w-[280px] text-[15px] text-ink-soft self-start">
//             <strong className="text-ink">“He struggles to be understood at school.”</strong>
//             <br />
//             Articulation &amp; language therapy can help.
//           </div>
//           <div className="relative z-10 self-end mt-[18px] bg-coral text-white rounded-3xl px-[26px] py-[22px] shadow-soft max-w-[280px] text-[15px]">
//             <strong className="text-white">“Let's find out how, together.”</strong>
//           </div>
//           <div className="relative z-10 mt-[26px] w-full">
//             <Waveform count={34} height={40} />
//           </div>
//         </Reveal>
//       </div>

//       <div className="max-w-[1180px] mx-auto px-8 mt-6">
//         <Waveform count={90} height={30} />
//       </div>
//     </section>
//   );
// }

import Waveform from "./Waveform";
import Reveal from "./Reveal";

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
            <button className="btn btn-primary">
              Book a free consultation
            </button>

            <button className="btn btn-ghost">Explore our services</button>
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
