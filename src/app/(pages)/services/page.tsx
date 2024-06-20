import Hero from "@/components/Hero/Hero";
import ServicesCategories from "@/components/services/ServicesCategories";

export default function Services() {
  // const pageContent = await getServicesPage();

  return (
    <>
      {/* TODO: Replace with CMS data */}
      <Hero hook="My Services, Artfully Captured" />
      {/* <Hero hook={pageContent.servicesCategories} /> */}
      <ServicesCategories
      // servicesCategories={pageContent.servicesCategories}
      />
    </>
  );
}
