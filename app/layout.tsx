import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} h-screen w-full bg-white`}>
        {children}
      </body>
    </html>
  );
}
