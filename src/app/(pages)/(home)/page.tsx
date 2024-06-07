import Hero from "@/components/Hero/Hero";
import About from "@/components/home/About/About";
import Services from "@/components/home/services/Services";

export default function Home() {
  return (
    <>
      {/* TODO: Replace with data from Sanity */}
      <Hero hook="Your Story, Beautifully Told" />
      <About />
      <Services />
      {/* FIXME: Add content before release*/}
    </>
  );
}
