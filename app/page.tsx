import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import KakaoButton from "@/components/KakaoButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <BeforeAfter />
        <Process />
        <About />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
      <KakaoButton />
    </>
  );
}
