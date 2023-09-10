'use client'
import Image from 'next/image'
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from "@nextui-org/react";

const Letter = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  return (
    <div className='bg-[#415e4180] flex flex-col justify-center items-center h-screen '>
      <div className='w-auto h-[100%] m-14 relative'>
        <div className='absolute left-[50%] min-[1440px]:top-[30%] xl:top-[23%] lg:top-[28%] md:top-[13.5%] w-[50%] flex flex-col items-center '>
          <p className='font-bold font-[Crimson] text-2xl md:text-xl'>{name}</p>
        </div>
        <Image
          className='shadow-green-600 w-full h-auto'
          src="/letter.png"
          alt="logo"
          width={2048}
          height={1365}
          priority
        />
      </div>
      <div>
        <Button>
          Download Thư Mời
        </Button>
      </div>
    </div>
  )
}

export default Letter