'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '/public/svgIcons/closeIcon.svg'
import { Typography } from '@mui/material'
import MultiRangeSlider from './multiRangeSlider/multiRangeSlider'
import GuestPreferences from '/public/svgIcons/guestPreferences.svg'
import Image from 'next/image'

export default function SignUpButton() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // 모든 유형, 방, 집 전체에 따라 다른 내용 출력
  const [modalContent, setModalContent] = useState('allTypes')
  // 버튼 클릭 시 색깔주기
  const [active, setActive] = useState('')
  const handleClick = (button: React.SetStateAction<string>) => {
    setActive(button)
  }

  return (
    <>
      <button onClick={handleOpen}>Open filter modal</button>
      <Modal open={open} onClose={handleClose}>
        <Box
          className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl
           bg-white border-2 border-black shadow-lg p-12 w-[1050px] h-[820px]'
        >
          <div className='divide-y-2 divide-gray-400 w-[1110px] -ml-28 -mt-8'>
            <div>
              <header>
                <button className='border-none text-black mt-5 -mb-0 ml-24' onClick={handleClose}>
                  <CloseIcon />
                </button>
                <div className='flex justify-center text-xl font-semibold -mt-8 ml-76'>필터</div>
              </header>
            </div>
            <div className='mt-8 ml-16'></div>
          </div>

          {/* 시작 숙소 유형 선택 */}
          <div className='max-h-[600px] overflow-y-auto overflow-x-hidden w-[1020px] -ml-6 mt-8'>
            <Typography variant='h4' className='font-semibold'>
              숙소 유형
            </Typography>
            {/* 모든 유형 선택 */}
            {modalContent === 'allTypes' && (
              <div>
                <p className='mt-4'>방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.</p>
              </div>
            )}
            {/* 방 선택 */}
            {modalContent === 'rooms' && (
              <div>
                <p className='mt-4'>단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다.</p>
              </div>
            )}
            {/* 집 전체 선택 */}
            {modalContent === 'allHouse' && (
              <div>
                <p className='mt-4'>집 전체를 단독으로 사용합니다.</p>
              </div>
            )}
            {/* 나중에 그래프도 같이 */}
            {/* 버튼 */}
            <div className='divide-y-2 divide-gray-400 '>
              <div className='flex shadow-sm mt-6 ml-8'>
                <button
                  className={`px-28 py-10 rounded-l-2xl hover:border-2 border-black
                    ${active === 'allTypesButton' ? 'bg-black text-white font-bold text-xl' : ''}`}
                  onClick={() => {
                    setModalContent('allTypes')
                    handleClick('allTypesButton')
                  }}
                >
                  <p className='w-[90px]'>모든 유형</p>
                </button>
                <button
                  className={`px-28 py-10 hover:border-2 border-black
                    ${active === 'roomsButton' ? 'bg-black text-white font-bold text-xl' : ''}`}
                  onClick={() => {
                    setModalContent('rooms')
                    handleClick('roomsButton')
                  }}
                >
                  <p className='w-[70px]'>방</p>
                </button>
                <button
                  className={`px-28 py-10 rounded-r-2xl hover:border-2 border-black
                    ${active === 'allHouseButton' ? 'bg-black text-white font-bold text-xl' : ''}`}
                  onClick={() => {
                    setModalContent('allHouse')
                    handleClick('allHouseButton')
                  }}
                >
                  <p className='w-[70px]'>집 전체</p>
                </button>
              </div>
              <div className='mt-12 mb-12'></div>
            </div>
            {/* 가격 범위 */}
            <Typography variant='h4' className='font-semibold'>
              가격 범위
            </Typography>
            {/* 그래프 삽입 => 유형에 따라 다름 */}
            <p>1박 요금(수수료 및 세금 포함)</p>
            {/* 슬라이더 생성 */}
            <div className='divide-y-2 divide-gray-400'>
              <MultiRangeSlider
                initialMin={13000}
                initialMax={650000}
                min={0}
                max={6500000}
                step={330}
                priceCap={10000}
              />
              <div className='mt-12 mb-12'></div>
            </div>
            {/* 침실과 침대 */}
            <Typography variant='h4' className='font-semibold'>
              침실과 침대
            </Typography>
            <p className='mt-8 mb-8 text-xl'>침실</p>
            <div className='flex space-x-4'>
              <button
                className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bedroomButton' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                onClick={() => {
                  handleClick('bedroomButton')
                }}
              >
                상관없음
              </button>
              <button
                className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bedroomButtonOne' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                onClick={() => {
                  handleClick('bedroomButtonOne')
                }}
              >
                1
              </button>
              <button
                className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bedroomButtonTwo' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                onClick={() => {
                  handleClick('bedroomButtonTwo')
                }}
              >
                2
              </button>
              <button
                className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bedroomButtonThree' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                onClick={() => {
                  handleClick('bedroomButtonThree')
                }}
              >
                3
              </button>

              <button
                className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bedroomButtonFour' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                onClick={() => {
                  handleClick('bedroomButtonFour')
                }}
              >
                4
              </button>
              <button
                className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bedroomButtonFive' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                onClick={() => {
                  handleClick('bedroomButtonFive')
                }}
              >
                5
              </button>
              <button
                className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bedroomButtonSix' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                onClick={() => {
                  handleClick('bedroomButtonSix')
                }}
              >
                6
              </button>
              <button
                className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bedroomButtonSeven' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                onClick={() => {
                  handleClick('bedroomButtonSeven')
                }}
              >
                7
              </button>
              <button
                className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bedroomButtonMore' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                onClick={() => {
                  handleClick('bedroomButtonMore')
                }}
              >
                8+
              </button>
            </div>
            <p className='mt-8 mb-8 text-xl'>침실</p>
            <p className='mt-12 mb-12 text-xl'>욕실</p>

            <div className='divide-y-2 divide-gray-400'>
              <div className='flex space-x-4'>
                <button
                  className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bathroomButton' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                  onClick={() => {
                    handleClick('bathroomButton')
                  }}
                >
                  상관없음
                </button>
                <button
                  className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bathroomButtonOne' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                  onClick={() => {
                    handleClick('bathroomButtonOne')
                  }}
                >
                  1
                </button>
                <button
                  className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bathroomButtonTwo' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                  onClick={() => {
                    handleClick('bathroomButtonTwo')
                  }}
                >
                  2
                </button>
                <button
                  className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bathroomButtonThree' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                  onClick={() => {
                    handleClick('bathroomButtonThree')
                  }}
                >
                  3
                </button>

                <button
                  className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bathroomButtonFour' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                  onClick={() => {
                    handleClick('bathroomButtonFour')
                  }}
                >
                  4
                </button>
                <button
                  className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bathroomButtonFive' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                  onClick={() => {
                    handleClick('bathroomButtonFive')
                  }}
                >
                  5
                </button>
                <button
                  className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bathroomButtonSix' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                  onClick={() => {
                    handleClick('bathroomButtonSix')
                  }}
                >
                  6
                </button>
                <button
                  className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bathroomButtonSeven' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                  onClick={() => {
                    handleClick('bathroomButtonSeven')
                  }}
                >
                  7
                </button>
                <button
                  className={`px-8 py-4 hover:border-black rounded-3xl border border-gray-200
                      ${active === 'bathroomButtonMore' ? 'bg-black text-white font-semibold text-xl' : ''}`}
                  onClick={() => {
                    handleClick('bathroomButtonMore')
                  }}
                >
                  8+
                </button>
              </div>
              <div className='mt-12 mb-12'></div>
            </div>
            <Typography variant='h4' className='font-semibold'>
              최고 수준의 숙소
            </Typography>
            <div className='divide-y-2 divide-gray-400'>
              <button className='border transition-transform duration-400 active:scale-90 border-solid border-black rounded-lg w-[330px] h-[160px] mt-8'>
                <div className='relative left-6'>
                  <GuestPreferences />
                </div>
                <p className='relative left-4 text-left font-semibold text-lg'>게스트 선호</p>
                <p className='relative left-1'>에어비앤비 게스트에게 가장 사랑받는 숙소</p>
              </button>

              <div className='mt-12 mb-12'></div>
            </div>

            <Typography variant='h4' className='font-semibold'>
              건물 유형
            </Typography>
            <div className='flex space-x-4 mt-8'>
              <button
                className={`border border-slate-400 transition-transform duration-400 hover:border-black active:scale-90 rounded-lg w-[230px] h-[130px]
                  ${active === 'houseButton' ? ' bg-slate-100 border border-black' : ''}`}
                onClick={() => {
                  handleClick('houseButton')
                }}
              >
                <div className='relative left-4'>
                  <Image src='/images/buildingTypes/house.jpg' alt='house' width={35} height={35} />
                  <p className='relative left-4 text-left font-semibold text-lg'>
                    단독 또는 다세대 주택
                  </p>
                </div>
              </button>
              <button
                className={`border border-slate-400 transition-transform duration-400 hover:border-black active:scale-90 rounded-lg w-[230px] h-[130px]
                  ${active === 'apartmentButton' ? 'bg-slate-100 border border-black' : ''}`}
                onClick={() => {
                  handleClick('apartmentButton')
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
                  ${active === 'outBuilding' ? 'bg-slate-100 border border-black' : ''}`}
                onClick={() => {
                  handleClick('outBuilding')
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

              <button className='border border-slate-400 transition-transform duration-400 active:scale-90 rounded-lg w-[230px] h-[130px]'>
                <div className='relative left-4 -top-6'>
                  <Image src='/images/buildingTypes/hotel.jpg' alt='hotel' width={35} height={35} />
                  <p className='relative left-4 text-left font-semibold text-lg'>호텔</p>
                </div>
              </button>
            </div>
            <div className='divide-y-2 divide-gray-400'>
              <div></div>
              <div className='mt-12 mb-12'></div>
            </div>

            <Typography variant='h4' className='font-semibold'>
              편의 시설
            </Typography>
          </div>
        </Box>
      </Modal>
    </>
  )
}
