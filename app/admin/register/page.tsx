"use client";
import InputField from "@/components/InputField";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

import { Button } from "@/components/ui/button";
import { BiAt, BiKey, BiMap, BiPhone, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchUser, registerUser } from "@/store/slices/authSlice";

interface RegisterFormInput {
  fullName: string;
  emailAddress: string;
  password: string;
  cPassword: string;
  address: string;
  phoneNumber: string;
}

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit = async (data: RegisterFormInput) => {
    try {
      setIsLoading(true);
      await dispatch(registerUser(data));
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/admin/login");
  };
  return (
    <div className="flex h-screen w-full  items-center justify-around overflow-auto bg-gray-100 px-8 py-10 sm:px-6">
      <div className="hidden w-1/2 flex-col justify-center bg-gray-100 px-8 py-12 md:flex">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Jibika Pharmacy <br />& Health Clinic
        </h2>
      </div>
      <div className=" flex w-full flex-col  rounded-lg bg-white px-8 py-5 shadow md:min-w-[385px] md:max-w-[500px] md:px-10">
        <h2 className=" text-3xl font-extrabold text-gray-900">Register</h2>
        <p className="mb-5 mt-2">Provide the details below to register</p>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id="fullName"
            label="Full Name"
            type="text"
            placeholder="Type your name"
            register={register}
            error={errors.fullName}
            required
            icon={<BiUser />}
          />

          <InputField
            id="emailAddress"
            label="Email"
            placeholder="Type your emailAddress"
            type="email"
            register={register}
            error={errors.emailAddress}
            required
            icon={<BiAt />}
          />

          <InputField
            id="password"
            label="Password"
            placeholder="●●●●●●●●"
            type="password"
            register={register}
            error={errors.password}
            required
            icon={<BiKey />}
          />
          <InputField
            id="cPassword"
            label="Confirm Password"
            placeholder="●●●●●●●●"
            type="password"
            register={register}
            error={errors.cPassword}
            required
            icon={<BiKey />}
          />
          <InputField
            id="address"
            label="Address"
            placeholder="Type your address"
            type="string"
            register={register}
            error={errors.address}
            required
            icon={<BiMap />}
          />
          <InputField
            id="phoneNumber"
            label="Phone Number"
            placeholder="Type your phone number"
            type="number"
            register={register}
            error={errors.phoneNumber}
            required
            icon={<BiPhone />}
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
        <div className="flex flex-col items-center justify-center text-gray-600">
          <span className="text-sm">Already have an account? </span>
          <button
            className="bg-transparent font-medium text-indigo-600 hover:text-indigo-500"
            onClick={handleLoginClick}
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
