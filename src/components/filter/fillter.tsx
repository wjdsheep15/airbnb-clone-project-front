'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '/public/svgIcons/closeIcon.svg'
import { Typography } from '@mui/material'
import GuestPreferences from '/public/svgIcons/guestPreferences.svg'
import MultiRangeBar from './multiRangeSlider/multiRangeSlider'
import FitterIcon from '/public/images/fillter.svg'
import BedroomAndBedType from './bedroomAndBed'
import BuildingType from './buildingType'
import Convenience from './convenience'
import Accessibility from './accessibility'
import HostLanguage from './hostLanguage'

export default function FillterModel() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // 모든 유형, 방, 집 전체에 따라 다른 내용 출력
  const [modalContent, setModalContent] = useState('allTypes')
  // 버튼 클릭 시 색깔주기 (숙소 유형)
  const [activeLodging, setActiveLodging] = useState('')
  const handleLodgingClick = (button: React.SetStateAction<string>) => {
    setActiveLodging(button)
  }

  // 사이드바
  const fixedMaxPrice = 450000
  const fixedMinPrice = 13000
  const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice)
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice)

  // 최고 수준 숙소
  const [selectedLodging, setSelectedLodging] = useState(false)
  const handleButtonLodgingClick = () => {
    setSelectedLodging(!selectedLodging) // 선택 상태를 토글
  }

  // 전체 선택 해제.

  return (
    <>
      <div
        className='flex grow-0 items-center w-full h-full  gap-x-2 justify-center'
        onClick={handleOpen}
      >
        <FitterIcon />
        <span className='text-xs'>필터</span>
      </div>
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
                  className={`px-28 py-10 rounded-l-2xl border border-slate-200 hover:border-black
                    ${activeLodging === 'allTypesButton' ? 'bg-black text-white font-bold text-xl' : ''}`}
                  onClick={() => {
                    setModalContent('allTypes')
                    handleLodgingClick('allTypesButton')
                  }}
                >
                  <p className='w-[90px]'>모든 유형</p>
                </button>
                <button
                  className={`px-28 py-10 border border-slate-200 hover:border-black
                    ${activeLodging === 'roomsButton' ? 'bg-black text-white font-bold text-xl' : ''}`}
                  onClick={() => {
                    setModalContent('rooms')
                    handleLodgingClick('roomsButton')
                  }}
                >
                  <p className='w-[70px]'>방</p>
                </button>
                <button
                  className={`px-28 py-10 rounded-r-2xl border border-slate-200 hover:border-black
                    ${activeLodging === 'allHouseButton' ? 'bg-black text-white font-bold text-xl' : ''}`}
                  onClick={() => {
                    setModalContent('allHouse')
                    handleLodgingClick('allHouseButton')
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
            <div className='divide-y-2 divide-gray-400'></div>
            <MultiRangeBar
              fixedMinPrice={fixedMinPrice}
              fixedMaxPrice={fixedMaxPrice}
              setRangeMinValue={setRangeMinValue}
              rangeMinValue={rangeMinValue}
              setRangeMaxValue={setRangeMaxValue}
              rangeMaxValue={rangeMaxValue}
            />

            <BedroomAndBedType />
            <Typography variant='h4' className='font-semibold'>
              최고 수준의 숙소
            </Typography>
            <div className='divide-y-2 divide-gray-400'>
              <button
                onClick={() => {
                  handleButtonLodgingClick()
                }}
                className={`border transition-transform duration-400 active:scale-90 border-solid border-black rounded-lg w-[330px] h-[160px] mt-8
                ${selectedLodging === true ? 'bg-slate-200' : ''}`}
              >
                <div className='relative left-6'>
                  <GuestPreferences />
                </div>
                <p className='relative left-4 text-left font-semibold text-lg'>게스트 선호</p>
                <p className='relative left-1'>에어비앤비 게스트에게 가장 사랑받는 숙소</p>
              </button>

              <div className='mt-12 mb-12'></div>
            </div>

            <BuildingType />

            <div className='divide-y-2 divide-gray-400'>
              <div></div>
              <div className='mt-12 mb-12'></div>
            </div>
            {/* 편의 시설 */}
            <Convenience />

            <div className='divide-y-2 divide-gray-400'>
              <div></div>
              <div className='mt-12 mb-12'></div>
            </div>

            {/* 예약 옵션 */}
            <Typography variant='h4' className='font-semibold'>
              예약 옵션
            </Typography>
            <p>즉시 예약</p>
            <div className='flex'>
              <p>호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소</p>
              <label className='inline-flex items-center cursor-pointer'>
                <input type='checkbox' className='sr-only peer' />
                <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
              </label>
            </div>
            <p>셀프 체크인</p>
            <div className='flex'>
              <p>숙소에 도착한 후 복잡한 절차 없이 쉽게 입실할 수 있습니다.</p>
              <label className='inline-flex items-center cursor-pointer'>
                <input type='checkbox' className='sr-only peer' />
                <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
              </label>
            </div>
            <p>반려동물 동반 가능</p>
            <div className='flex'>
              <p>보조동물을 동반하시나요?</p>
              <label className='inline-flex items-center cursor-pointer'>
                <input type='checkbox' className='sr-only peer' />
                <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
              </label>
            </div>
            <div className='divide-y-2 divide-gray-400'>
              <div></div>
              <div className='mt-12 mb-12'></div>
            </div>
            {/* 접근성 편의 */}
            <Accessibility />

            <div className='divide-y-2 divide-gray-400'>
              <div></div>
              <div className='mt-12 mb-12'></div>
            </div>

            {/* 호스트 언어 */}
            <HostLanguage />
          </div>
          {/* <button className='mt-6 text-xl font-semibold' onClick={handleUncheckAll}>
            전체 해제
          </button> */}
          {/* <button className='mt-6 text-xl font-semibold'>전체 해제</button> */}
        </Box>
      </Modal>
    </>
  )
}
