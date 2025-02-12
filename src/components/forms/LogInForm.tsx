"use client";

import { TSignUpSchema, signUpSchema } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-white pt-20">
      <div className="w-full max-w-xl bg-white py-12 px-10 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input {...register("email")} type="email" placeholder="Email" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Input {...register("password")} type="password" placeholder="Password" />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-lg">
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
