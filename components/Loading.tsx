import { FaSpinner } from "react-icons/fa";

const Loading = ({ className }: { className?: string }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <FaSpinner className={`animate-spin  ${className} `} />
    </div>
  );
};

export default Loading;
