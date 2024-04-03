import React from "react";
import TopBannerContactInfo from "@/components/TopBannerContactInfo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <TopBannerContactInfo />
      <Header />
      <div className={className}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
