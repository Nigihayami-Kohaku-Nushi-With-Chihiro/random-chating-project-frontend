import React from "react";

import Link from "next/link";

const RootNavigation: React.FC = () => (
   <div className="flex h-[6rem] w-full items-center justify-around">
      <Link href={"/"}>
         <p className="text-xl text-white">홈</p>
      </Link>
      <Link href={"/login"}>
         <p className="text-xl text-white">로그인</p>
      </Link>
   </div>
);

export default RootNavigation;
