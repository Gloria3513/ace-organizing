import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Promise from "@/components/Promise";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
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
        <Promise />
        <Process />
        <BeforeAfter />
        <Reviews />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <KakaoButton />
    </>
  );
}
