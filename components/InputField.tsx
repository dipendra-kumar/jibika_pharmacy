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
      <Label htmlFor={id}>{label}</Label>
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
          className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm text-gray-800 ${
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
      {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
    </div>
  );
};

export default InputField;
