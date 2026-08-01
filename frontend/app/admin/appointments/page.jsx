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
    </main>
  );
}

export default AppointmentsPage;
