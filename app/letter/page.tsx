'use client'
import Image from 'next/image'
import React, { useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from "@nextui-org/react";
import * as htmlToImage from 'html-to-image';
import html2canvas from 'html2canvas';

const Letter = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const gender = searchParams.get('gender')

  const handleDownload = () => {
    const screenshortTarget: any = document.getElementById('letter');

    html2canvas(screenshortTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      var anchor = document.createElement('a');
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "thiep.png");
      anchor.click();
      anchor.remove();
    })
  }


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
        <Image
          className='shadow-green-600 mt-10'
          src="/warning.png"
          alt="logo"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className=' flex flex-col justify-center items-center h-screen max-[767px]:hidden'>
        <div className='relative w-[80vw] h-auto m-4 max-w-[1024px] ' id='letter'>
          <div className='absolute left-[50%] top-[29%] md:top-[28%] lg:top-[28%] min-[1440px]:top-[28%] w-[50%] flex flex-col items-center justify-start '>
            <p className='font-bold font-[Crimson] lg:text-base md:text-[0.7rem] min-[1440px]:text-xl w-[70%] text-center '>{name}</p>
          </div>
          <img className='w-full max-w-[1024px]' src="/letter.png" alt="" />

        </div>
        <div className='flex justify-around items-center mb-4'>
          <Button className='text-[#266565] font-bold mr-4' variant="ghost" onClick={handleDownload}>
            Download Thư Mời
          </Button>
          <Button className='text-[#266565] font-bold' variant="ghost" onClick={() => router.push(`/`)}>
            Nhập Lại Tên
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Letter