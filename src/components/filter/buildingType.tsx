'use client'

import React, { useState } from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'

export default function BuildingTypes() {
  // 버튼 클릭 시 색깔주기 (건물 유형)
  const [activeBuilding, setActiveBuilding] = useState('')
  const handleBuidingType = (button: React.SetStateAction<string>) => {
    setActiveBuilding(button)
  }
  const [selected, setSelected] = useState(false)
  const handleButtonClick = () => {
    setSelected(!selected) // 선택 상태를 토글
  }
  return (
    <>
      <Typography variant='h4' className='font-semibold'>
        건물 유형
      </Typography>
      <div className='flex space-x-4 mt-8'>
        <button
          className={`border border-slate-400 transition-transform duration-400 hover:border-black active:scale-90 rounded-lg w-[230px] h-[130px]
                ${activeBuilding === 'houseButton' && selected === true ? 'bg-slate-200 border border-black' : 'bg-white'}
                  `}
          onClick={() => {
            handleBuidingType('houseButton')
            handleButtonClick()
          }}
        >
          <div className='relative left-4'>
            <Image src='/images/buildingTypes/house.jpg' alt='house' width={35} height={35} />
            <p className='relative left-4 text-left font-semibold text-lg'>단독 또는 다세대 주택</p>
          </div>
        </button>

        <button
          className={`border border-slate-400 transition-transform duration-400 hover:border-black active:scale-90 rounded-lg w-[230px] h-[130px]
                ${activeBuilding === 'apartmentButton' && selected === true ? 'bg-slate-200 border border-black' : 'bg-white'}
                  `}
          onClick={() => {
            handleBuidingType('apartmentButton')
            handleButtonClick()
          }}
        >
          <div className='relative left-4'>
            <Image
              src='/images/buildingTypes/apartment.jpg'
              alt='apartment'
              width={35}
              height={35}
            />
            <p className='relative left-4 text-left font-semibold text-lg'>아파트</p>
          </div>
        </button>
        <button
          className={`border border-slate-400 transition-transform duration-400 hover:border-black active:scale-90 rounded-lg w-[230px] h-[130px]
                ${activeBuilding === 'outBuilding' && selected === true ? 'bg-slate-200 border border-black' : 'bg-white'}
                  `}
          onClick={() => {
            handleBuidingType('outBuilding')
            handleButtonClick()
          }}
        >
          <div className='relative left-4 -top-6'>
            <Image
              src='/images/buildingTypes/outBuilding.jpg'
              alt='outBuilding'
              width={35}
              height={35}
            />
            <p className='relative left-4 text-left font-semibold text-lg'>게스트용 별채</p>
          </div>
        </button>
      </div>
    </>
  )
}
