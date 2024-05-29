import Image from "next/image";
import aboutImage from "/public/about.jpg";
import AboutText from "./AboutText";

export default function About() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="relative size-96">
        <div className="absolute -left-8 top-8 size-full bg-primary" />
        <Image
          src={aboutImage}
          alt="About Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <AboutText />
    </section>
  );
}
