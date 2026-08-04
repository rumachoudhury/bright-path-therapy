import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/admin/contacts"
            className="block bg-white border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">Manage Contacts</h2>

            <p className="text-gray-500">View and manage contact requests</p>
          </Link>

          <Link
            href="/admin/appointments"
            className="block bg-white border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">Appointments</h2>

            <p className="text-gray-500">Manage consultation bookings</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
