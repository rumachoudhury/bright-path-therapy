"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    concerns: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you for contacting us. Our team will reach out soon.");
  };

  return (
    <section
      id="intake-form"
      className="py-[90px] bg-ink text-paper rounded-[40px] mx-3.5 md:mx-6"
    >
      <div className="max-w-[700px] mx-auto px-8">
        <Reveal>
          <span className="eyebrow-invert">Get Started</span>

          <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,38px)] mt-3">
            New Patient Intake Form
          </h2>

          <p className="mt-5 text-paper/70 leading-7">
            Share some information about your needs and our team will contact
            you to discuss the next steps.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="parentName"
              placeholder="Parent / Guardian Name"
              value={formData.parentName}
              onChange={handleChange}
              className="w-full rounded-xl px-5 py-4 text-ink"
              required
            />

            <input
              name="childName"
              placeholder="Child's Name"
              value={formData.childName}
              onChange={handleChange}
              className="w-full rounded-xl px-5 py-4 text-ink"
              required
            />

            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl px-5 py-4 text-ink"
                required
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl px-5 py-4 text-ink"
              />
            </div>

            <textarea
              name="concerns"
              placeholder="Tell us about your concerns or therapy goals"
              rows="5"
              value={formData.concerns}
              onChange={handleChange}
              className="w-full rounded-xl px-5 py-4 text-ink"
              required
            />

            <button
              type="submit"
              className="w-full rounded-full bg-paper text-ink py-4 font-semibold hover:opacity-90 transition"
            >
              Submit Request
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
