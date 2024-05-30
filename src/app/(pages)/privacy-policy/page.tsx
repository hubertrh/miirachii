import { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default async function page() {
  // TODO: Replace with actual brand details
  // const brandDetails = await getBrandDetails();
  const brandDetails = {
    name: "Miirachii",
    email: "hello@miirachii.com",
  };

  const companyURL = await headers().get("host");

  return (
    <section className="relative mx-auto w-[85vw] max-w-4xl py-24 text-justify md:w-[90vw]">
      <h1 className="mb-4 text-lg sm:text-4xl">Privacy Policy</h1>
      <p>
        Effective Date: <br className="xs:hidden block" />
        08-Feb-2024
      </p>
      <br className="xs:hidden block" />
      <p>
        Last Updated: <br className="xs:hidden block" />
        08-Feb-2024
      </p>
      <h5 className="mt-8 text-lg">What is Privacy Policy?</h5>
      <div className="my-2.5 flex flex-col gap-1.5">
        <p>
          This Privacy Policy describes the policies of{" "}
          <strong className="font-semibold">{brandDetails.name}</strong>, email:{" "}
          <strong className="font-semibold">
            <a
              href={`mailto:${brandDetails.email}`}
              className="underline underline-offset-4 transition-all duration-300 hover:text-accent hover:decoration-accent hover:underline-offset-[6px]"
            >
              {brandDetails.email}
            </a>
          </strong>
          , on the collection, use and disclosure of your information that we
          collect when you use our website (
          <strong className="font-semibold">
            <Link
              href="/"
              className="underline underline-offset-4 transition-all duration-300 hover:text-accent hover:decoration-accent hover:underline-offset-[6px]"
            >
              https://{companyURL}/
            </Link>
          </strong>
          ). (the “Service”). By accessing or using the Service, you are
          consenting to the collection, use and disclosure of your information
          in accordance with this Privacy Policy. If you do not consent to the
          same, please do not access or use the Service.
        </p>
        <p>
          We may modify this Privacy Policy at any time without any prior notice
          to you and will post the revised Privacy Policy on the Service. The
          revised Policy will be effective 180 days from when the revised Policy
          is posted in the Service and your continued access or use of the
          Service after such time will constitute your acceptance of the revised
          Privacy Policy. We therefore recommend that you periodically review
          this page.
        </p>
      </div>
      <h5 className="mt-4 text-lg">How we share your information</h5>
      <div className="my-2.5 flex flex-col gap-1.5">
        <p>
          We will not transfer your personal information to any third party
          without seeking your consent, except in limited circumstances for
          analytics.
        </p>
        <p>
          We require such third party&apos;s to use the personal information we
          transfer to them only for the purpose for which it was transferred and
          not to retain it for longer than is required for fulfilling the said
          purpose.
        </p>
        <p>
          We may also disclose your personal information for the following: (1)
          to comply with applicable law, regulation, court order or other legal
          process; (2) to enforce your agreements with us, including this
          Privacy Policy; or (3) to respond to claims that your use of the
          Service violates any third-party rights. If the Service or our company
          is merged or acquired with another company, your information will be
          one of the assets that is transferred to the new owner.
        </p>
      </div>
      <h5 className="mt-4 text-lg">Your Rights</h5>
      <div className="my-2.5 flex flex-col gap-1.5">
        <p>
          Depending on the law that applies, you may have a right to access and
          rectify or erase your personal data or receive a copy of your personal
          data, restrict or object to the active processing of your data, ask us
          to share (port) your personal information to another entity, withdraw
          any consent you provided to us to process your data, a right to lodge
          a complaint with a statutory authority and such other rights as may be
          relevant under applicable laws. To exercise these rights, you can
          write to us at{" "}
          <a
            href={`mailto:${brandDetails.email}`}
            className="underline underline-offset-4 transition-all duration-300 hover:text-accent hover:underline-offset-[6px]"
          >
            {brandDetails.email}
          </a>
          . We will respond to your request in accordance with applicable law.
        </p>
        <p>
          Do note that if you do not allow us to collect or process the required
          personal information or withdraw the consent to process the same for
          the required purposes, you may not be able to access or use the
          services for which your information was sought.
        </p>
      </div>
      <h5 className="mt-4 text-lg">Cookies, etc.</h5>
      <div className="my-2.5 flex flex-col gap-1.5">
        <p>
          To learn more about how we use these and your choices in relation to
          these tracking technologies, please refer to our{" "}
          <Link
            href="/cookie-policy"
            className="underline underline-offset-4 transition-all duration-300 hover:text-accent hover:underline-offset-[6px]"
          >
            Cookie Policy
          </Link>
          .
        </p>
      </div>
      <h5 className="mt-4 text-lg">Security</h5>
      <div className="my-2.5 flex flex-col gap-1.5">
        <p>
          The security of your information is important to us and we will use
          reasonable security measures to prevent the loss, misuse or
          unauthorized alteration of your information under our control.
          However, given the inherent risks, we cannot guarantee absolute
          security and consequently, we cannot ensure or warrant the security of
          any information you transmit to us and you do so at your own risk.
        </p>
      </div>
      <h5 className="mt-4 text-lg">Grievance / Data Protection Officer</h5>
      <div className="my-2.5 flex flex-col gap-1.5">
        <p>
          If you have any queries or concerns about the processing of your
          information that is available with us, you may email us at{" "}
          <a
            href={`mailto:${brandDetails.email}`}
            className="underline underline-offset-4 transition-all duration-300 hover:text-accent hover:underline-offset-[6px]"
          >
            {brandDetails.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
