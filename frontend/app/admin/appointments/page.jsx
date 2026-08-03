"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      // update table without refreshing
      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment._id === id ? data.data : appointment,
        ),
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="p-10">
      <Button asChild className="mb-6">
        <Link href="/" className="flex items-center gap-3 animate-pulse">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </Button>
      {/* <Button asChild className="mb-6">
      
        <Link href="/" className="flex items-center gap-2 animate-pulse">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </Button> */}

      <h1 className="text-3xl font-bold mb-6">Appointments</h1>

      {appointments.length === 0 ? (
        <div>
          <h2 className="text-gray-500">No appointments found.</h2>

          <p>Consultation required here.</p>
        </div>
      ) : (
        <div className="overflow-x-auto border rounded-lg">
          <table>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">ID</th>
                <th className="border p-3 text-left">Patient Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Time</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  {/* <td className="border p-3">{appointment.patientName}</td> */}
                  <td className="border p-3">{appointment._id}</td>

                  <td className="border p-3">{appointment.patientName}</td>

                  <td className="border p-3">{appointment.email}</td>

                  <td className="border p-3">{appointment.date}</td>

                  <td className="border p-3">{appointment.time}</td>

                  <td className="border p-3">{appointment.status}</td>

                  {/* <td className="border p-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      Pending
                    </span>
                  </td> */}

                  <td className="border p-3">
                    <span
                      className={`px-3 py-1 rounded ${
                        appointment.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : appointment.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>

                  <td className="border p-3">
                    {/* <button className="bg-green-600 text-white px-3 py-1 rounded mr-2">
                      Approve
                    </button> */}

                    {/* <button className="bg-red-600 text-white px-3 py-1 rounded">
                      Cancel
                    </button> */}

                    <button
                      onClick={() =>
                        handleStatusUpdate(appointment._id, "Approved")
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        handleStatusUpdate(appointment._id, "Cancelled")
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default AppointmentsPage;
