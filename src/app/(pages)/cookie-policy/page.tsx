import { Metadata } from "next";

export const metadata: Metadata = {
  // TODO: Adapt template metadata
  title: "Miirachii | Cookie Policy",
};

export default function page() {
  return (
    <>
      <section className="relative mx-auto w-[85vw] max-w-4xl py-24 md:w-[90vw]">
        <h1 className="mb-4 text-lg sm:text-4xl">Cookie Policy</h1>
        <p>
          Effective Date: <br className="xs:hidden block" /> 30-May-2024
        </p>
        <br className="xs:hidden block" />
        <p>
          Last Updated: <br className="xs:hidden block" /> 30-May-2024
        </p>
        <h5 className="mt-8 text-lg">What are cookies?</h5>
        <div className="my-2.5 flex flex-col gap-1.5">
          <p>
            Cookies are small text files that are used to store small pieces of
            information. They are stored on your device when a website is loaded
            on your browser.
          </p>
        </div>
        <h5 className="mt-6 text-lg">Use of Cookies</h5>
        <div className="my-2.5 flex flex-col gap-1.5">
          <p>
            No cookies are used on this website. This website does not collect
            or store any information through cookies.
          </p>
        </div>
      </section>
    </>
  );
}
