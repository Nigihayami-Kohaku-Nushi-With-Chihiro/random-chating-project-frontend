"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

type TokenProps = {
   token: string | null;
};

const RootClient: React.FC<TokenProps> = ({ token }) => {
   const router = useRouter();

   useEffect(() => {
      if (!token) {
         router.push("/login");
      }
   }, [token, router]);

   if (!token) {
      return <p>로그인이 필요합니다.</p>;
   }

   return (
      <div className="text-center">
         <p className="text-2xl">Home Component</p>
      </div>
   );
};

export default RootClient;
