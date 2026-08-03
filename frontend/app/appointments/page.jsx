import AppointmentForm from "@/components/AppointmentForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AppointmentsPage() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <Button asChild className="mb-6">
        <Link href="/" className="flex items-center gap-2 animate-pulse">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </Button>
      {/* <Button asChild className="btn btn-primary w-fit">
        <Link href="/" className="flex items-center gap-3 animate-pulse">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </Button> */}

      {/* <h1 className="text-3xl font-bold mb-6">Book a Consultation</h1> */}

      <AppointmentForm />
    </main>
  );
}
