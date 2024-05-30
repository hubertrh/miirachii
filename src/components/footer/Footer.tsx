import Image from "next/image";
import logoFull from "../../assets/images/logo-full.png";
import SocialLinks from "../ui/SocialLinks";
import NavDesktop from "../header/NavDesktop";

export default function Footer() {
  return (
    <footer
      className="h-[36rem] w-full bg-primary text-offwhite"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div
        className="h-px w-full"
        style={{
          boxShadow:
            "0 0 20px 20px rgba(0, 0, 0, 0.1), 0 0 40px 60px rgba(0, 0, 0, 0.1)",
        }}
      />
      <div className="fixed bottom-0 flex w-full flex-col gap-12 px-24 pb-12 pt-24">
        <div className="flex items-end justify-between">
          <div className="relative flex h-40 w-48 flex-col items-center justify-end">
            <Image
              className="brightness-200 saturate-0"
              src={logoFull}
              alt="Miirachii"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col items-end justify-center gap-8">
            <NavDesktop variant="footer" />
            <div className="flex flex-col items-end justify-center pt-10">
              <p>Get in touch!</p>
              <a
                href="mailto:hello@miirachii.com"
                className="text-5xl transition-all duration-300 hover:text-accent"
              >
                hello@miirachii.com
              </a>
            </div>
            <SocialLinks variant="footer" />
          </div>
        </div>
        <div className="h-px w-full bg-secondary" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-center">
            <p className="leading-tight">Section3</p>
            <p className="leading-tight">Section33333</p>
          </div>
          <div className="flex flex-col items-end justify-center">
            <p className="leading-tight">
              Miirachii &copy; {new Date().getFullYear()}
            </p>
            <p className="leading-tight">
              <span className="text-secondary">Created by </span>
              <a href="https://www.linkedin.com/in/hubertrh/">
                Hubert Rogala-Haracz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}