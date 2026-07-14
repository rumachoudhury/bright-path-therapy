import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Signs from "@/components/Signs";
import About from "@/components/About";
import Services from "@/components/Services";
import Area from "@/components/Area";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Signs />
      <About />
      <Services services={services} />
      <Area />
      <Contact />
      <Footer />
    </>
  );
}
