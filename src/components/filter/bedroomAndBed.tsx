'use client'

import React, { useState } from 'react'
import { Typography } from '@mui/material'

export default function BedroomAndBedType() {
  // 버튼 선택하기
  // 버튼 클릭 시 색깔주기 (침실 유형)
  const [activeBedroomType, setActiveBedroomType] = useState('')
  const handleBedroomTypeClick = (button: React.SetStateAction<string>) => {
    setActiveBedroomType(button)
  }
  const [bedRoomSelected, setBedroomSelected] = useState(false)
  const handleButtonBedroomClick = () => {
    setBedroomSelected(!bedRoomSelected) // 선택 상태를 토글
  }

  // 버튼 클릭 시 색깔주기 (침대 유형)
  const [activeBedType, setActiveBedType] = useState('')
  const handleBedTypeClick = (button: React.SetStateAction<string>) => {
    setActiveBedType(button)
  }
  const [bedSelected, setBedSelected] = useState(false)
  const handleButtonBedClick = () => {
    setBedSelected(!bedSelected) // 선택 상태를 토글
  }

  // 버튼 클릭 시 색깔주기 (욕실 유형)
  const [activeBathType, setActiveBathType] = useState('')
  const handleBathTypeClick = (button: React.SetStateAction<string>) => {
    setActiveBathType(button)
  }
  const [bathRoomSelected, setBathroomSelected] = useState(false)
  const handleButtonBathroomClick = () => {
    setBathroomSelected(!bathRoomSelected) // 선택 상태를 토글
  }
  return (
    <>
      <Typography variant='h4' className='font-semibold'>
        침실과 침대
      </Typography>
      <p className='mt-8 mb-8 text-xl'>침실</p>
      <div className='flex space-x-4'>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedroomType === 'bedroomButton' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedroomTypeClick('bedroomButton')
            handleButtonBedroomClick()
          }}
        >
          상관없음
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedroomType === 'bedroomButtonOne' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedroomTypeClick('bedroomButtonOne')
            handleButtonBedroomClick()
          }}
        >
          1
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedroomType === 'bedroomButtonTwo' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedroomTypeClick('bedroomButtonTwo')
            handleButtonBedroomClick()
          }}
        >
          2
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedroomType === 'bedroomButtonThree' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedroomTypeClick('bedroomButtonThree')
            handleButtonBedroomClick()
          }}
        >
          3
        </button>

        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedroomType === 'bedroomButtonFour' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedroomTypeClick('bedroomButtonFour')
            handleButtonBedroomClick()
          }}
        >
          4
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedroomType === 'bedroomButtonFive' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedroomTypeClick('bedroomButtonFive')
            handleButtonBedroomClick()
          }}
        >
          5
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedroomType === 'bedroomButtonSix' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedroomTypeClick('bedroomButtonSix')
            handleButtonBedroomClick()
          }}
        >
          6
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedroomType === 'bedroomButtonSeven' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedroomTypeClick('bedroomButtonSeven')
            handleButtonBedroomClick()
          }}
        >
          7
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedroomType === 'bedroomButtonMore' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedroomTypeClick('bedroomButtonMore')
            handleButtonBedroomClick()
          }}
        >
          8+
        </button>
      </div>
      <p className='mt-8 mb-8 text-xl'>침대</p>
      <div className='flex space-x-4'>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedType === 'bedButton' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedTypeClick('bedButton')
            handleButtonBedClick()
          }}
        >
          상관없음
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedType === 'bedButtonOne' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedTypeClick('bedButtonOne')
            handleButtonBedClick()
          }}
        >
          1
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedType === 'bedButtonTwo' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedTypeClick('bedButtonTwo')
            handleButtonBedClick()
          }}
        >
          2
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedType === 'bedButtonThree' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedTypeClick('bedButtonThree')
            handleButtonBedClick()
          }}
        >
          3
        </button>

        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedType === 'bedButtonFour' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedTypeClick('bedButtonFour')
            handleButtonBedClick()
          }}
        >
          4
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedType === 'bedButtonFive' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedTypeClick('bedButtonFive')
            handleButtonBedClick()
          }}
        >
          5
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedType === 'bedButtonSix' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedTypeClick('bedButtonSix')
            handleButtonBedClick()
          }}
        >
          6
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedType === 'bedButtonSeven' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedTypeClick('bedButtonSeven')
            handleButtonBedClick()
          }}
        >
          7
        </button>
        <button
          className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBedType === 'bedButtonMore' ? 'bg-black text-white font-semibold text-xl' : ''}`}
          onClick={() => {
            handleBedTypeClick('bedButtonMore')
            handleButtonBedClick()
          }}
        >
          8+
        </button>
      </div>
      <p className='mt-12 mb-12 text-xl'>욕실</p>
      <div className='divide-y-2 divide-gray-400'>
        <div className='flex space-x-4'>
          <button
            className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBathType === 'bathroomButton' ? 'bg-black text-white font-semibold text-xl' : ''}
                      `}
            onClick={() => {
              handleBathTypeClick('bathroomButton')
              handleButtonBathroomClick()
            }}
          >
            상관없
          </button>
          <button
            className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBathType === 'bathroomButtonOne' && bathRoomSelected ? 'bg-black text-white' : ''}
                      `}
            onClick={() => {
              handleBathTypeClick('bathroomButtonOne')
              handleButtonBathroomClick()
            }}
          >
            1
          </button>
          <button
            className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBathType === 'bathroomButtonTwo' && bathRoomSelected ? 'bg-black text-white' : ''}`}
            onClick={() => {
              handleBathTypeClick('bathroomButtonTwo')
              handleButtonBathroomClick()
            }}
          >
            2
          </button>
          <button
            className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBathType === 'bathroomButtonThree' && bathRoomSelected ? 'bg-black text-white' : ''}`}
            onClick={() => {
              handleBathTypeClick('bathroomButtonThree')
              handleButtonBathroomClick()
            }}
          >
            3
          </button>

          <button
            className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBathType === 'bathroomButtonFour' && bathRoomSelected ? 'bg-black text-white' : ''}`}
            onClick={() => {
              handleBathTypeClick('bathroomButtonFour')
              handleButtonBathroomClick()
            }}
          >
            4
          </button>
          <button
            className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBathType === 'bathroomButtonFive' && bathRoomSelected ? 'bg-black text-white' : ''}`}
            onClick={() => {
              handleBathTypeClick('bathroomButtonFive')
              handleButtonBathroomClick()
            }}
          >
            5
          </button>
          <button
            className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBathType === 'bathroomButtonSix' && bathRoomSelected ? 'bg-black text-white' : ''}`}
            onClick={() => {
              handleBathTypeClick('bathroomButtonSix')
              handleButtonBathroomClick()
            }}
          >
            6
          </button>
          <button
            className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBathType === 'bathroomButtonSeven' && bathRoomSelected ? 'bg-black text-white' : ''}`}
            onClick={() => {
              handleBathTypeClick('bathroomButtonSeven')
              handleButtonBathroomClick()
            }}
          >
            7
          </button>
          <button
            className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${activeBathType === 'bathroomButtonMore' && bathRoomSelected ? 'bg-black text-white' : ''}`}
            onClick={() => {
              handleBathTypeClick('bathroomButtonMore')
              handleButtonBathroomClick()
            }}
          >
            8+
          </button>
        </div>
        <div className='mt-12 mb-12'></div>
      </div>
    </>
  )
}
