"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

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

      toast.success(`Appointment ${status.toLowerCase()}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?",
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setAppointments((prev) =>
        prev.filter((appointment) => appointment._id !== id),
      );

      toast.success("Appointment deleted!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="w-full overflow-hidden p-4 sm:p-6 lg:p-10">
      <Button asChild className="mb-6">
        <Link href="/" className="flex items-center gap-3 animate-pulse">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </Button>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Appointments</h1>

      {appointments.length === 0 ? (
        <div>
          <h2 className="text-gray-500">No appointments found.</h2>

          <p>Consultation required here.</p>
        </div>
      ) : (
        <div>
          {/* Desktop / Tablet Table */}
          {/* <div className="hidden md:block w-full overflow-x-scroll border rounded-lg"> */}
          <div className="hidden lg:block w-full overflow-x-auto border rounded-lg">
            {/* <table className="min-w-[1100px] w-full text-sm"> */}
            <table className="min-w-[1250px] w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">ID</th>

                  <th className="border p-3 text-left">Patient</th>

                  <th className="border p-3 text-left">Email</th>

                  <th className="border p-3 text-left">Date</th>

                  <th className="border p-3 text-left">Time</th>

                  <th className="border p-3 text-left">Status</th>

                  {/* <th className="border p-3 text-left min-w-[260px]">
                    Actions
                  </th> */}
                  <th className="border p-3 text-left w-[320px]">Actions</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td className="border p-3">{appointment._id.slice(-6)}</td>

                    <td className="border p-3">{appointment.patientName}</td>

                    <td className="border p-3 break-all">
                      {appointment.email}
                    </td>

                    <td className="border p-3">{appointment.date}</td>

                    <td className="border p-3">{appointment.time}</td>

                    <td className="border p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
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
                      {/* <div className="flex flex-wrap gap-2"> */}
                      <div className="flex flex-nowrap gap-2">
                        <button
                          onClick={() =>
                            handleStatusUpdate(appointment._id, "Approved")
                          }
                          disabled={appointment.status === "Approved"}
                          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            handleStatusUpdate(appointment._id, "Cancelled")
                          }
                          disabled={appointment.status === "Cancelled"}
                          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                        >
                          Cancel
                        </button>

                        <button
                          onClick={() => handleDelete(appointment._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="border rounded-lg p-4 shadow-sm bg-white"
              >
                <p>
                  <strong>Name:</strong> {appointment.patientName}
                </p>

                <p className="break-all">
                  <strong>Email:</strong> {appointment.email}
                </p>

                <p>
                  <strong>Date:</strong> {appointment.date}
                </p>

                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span className="px-2 py-1 rounded text-xs bg-yellow-100">
                    {appointment.status}
                  </span>
                </p>

                <div className="flex flex-col gap-2 mt-4">
                  <button
                    onClick={() =>
                      handleStatusUpdate(appointment._id, "Approved")
                    }
                    className="bg-green-600 text-white py-2 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      handleStatusUpdate(appointment._id, "Cancelled")
                    }
                    className="bg-orange-500 text-white py-2 rounded"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => handleDelete(appointment._id)}
                    className="bg-red-500 text-white py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default AppointmentsPage;
