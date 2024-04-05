import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  type: string;
  register: any;
  error: any;
  required?: boolean;
  pattern?: RegExp;
  errorMessage?: string;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  type,
  register,
  error,
  required,
  pattern,
  errorMessage,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className=" text-gray-700">
        {label}
      </Label>
      <div className="relative rounded-md border focus:outline-none ">
        {icon && (
          <span className="pointer-events-none absolute inset-y-0 left-0 mr-1 flex items-center justify-center overflow-hidden rounded-s-sm bg-gray-300 p-3">
            {icon}
          </span>
        )}
        <Input
          id={id}
          {...register(id, {
            required: required ? `${label} is required` : false,
            pattern: pattern
              ? { value: pattern, message: errorMessage || "Invalid input" }
              : false,
          })}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          className={`block w-full appearance-none border-none px-3 py-2 text-gray-800 shadow-sm focus:outline-none  sm:text-sm ${
            showPassword ? "text-xl" : ""
          }`}
          style={{ paddingLeft: icon ? "3rem" : "1rem" }}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 rounded-full px-3 py-2 duration-300 hover:bg-gray-200"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        )}
      </div>

      {error && <p className="text-xs italic text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
