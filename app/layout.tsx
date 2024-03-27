import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jibika Pharmacy & Health Clinic",
  openGraph: {
    title: "Jibika Pharmacy & Health Clinic",
    description:
      "Jibika Pharmacy  & Health Clinic is multi-speciality health clinic in Nepal.",
  },
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
      </head>
      <body className={`${inter.className} h-screen w-full bg-white`}>
        {children}
      </body>
    </html>
  );
}
