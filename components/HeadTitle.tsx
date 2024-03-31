import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const HeadTitle = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
      <h1 className="bg-light inline-block max-w-fit rounded-full border-2 border-[#effff5] px-4 py-1 text-center font-semibold text-secondary">
        {title}
      </h1>
      <p className="text-center text-5xl font-bold ">{subtitle}</p>
    </div>
  );
};

export default HeadTitle;
