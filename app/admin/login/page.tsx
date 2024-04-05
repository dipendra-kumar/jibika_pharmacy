"use client";
import InputField from "@/components/InputField";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { BiAt, BiKey } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchUser, loginUser } from "@/store/slices/authSlice";
import { toast } from "@/components/ui/use-toast";
interface LoginFormInput {
  emailAddress: string;
  password: string;
  LOGIN_TYPE: string;
}

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { authState, user } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  useEffect(() => {
    if (authState) {
      dispatch(fetchUser());
    }
    if (user && user.isAdmin) {
      router.push("/admin/dashboard");
      toast({ title: "Success", description: "Welcome to the dashboard." });
    }
  }, [authState]);

  const onSubmit = async (data: LoginFormInput) => {
    try {
      setIsLoading(true);
      data.LOGIN_TYPE = "admin";
      await dispatch(loginUser(data));
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/admin/register");
  };

  return (
    <div className="flex h-screen w-full  items-center justify-around overflow-auto bg-gray-100 px-8 py-10 sm:px-6">
      <div className="hidden w-1/2 flex-col justify-center bg-gray-100 px-8 py-12 md:flex">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Jibika Pharmacy <br />& Health Clinic
        </h2>
      </div>
      <div className=" flex w-full flex-col  rounded-lg bg-white px-8 py-5 shadow md:min-w-[385px] md:max-w-[500px] md:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <h2 className=" text-3xl font-extrabold text-gray-900">Login</h2>
          <p className="mb-5">Please enter your login email and password</p>
          <InputField
            id="emailAddress"
            label="Email"
            placeholder="Type your email address"
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
              className={`flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? <Loading /> : "Sign in"}
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center text-gray-600">
            <span className="text-sm">Don't have an account? </span>
            <button
              className="bg-transparent font-medium text-indigo-600 hover:text-indigo-500"
              onClick={handleRegisterClick}
            >
              Register here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
