"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    patientName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Appointment request sent!");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Book a Consultation</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="patientName"
          placeholder="Your name"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <textarea
          name="notes"
          placeholder="Notes"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded">
          Submit Appointment
        </button>
      </form>
    </div>
  );
}
