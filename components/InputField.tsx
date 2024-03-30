import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputProps {
  id: string;
  label: string;
  type: string;
  register: any;
  error: any;
  required?: boolean;
  pattern?: RegExp;
  errorMessage?: string;
}

const InputField: React.FC<InputProps> = ({
  id,
  label,
  type,
  register,
  error,
  required,
  pattern,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="flex gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <div className="relative">
        <Input
          id={id}
          {...register(id, {
            required: required ? `${label} is required` : false,
            pattern: pattern
              ? { value: pattern, message: errorMessage || "Invalid input" }
              : false,
          })}
          type={showPassword ? "text" : type}
          className={`block w-full appearance-none rounded-md border px-3 py-2 text-gray-800 shadow-sm focus:outline-none sm:text-sm ${
            showPassword ? "text-xl" : ""
          }`}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-3 py-2"
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
