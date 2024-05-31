import Image from "next/image";
import aboutImage from "/public/about.jpg";
import AboutText from "./AboutText";

export default function About() {
  return (
    <section
      id="about"
      className="flex h-[105vh] items-center justify-center bg-background"
    >
      <div className="relative size-96">
        <Image
          src={aboutImage}
          alt="About Image"
          fill
          style={{
            objectFit: "cover",
            boxShadow: "-32px 32px 0px 0px #806B59",
          }}
        />
      </div>
      <AboutText />
    </section>
  );
}
