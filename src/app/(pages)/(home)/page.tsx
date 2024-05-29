import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {/* FIXME: replace with actual content */}
      <div className="h-[200vh]" />
    </>
  );
}
