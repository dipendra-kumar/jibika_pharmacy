import { FaSpinner } from "react-icons/fa";

const Loading: React.FC = (className) => {
  return (
    <div className="flex items-center justify-center ">
      <FaSpinner className={"animate-spin text-xl text-primary"} />
    </div>
  );
};

export default Loading;
