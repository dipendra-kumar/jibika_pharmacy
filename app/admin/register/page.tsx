"use client";
import InputField from "@/components/InputField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { registerAdmin } from "@/actions/auth";

interface RegisterFormInput {
  fullName: string;
  emailAddress: string;
  password: string;
  address: string;
  phoneNumber: string;
}

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit = async (data: RegisterFormInput) => {
    try {
      setIsLoading(true);
      registerAdmin(data);
      setIsLoading(false);
      toast({
        title: "Registration successful,",
        description: "Welcome to dashboard.",
      });
      // router.push("/");
    } catch (error: any) {
      setIsLoading(false);

      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col justify-center py-12 sm:px-6 px-8">
      <div className="flex flex-col gap-10 mx-auto px-8 py-12 bg-white shadow rounded-lg md:px-10 w-full md:min-w-[385px] md:max-w-[500px]">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Jibika Pharmacy <br />& Health Clinic
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id="fullName"
            label="Full Name"
            type="text"
            register={register}
            error={errors.fullName}
            required
          />

          <InputField
            id="emailAddress"
            label="Email"
            type="email"
            register={register}
            error={errors.emailAddress}
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

          <InputField
            id="address"
            label="Address"
            type="text"
            register={register}
            error={errors.address}
            required
          />

          <InputField
            id="phoneNumber"
            label="Phone Number"
            type="number"
            register={register}
            error={errors.phoneNumber}
            required
          />

          <div>
            <Button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? <Loading /> : "Register"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
