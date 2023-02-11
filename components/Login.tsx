"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className=" bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <p className=" text-white font-bold text-3xl animate-pulse ">
        Sign In to use ChatGPT
      </p>
      <button
        className=" text-2xl text-white font-bold border px-4 py-2 mt-5 hover:bg-white hover:text-[#11A37F] transition-all duration-200 ease-out rounded"
        onClick={() => signIn("google")}
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;
