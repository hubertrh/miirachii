import { getPortfolioPage } from "../../../../sanity/groqGetters/getPortfolioCategories";
import Hero from "@/components/Hero/Hero";
import PortfolioCategories from "@/components/portfolio/PortfolioCategories";

export default async function page() {
  const pageContent = await getPortfolioPage();

  return (
    <>
      <Hero hook={pageContent.hook} />
      <PortfolioCategories
        portfolioCategories={pageContent.portfolioCategories}
      />
    </>
  );
}
