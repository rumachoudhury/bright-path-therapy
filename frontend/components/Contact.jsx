"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      // const res = await fetch("/api/contact", {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <section className="pt-[110px] pb-[100px] text-center" id="contact">
      <div className="max-w-[1180px] mx-auto px-8">
        <span className="eyebrow justify-center">Get in touch</span>
        <h2 className="font-display font-semibold text-[clamp(32px,5vw,52px)] max-w-[640px] mx-auto leading-[1.12]">
          Let's start the conversation.
        </h2>
        <p className="mt-[22px] mx-auto max-w-[480px] text-[16.5px] text-ink-soft leading-relaxed">
          Send a message and we'll follow up within one business day — no
          pressure, no obligation.
        </p>

        <Reveal
          as="form"
          onSubmit={handleSubmit}
          className="mt-10 mx-auto max-w-[560px] text-left bg-white border border-line rounded-md2 p-8 shadow-soft"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-ink mb-4">
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="font-sans text-[15px] font-normal px-3.5 py-[11px] rounded-[10px] border border-line bg-paper text-ink focus:outline-2 focus:outline-coral focus:outline-offset-1"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-ink mb-4">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="font-sans text-[15px] font-normal px-3.5 py-[11px] rounded-[10px] border border-line bg-paper text-ink focus:outline-2 focus:outline-coral focus:outline-offset-1"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-ink mb-4">
            Phone{" "}
            <span className="font-normal text-ink-soft normal-case">
              (optional)
            </span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="font-sans text-[15px] font-normal px-3.5 py-[11px] rounded-[10px] border border-line bg-paper text-ink focus:outline-2 focus:outline-coral focus:outline-offset-1"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-ink mb-4">
            What can we help with?
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="font-sans text-[15px] font-normal px-3.5 py-[11px] rounded-[10px] border border-line bg-paper text-ink resize-y focus:outline-2 focus:outline-coral focus:outline-offset-1"
            />
          </label>

          <div className="flex gap-4 flex-wrap">
            <button
              type="submit"
              className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <a href="tel:+16315550142" className="btn btn-ghost">
              Call (631) 555-0142
            </a>
          </div>

          {status === "sent" && (
            <p className="mt-4 text-sm text-[#2E6B4F]">
              Thanks — we received your message and will be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-coral-deep">{errorMsg}</p>
          )}
        </Reveal>

        <div className="mt-[46px] flex gap-10 justify-center flex-wrap text-[14.5px] text-ink-soft">
          <div>
            <strong className="block font-display text-[15px] text-ink mb-1">
              Office hours
            </strong>
            Mon–Fri, 9am–6pm
          </div>
          <div>
            <strong className="block font-display text-[15px] text-ink mb-1">
              Sessions
            </strong>
            In-person &amp; teletherapy
          </div>
          <div>
            <strong className="block font-display text-[15px] text-ink mb-1">
              Response time
            </strong>
            Within 1 business day
          </div>
        </div>
      </div>
    </section>
  );
}
