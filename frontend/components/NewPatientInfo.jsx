import Reveal from "./Reveal";

const steps = [
  {
    title: "Complete the Intake Form",
    description:
      "Tell us about your child, your concerns, and what support you are looking for. This helps our team understand your needs before your first visit.",
  },
  {
    title: "Schedule Your Consultation",
    description:
      "Our team will review your information and contact you to discuss availability, therapy options, and next steps.",
  },
  {
    title: "Begin Your Therapy Journey",
    description:
      "We create a personalized therapy plan designed around your child's goals, strengths, and development.",
  },
];

export default function NewPatientInfo() {
  return (
    <section
      id="new-patient"
      className="py-[90px] bg-paper text-ink rounded-[40px] mx-3.5 md:mx-6"
    >
      <div className="max-w-[1132px] mx-auto px-8">
        <Reveal>
          <span className="eyebrow">New Patient Information</span>

          <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,38px)] mt-3">
            Starting therapy is simple
          </h2>

          <p className="mt-5 max-w-[600px] text-base leading-[1.7] text-ink/70">
            We make the process comfortable and straightforward for families.
            From your first inquiry to ongoing therapy sessions, our team is
            here to support you every step of the way.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              className="rounded-3xl border border-ink/10 p-7 bg-white"
            >
              <div className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center font-semibold">
                {index + 1}
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-ink/70">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
