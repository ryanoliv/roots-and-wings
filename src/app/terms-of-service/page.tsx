import Link from "next/link";

export default function TermsOfService() {
  return (
    <section
      className="container flex flex-col gap-xl mt-xl"
      style={{ maxWidth: "750px" }}
    >
      <h1 className="text-center md:text-start">Terms of Service</h1>
      <div className="flex flex-col gap-md">
        <h2>Introduction</h2>
        <p>
          Welcome to our website. By browsing and using this website, you agree
          to comply with and be bound by the following terms and conditions of
          use, which together with our Privacy Policy and Cookies Policy, govern
          our relationship with you concerning this website. In this policy,
          “we,” “our,” or “us” refers to Roots & Wings Tutoring Ltd. The legal
          information for which is: Roots & Wings Tutoring Ltd, registered in
          England and Wales under company number 14428903, registered office 30
          St Anns Road, London, SW13 9LJ. Our website is{" "}
          <Link
            className="underline"
            href="https://www.rootsandwings.education"
          >
            www.rootsandwings.education
          </Link>
          . We offer online and in-person tutoring programs for children aged 5
          to 11 years old through Roots & Wings Tutoring Ltd. The term “you”
          refers to the user or viewer of our website.
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2>Legal Notice</h2>
        <p>
          The use of this website is subject to the following terms and
          conditions and the laws of England and Wales. If you disagree with any
          part of these terms and conditions, please do not use our website. The
          information on this site has been included in good faith but is for
          general informational purposes only. It should not be relied upon for
          any specific purpose, and no representation or warranty is given
          regarding its accuracy or completeness. It is subject to change
          without notice. You acknowledge that such information may contain
          inaccuracies or errors, and we expressly exclude liability for any
          such inaccuracies or errors to the fullest extent permitted by law.
          Nothing on this website should be construed as creating any legal
          obligation on our part to provide any tutoring services to you. We
          will only enter into a transaction to provide any tutoring services
          following a consultation with you and upon your acceptance of our
          Terms and Conditions, which will be provided to you at a consultation
          or can be provided to you at any other time upon your request. More
          information on how we plan to provide tutoring services is provided
          under the &apos;How it Works&apos; section of our website. Nothing on
          this website should be construed as creating any legal obligation on
          our part to provide you with any opportunity to join us as a tutor. We
          will only enter into a transaction to represent you as a tutor upon
          your acceptance of our terms and conditions as set out in a Contract
          for Services, which sets out standards that a tutor is required to
          meet to work with children. More information on how we recruit tutors,
          what we look for in our tutors, and how to apply to us is provided in
          the &apos;Our Tutors&apos; section of our website. This website uses
          cookies - please refer to our separate Cookies Policy for more
          information. Parts of our website allow you to provide us with
          information in connection with you seeking to use our tutoring
          services, applying to join us as a tutor, or signing up for news,
          events, and other updates we consider may be of interest to you.
          Please refer to our separate Privacy Policy before providing us with
          any personal information or signing up for news, events, and other
          updates. Your use of any information or materials on this website is
          entirely at your own risk, for which we shall not be liable. It shall
          be your responsibility to ensure that any services or information
          available through this website meet your specific requirements. This
          website contains material which is owned by or licensed to us. This
          material includes, but is not limited to, the design, layout, look,
          appearance, graphics, videos, and materials. Reproduction is
          prohibited other than in accordance with the copyright notice, which
          forms part of these terms and conditions. All trademarks reproduced in
          this website, which are not the property of or licensed to us, are
          acknowledged on the website. Unauthorised use of this website may give
          rise to a claim for damages and/or be a criminal offence. This website
          may include links to other websites. These links are provided for your
          convenience to provide further information. They do not signify that
          we endorse the particular website. We have no responsibility for the
          content of any linked website. We encourage you to read the privacy
          notices on the other websites you visit.
        </p>
      </div>
    </section>
  );
}
