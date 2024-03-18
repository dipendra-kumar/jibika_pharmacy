import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import TopBannerContactInfo from "@/components/TopBannerContactInfo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jibika Pharmacy & Health Clinic",
  description:
    "Jibika Pharmacy  & Health Clinic is multi-speciality health clinic in Nepal. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Sl4FdDRb7PwUmSkfVwWoJIDu4zYOI7wuSvthwJoNjYU"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jibika Pharmacy & Health Clinic",
              url: "https://www.jibikapharmacy.com/",
            }),
          }}
        />
      </head>

      <body className={`${inter.className} h-screen w-full bg-white`}>
        <TopBannerContactInfo />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
