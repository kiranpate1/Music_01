"use client";

import Image from "next/image";
import Cd from "../components/Cd/Cd";

export default function Home() {
  return (
    <main className="bg-black absolute h-full w-full">
      <Cd size={500} />
    </main>
  );
}
