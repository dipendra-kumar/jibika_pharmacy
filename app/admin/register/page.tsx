"use client";
import InputField from "@/components/InputField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
// import { registerAdmin } from "@/actions/auth";

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
      // registerAdmin(data);
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
    <div className="flex h-screen w-full flex-col justify-center bg-gray-100 px-8 py-12 sm:px-6">
      <div className="mx-auto flex w-full flex-col gap-10 rounded-lg bg-white px-8 py-12 shadow md:min-w-[385px] md:max-w-[500px] md:px-10">
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
              className={`flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
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
