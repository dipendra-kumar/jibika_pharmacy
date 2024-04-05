import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "./StoreProvider";
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
            __html: `
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Jibika Pharmacy & Health Clinic",
        "url": "https://www.jibikapharmacy.com",
        "logo": "https://www.jibikapharmacy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpharmacy_logo.472561c9.jpg&w=256&q=75",
        "sameAs": [
          "https://www.facebook.com/jibikapharmacy/",
          "https://twitter.com/jibikapharmacy?t=dVEtJqFDZoxFRgsrUGFZqQ",
          "https://www.instagram.com/jibika_pharmacy/"
        ]
      }
    `,
          }}
        />
      </head>
      <body className={`${inter.className} h-screen w-full bg-white`}>
        <StoreProvider>
          {children}
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
