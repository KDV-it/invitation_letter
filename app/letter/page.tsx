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
    <div className='bg-[#415e4180] h-screen'>
      <div className='min-[768px]:hidden flex flex-col justify-start items-center pt-20 h-screen bg-[#415e4180] '>
        <Image
          className='shadow-green-600 '
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
          priority
        />
        <h1 className='text-[#fff] font-bold text-xl mt-4'>GIA ĐÌNH SINH VIÊN TÔMA THIỆN</h1>
        <p className='font-bold mt-10'>Ứng dụng hiện tại không hỗ trợ cho di động!</p>
      </div>
      <div className=' flex flex-col justify-center items-center h-screen max-[767px]:hidden'>
        <div className='relative w-auto h-[auto] m-8 '>
          <div className='absolute left-[50%] top-[29%] md:top-[28%] w-[50%] flex flex-col items-center '>
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
    </div>
  )
}

export default Letter