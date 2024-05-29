import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      {/* FIXME: replace with actual content */}
      <About />
      <Services />
      <div className="h-[200vh]" />
    </>
  );
}
