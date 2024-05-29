import About from "@/components/home/About/About";
import Hero from "@/components/home/Hero/Hero";
import Services from "@/components/home/services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {/* FIXME: Add content before release*/}
    </>
  );
}
