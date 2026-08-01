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
              </tr>
            </thead>
          </table>
        </div>
      )}
    </main>
  );
}

export default AppointmentsPage;
