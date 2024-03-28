// components/UnderDevelopment.tsx
import React from "react";

const UnderDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white w-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Under Development
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This page is under development. Please check back later.
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#6c757d"
          className="max-w-sm mx-auto mb-8"
        >
          <path d="M475.314 274.18l-76.4-46.99a6.652 6.652 0 00-7.006.376l-100.738 65.57V117.53c0-4.419-3.582-8-8-8H129.832c-4.418 0-8 3.581-8 8v190.018l-98.623-64.181a6.653 6.653 0 00-7.074-.109L36.14 274.5a6.652 6.652 0 00-3.135 8.408l35.876 98.028c1.546 4.233 5.598 7.062 10.121 7.062h324.493c4.522 0 8.575-2.83 10.122-7.062l35.875-98.028a6.652 6.652 0 00-3.133-8.408zm-77.207 32.276l-41.344 28.712c-2.965 2.055-6.952 2.055-9.918 0l-41.35-28.716-74.417 45.782 139.71 90.987 139.71-90.988-74.392-45.755zm59.317-19.313l-113.78 69.987 25.824 71.059a7.988 7.988 0 009.918 4.857c1.13-.368 2.118-1.133 2.751-2.182l25.841-47.94c2.224-4.13.419-9.275-4.71-11.497l-80.295-43.434c-1.078-.583-2.292-.883-3.496-.883-1.206 0-2.42.3-3.496.883l-80.3 43.434c-5.13 2.22-6.934 7.367-4.71 11.497l25.841 47.94c.633 1.049 1.62 1.814 2.751 2.182a7.988 7.988 0 009.918-4.857l25.824-71.059-113.777-69.987 89.19-54.852c4.12-2.542 5.206-7.684 2.663-11.803-2.543-4.121-7.684-5.205-11.804-2.663l-89.184 54.849-89.187-54.85c-4.121-2.543-9.261-.457-11.804 2.663-2.543 4.12-.457 9.261 2.663 11.803l89.19 54.852z" />
        </svg>
        <a href="/home" className="text-blue-800 hover:underline">
          Go back to home
        </a>
      </div>
    </div>
  );
};

export default UnderDevelopment;
