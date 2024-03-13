'use client'
import React, { useState } from 'react'
import LanguageModel from '@/components/navigation/modal/languageModel'
import LanguageIcon from '/public/images/naviBarIcon/languageIcon.svg'
import UserMenuButton from '@/components/navigation/navibarButtons/userMenuButton'

export default function RightPartNavibar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className='text-nowrap text-sm p-2 text-black rounded-full  hover:bg-gray-100'>
        <span>당신의 공간을 에어비엔비하세요</span>
      </button>
      <button
        className='h-10 w-10 flex justify-center rounded-full p-2 hover:bg-gray-100 text-black  items-center'
        onClick={() => setOpen(!open)}
      >
        <LanguageIcon />
      </button>
      <UserMenuButton />

      <LanguageModel open={open} setOpen={setOpen} />
    </>
  )
}
