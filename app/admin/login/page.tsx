"use client";
import InputField from "@/components/InputField";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { adminLogin } from "@/actions/auth";

interface LoginFormInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit = async (data: LoginFormInput) => {
    try {
      setIsLoading(true);
      adminLogin(data);
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Welcome to dashboard",
      });
      //   router.push("/");
    } catch (error: any) {
      setIsLoading(false);

      toast({
        title: "Error",
        description: "Something went wrong!",
        variant: "destructive",
      });
    }
  };

  //   const handleRegisterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     // router.push("/signup");
  //   };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 px-8">
      <div className="flex flex-col gap-10 mx-auto px-8 py-12 bg-white shadow rounded-lg md:px-10 w-full md:min-w-[385px] md:max-w-[500px]">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">
          Jibika Pharmacy <br />& Health Clinic
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id="email"
            label="Email"
            type="email"
            register={register}
            error={errors.email}
            required
          />

          <InputField
            id="password"
            label="Password"
            type="password"
            register={register}
            error={errors.password}
            required
          />

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? <Loading /> : "Sign in"}
            </Button>
          </div>

          {/* <div className="flex flex-col items-center justify-center text-gray-600">
            <span className="text-sm">Don't have an account? </span>
            <button
              className="font-medium text-indigo-600 hover:text-indigo-500 bg-transparent"
              onClick={handleRegisterClick}
            >
              Register here
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
