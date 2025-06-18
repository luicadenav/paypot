"use client";
import TopBar from "@/components/common/TopBar";
import LockIllustration from "@/assets/images/lock.svg";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema), // way to connect zod
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md h-dvh  overflow-y-auto mx-auto bg-white flex flex-col  gap-5 p-4 ">
      <TopBar name="Sign In" />
      <LockIllustration className="mx-auto my-12  flex-shrink-0" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-8 "
      >
        <div className="w-full flex flex-col">
          <label
            htmlFor="email"
            className="text-sm mb-2 text-secondary-3 capitalize peer-focus:text-primary-1 peer-focus:font-semibold"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            className="w-full  border-2 border-secondary-5 rounded-lg p-3 text-secondary-2  focus:outline-none focus:ring-2 focus:ring-primary-1  focus:bg-primary-4 peer "
            placeholder="Email"
          />

          {errors.email && (
            <span className="text-semantic-1 text-xs mt-0.5">
              {errors.email.message}{" "}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col relative">
          <label
            htmlFor="password"
            className="text-sm mb-2 text-secondary-3 capitalize peer-focus:text-primary-1 peer-focus:font-semibold"
          >
            Password
          </label>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full  border-2 border-secondary-5 rounded-lg p-3 text-secondary-2  focus:outline-none focus:ring-2 focus:ring-primary-1  focus:bg-primary-4 peer "
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-11"
          >
            {showPassword ? (
              <EyeOff size={20} color="#989898" />
            ) : (
              <Eye size={20} color="#989898" />
            )}
          </button>
          {errors.password && (
            <span className="text-semantic-1 text-xs mt-0.5">
              {errors.password.message}{" "}
            </span>
          )}
          <Link
            href="/signup"
            className="text-sm text-primary-2 hover:underline text-right mt-1"
          >
            Forgot password ?
          </Link>
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary-1 text-white text-center w-full py-3 mt-8 rounded-xl font-sans font-medium text-md cursor-pointer hover:bg-primary-2 transition-colors duration-200 ease-in-out"
          >
            Sign In
          </button>
          <p className="text-sm text-secondary-1 text-center mt-1 mb-20 ">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary-2 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
