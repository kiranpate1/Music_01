"use client";

import Image from "next/image";
import Cd from "../components/Cd/Cd";

export default function Home() {
  return (
    <main className="absolute h-full w-full flex justify-center items-center">
      <Cd size={500} />
    </main>
  );
}
