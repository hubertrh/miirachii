import SocialLinks from "../ui/SocialLinks";
import NavDesktop from "../ui/NavDesktop";

export default function Header() {
  return (
    <header className="absolute">
      <NavDesktop />
      <SocialLinks />
    </header>
  );
}
