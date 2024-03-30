import { FaSpinner } from "react-icons/fa";

const FullLoading: React.FC = (className) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <FaSpinner className={"animate-spin text-gray-800 text-5xl"} />
    </div>
  );
};

export default FullLoading;
