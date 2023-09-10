'use client'
import React from 'react'
import Image from 'next/image'
import { Input, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

const Name = ({ name, setName }: any) => {
  const router = useRouter()
  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  return (
    <>
      <div className='min-[481px]:hidden flex flex-col justify-start items-center pt-20 h-screen bg-[#415e4180] '>
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

      <div className='flex flex-col justify-start items-center mb-60 max-[480px]:hidden'>
        <Image
          className='shadow-green-600'
          src="/logo.png"
          alt="logo"
          width={300}
          height={300}
          priority
        />
        <h1 className='text-[#fff] font-bold text-4xl mt-4'>GIA ĐÌNH SINH VIÊN TÔMA THIỆN</h1>
        {/* <p className='font-CrimsonPro text-5xl mt-20'>Thư mời</p> */}
        <p className='text-[#266526] font-bold text-5xl  font-CrimsonPro mt-10'>THÁNH LỄ MỪNG KÍNH</p>
        <p className='text-[#266526] font-bold text-5xl mt-4 font-CrimsonPro'>THÁNH TÔMA TRẦN VĂN THIỆN</p>
        <p className='mt-10 text-2xl text-[#fff]'>Mời anh chị nhập tên</p>
        <Input size='lg' type='text' label='Họ & Tên' onChange={handleChange} />
        {<Button className='mt-4 text-[#266526] font-bold' variant="ghost" onClick={() => router.push(`/letter?name=${name}`)}>
          Nhận thư mời
        </Button>}
      </div>
    </>
  )
}

export default Name