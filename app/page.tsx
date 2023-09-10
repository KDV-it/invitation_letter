'use client'
import Name from "./type-name"
import { NextUIProvider } from "@nextui-org/react";

import { useState } from 'react'
export default function Home() {
  const [name, setName] = useState<string>('')


  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-row items-center justify-center bg-[#415e4180]">
        <Name setName={setName} name={name} />
      </main>
    </NextUIProvider>
  )
}
