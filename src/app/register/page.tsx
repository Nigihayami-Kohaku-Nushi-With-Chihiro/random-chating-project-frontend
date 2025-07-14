"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { register } from "@/api";

import type { RegisterParams } from "@/types";

const Register: React.FC = () => {
   const [form, setForm] = useState<RegisterParams>({ username: "", email: "", password: "", gender: "", age: null });
   const router = useRouter();

   const handleRegister = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
         const res = await register(form);

         if (res.token) {
            document.cookie = `token=${res.token}; path=/; max-age=3600`;
         }

         router.push("/");
      } catch (e) {
         console.error(`Account creation failed: ${e}`);
      }
   };

   return (
      <>
         <form className="flex flex-col" onSubmit={handleRegister}>
            <input
               className="bg-white border border-black"
               type="text"
               value={form.username}
               onChange={(event) => setForm({ ...form, username: event.target.value })}
            />
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
            <input
               className="bg-white border border-black"
               type="text"
               onChange={(event) => setForm({ ...form, gender: event.target.value })}
            />
            <input
               className="bg-white border border-black"
               type="number"
               onChange={(event) => setForm({ ...form, age: Number(event.target.value) })}
            />
            <button type="submit">회원 가입</button>
         </form>
      </>
   );
};

export default Register;
