"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

import { login } from "@/api";

import type { LoginParams } from "@/types";

const Login: React.FC = () => {
   const [form, setForm] = useState<LoginParams>({ email: "", password: "" });
   const router = useRouter();

   const handleLogin = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
         const res = await login(form);
         const accessToken = res.token;

         document.cookie = `token=${accessToken}; path=/; max-age=3600`; // 1h

         router.push("/");
      } catch (e) {
         console.error(`Login failed: ${e}`);
      }
   };

   return (
      <div className="flex w-full flex-col items-center gap-12">
         <p className="text-5xl">Log in</p>

         <form className="flex h-[12rem] w-xl flex-col items-center justify-around" onSubmit={handleLogin}>
            <input
               className="h-3/10 w-full rounded-lg border-3 border-gray-500 p-2"
               type="email"
               value={form.email}
               onChange={(event) => setForm({ ...form, email: event.target.value })}
               placeholder="email..."
            />
            <input
               className="h-3/10 w-full rounded-lg border-3 border-gray-500 p-2"
               type="password"
               onChange={(event) => setForm({ ...form, password: event.target.value })}
               placeholder="password..."
            />
            <button type="submit" className="h-10 w-3/10 cursor-pointer rounded-xl border bg-white">
               <p className="text-2xl text-black">→</p>
            </button>
         </form>

         <p>
            아직 회원이 아니신가요?
            <Link href={"/register"} className="text-blue-300">
               계정 생성하러 가기
            </Link>
         </p>
      </div>
   );
};

export default Login;
