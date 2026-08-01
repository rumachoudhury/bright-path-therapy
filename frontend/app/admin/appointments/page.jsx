import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";

function AppointmentsPage() {
  const [appoinments, setAppoinments] = useState([]);

  return (
    <main className="p-10">
      <Link href="/">
        <ArrowLeft />
        Bact to home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Appoinments</h1>

      {appoinments.length === 0 ? (
        <div>
          <h2 className="text-gray-500">No appoinments found.</h2>

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

            {/* <tbody>
              {appoinments.map((appoinment) => {
                <tr key={appoinment._id}>
                  <td className="border p-3">{appoinment.patientName}</td>
                  <td className="border p-3">{appoinment.email}</td>
                  <td className="border p-3">{appoinment.date}</td>
                  <td className="border p-3">{appoinment.time}</td>
                  <td className="border p-3">{appoinment.status}</td>

                  <td className="border p-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      Pending
                    </span>
                  </td>

                  <td className="border p-3">
                    <button className="bg-green-600 text-white px-3 py-1 rounded mr-2">
                      Approve
                    </button>

                    <button className="bg-red-600 text-white px-3 py-1 rounded">
                      Cancel
                    </button>
                  </td>
                </tr>;
              })}
            </tbody> */}

            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td className="border p-3">{appointment.patientName}</td>

                  <td className="border p-3">{appointment.email}</td>

                  <td className="border p-3">{appointment.date}</td>

                  <td className="border p-3">{appointment.time}</td>

                  <td className="border p-3">{appointment.status}</td>

                  <td className="border p-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      Pending
                    </span>
                  </td>

                  <td className="border p-3">
                    <button className="bg-green-600 text-white px-3 py-1 rounded mr-2">
                      Approve
                    </button>

                    <button className="bg-red-600 text-white px-3 py-1 rounded">
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
