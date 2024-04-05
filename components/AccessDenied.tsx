import { RiLock2Fill } from "react-icons/ri";

const AccessDenied = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white">
      <RiLock2Fill className="mb-4 text-6xl text-red-500" />
      <h1 className="mb-2 text-4xl font-bold text-red-500">Access Denied</h1>
      <p className="mb-8 text-lg text-red-400">
        You do not have permission to access this page.
      </p>
      <p className="text-lg text-red-400">
        Unauthorized access will be prosecuted.
      </p>
    </div>
  );
};

export default AccessDenied;
