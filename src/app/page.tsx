import React from "react";

import { cookies } from "next/headers";

import RootClient from "@/components/RootClient";

const Home: React.FC = async () => {
   const cookieStore = await cookies();
   const token = cookieStore.get("token")?.value;

   return <RootClient token={token ?? null} />;
};

export default Home;
