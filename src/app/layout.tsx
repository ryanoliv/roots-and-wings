import { Metadata } from "next";
import "./globals.css";
import ContentLoader from "./components/contentLoader";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Roots & Wings | Specialist Tutoring For Growth",
  description:
    "Empower your child with Roots & Wings tutoring: a blend of academic enrichment and emotional growth in a 12-week transformative journey.",
  metadataBase: new URL("https://www.rootsandwings.education/"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ISLD6BYNOPtmb0prcjvG_uMNToKgjyIXPNmblYFlui0",
  },
  openGraph: {
    title: "Roots & Wings | Specialist Tutoring For Growth",
    description:
      "Empower your child with Roots & Wings tutoring: a blend of academic enrichment and emotional growth in a 12-week transformative journey.",
    url: "https://www.rootsandwings.education/",
    siteName: "Roots & Wings | Specialist Tutoring For Growth",
    images: [
      {
        url: "https://www.rootsandwings.education/opengraph-image.png",
        width: "600",
        height: "340",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (!isLoading) {
  //     const content = document.getElementById("main-content");
  //     gsap.to(content, {
  //       opacity: 1,
  //       duration: 0.5,
  //     });
  //   }
  // }, [isLoading]);

  // function handleLoaderComplete() {
  //   setIsLoading(false);
  // }

  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <html lang="en" suppressHydrationWarning>
        <body>
          <ContentLoader>
            <header className="fixed top-0 w-full z-40">
              <Header />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
            <div id="modal-root"></div>
          </ContentLoader>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </body>
      </html>
    </ReCaptchaProvider>
  );
}
