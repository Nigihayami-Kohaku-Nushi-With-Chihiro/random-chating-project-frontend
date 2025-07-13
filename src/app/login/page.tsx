"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/api";

import type { LoginParams } from "@/types";

const Login: React.FC = () => {
   const [form, setForm] = useState<LoginParams>({ email: "", password: "" });
   const router = useRouter();

   const handleLogin = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
         await login(form);
         router.push("/");
      } catch (e) {
         console.error(e);
      }
   };

   return (
      <>
         <form className="flex flex-col" onSubmit={handleLogin}>
            <input
               className="bg-white border border-black"
               type="email"
               value={form.email}
               onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
            <input
               className="bg-white border border-black"
               type="password"
               onChange={(event) => setForm({ ...form, password: event.target.value })}
            />
         </form>
      </>
   );
};

export default Login;
