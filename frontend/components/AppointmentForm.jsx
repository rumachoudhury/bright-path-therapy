"use client";

import { useState } from "react";

const initialForm = {
  patientName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  notes: "",
};

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("sending");
    setErrorMsg("");

    try {
      // const res = await fetch("http://localhost:5000/api/appointments", {
        const res = await fetch(
    "https://bright-path-therapy-7q44.vercel.app/api/appointments",
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("sent");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Book a Consultation</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="patientName"
          value={form.patientName}
          placeholder="Your name"
          required
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          required
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          name="phone"
          value={form.phone}
          placeholder="Phone"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          required
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={form.time}
          required
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <textarea
          name="notes"
          value={form.notes}
          placeholder="Notes"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <button
          disabled={status === "sending"}
          className="bg-blue-600 text-white px-5 py-2 rounded disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Submit Appointment"}
        </button>
      </form>

      {status === "sent" && (
        <p className="mt-4 text-green-600">
          Thanks! Your appointment request has been sent.
        </p>
      )}

      {status === "error" && <p className="mt-4 text-red-600">{errorMsg}</p>}
    </div>
  );
}
