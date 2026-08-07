import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Signs from "@/components/Signs";
import About from "@/components/About";
import Services from "@/components/Services";
import Area from "@/components/Area";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import NewPatientInfo from "@/components/NewPatientInfo";
import IntakeForm from "@/components/IntakeForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-white">
      <Nav />
      <Hero />
      <Signs />
      <About />
      <Services services={services} />
      <NewPatientInfo />
      <IntakeForm />
      <FAQ />
      <Area />
      {/* <Map /> */}
      <Contact />
      <Footer />
    </main>
  );
}
