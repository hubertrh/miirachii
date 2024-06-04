import Hero from "@/components/Hero/Hero";
import PortfolioCategories from "@/components/portfolio/PortfolioCategories";

export default function page() {
  return (
    <>
      <Hero variant="portfolio" />
      <PortfolioCategories />
    </>
  );
}
