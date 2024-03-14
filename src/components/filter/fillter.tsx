'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '/public/svgIcons/closeIcon.svg'
import { Typography } from '@mui/material'
import GuestPreferences from '/public/svgIcons/guestPreferences.svg'
import MultiRangeBar from './multiRangeSlider/multiRangeSlider'
import Image from 'next/image'
import FitterIcon from '/public/images/fillter.svg'

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

  // 최고 수준 숙소
  const [selectedLodging, setSelectedLodging] = useState(false)
  const handleButtonLodgingClick = () => {
    setSelectedLodging(!selectedLodging) // 선택 상태를 토글
  }

  // 버튼 클릭 시 색깔주기 (건물 유형)
  const [activeBuilding, setActiveBuilding] = useState('')
  const handleBuidingType = (button: React.SetStateAction<string>) => {
    setActiveBuilding(button)
  }
  const [selected, setSelected] = useState(false)
  const handleButtonClick = () => {
    setSelected(!selected) // 선택 상태를 토글
  }

  // 편의 시설 더 보기
  const [moreButtonConvenience, setMoreButtonConvenience] = useState('더 표시')
  const [foldingConvenience, setFoldingConvenience] = useState(false)

  // 접근성 편의 더 보기
  const [moreButtonAccessibility, setMoreButtonAccessibility] = useState('더 표시')
  const [foldingAccessibility, setFoldingAccessibility] = useState(false)

  // 언어 더 보기
  const [moreButtonLanguage, setMoreButtonLanguage] = useState('더 표시')
  const [foldingLanguage, setFoldingLanguage] = useState(false)

  const useFoldingConvenience = () => {
    if (moreButtonConvenience === '더 보기') {
      setMoreButtonConvenience('숨기기')
      setFoldingConvenience(true)
    } else {
      setMoreButtonConvenience('더 보기')
      setFoldingConvenience(false)
    }
  }

  const useFoldingAccessibility = () => {
    if (moreButtonAccessibility === '더 보기') {
      setMoreButtonAccessibility('숨기기')
      setFoldingAccessibility(true)
    } else {
      setMoreButtonAccessibility('더 보기')
      setFoldingAccessibility(false)
    }
  }

  const useFoldingLanguage = () => {
    if (moreButtonLanguage === '더 보기') {
      setMoreButtonLanguage('숨기기')
      setFoldingLanguage(true)
    } else {
      setMoreButtonLanguage('더 보기')
      setFoldingLanguage(false)
    }
  }

  // 전체 체크박스 해제

  // 체크박스 상태를 변경하는 함수
  // const handleCheckboxChange = (e: {
  //   target: { checked: boolean | ((prevState: boolean) => boolean) }
  // }) => {
  //   setIsChecked(e.target.checked)
  // }

  // 버튼 클릭을 처리하는 핸들러
  type CheckboxStates = {
    [key: string]: boolean
  }

  const [checkedLanguage, setCheckedLanguaege] = useState<CheckboxStates>({
    영어: false,
    프랑스어: false,
    독일어: false,
    일본어: false,
  })

  const [checkedStates, setCheckedStates] = useState<CheckboxStates>({
    이탈리아어: false,
    러시아어: false,
    스페인어: false,
    중국어: false,
  })

  // 체크박스 상태를 변경하는 함수
  const handleCheckLanguageChange = (event: { target: { name: any; checked: any } }) => {
    const { name, checked } = event.target
    setCheckedLanguaege((prevStates) => ({
      ...prevStates,
      [name]: checked,
    }))
  }
  const handleCheckboxChange = (event: { target: { name: any; checked: any } }) => {
    const { name, checked } = event.target
    setCheckedStates((prevStates) => ({
      ...prevStates,
      [name]: checked,
    }))
  }

  // 모든 체크박스를 해제하는 함수
  const handleUncheckAll = () => {
    setCheckedLanguaege((prevStates) => ({
      ...Object.keys(prevStates).reduce((newState: CheckboxStates, key: string) => {
        newState[key] = false // 모든 키에 대해 false 값을 할당
        return newState
      }, {}),
    }))

    setCheckedStates((prevStates) => ({
      ...Object.keys(prevStates).reduce((newState: CheckboxStates, key: string) => {
        newState[key] = false // 모든 키에 대해 false 값을 할당
        return newState
      }, {}),
    }))
  }

  return (
    <>
      <div
        className='flex grow-0 items-center w-full h-full  gap-x-2 justify-center'
        onClick={handleOpen}
      >
        {' '}
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

            {/* 침실과 침대 */}
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
                  <p className='relative left-4 text-left font-semibold text-lg'>
                    단독 또는 다세대 주택
                  </p>
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
            <div className='divide-y-2 divide-gray-400'>
              <div></div>
              <div className='mt-12 mb-12'></div>
            </div>

            {/* 편의 시설 */}
            <Typography variant='h4' className='font-semibold'>
              편의 시설
            </Typography>
            <p className='font-semibold mt-8 text-xl'>필수</p>
            <div className='grid grid-rows-3 gap-4'>
              <div className='flex gap-80'>
                <div>
                  <input
                    type='checkbox'
                    id='Internet'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='Internet' className='text-xl relative left-4 -top-2'>
                    무선 인터넷
                  </label>
                </div>
                <div className='relative right-11'>
                  <input
                    type='checkbox'
                    id='kitchen'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='kitchen' className='text-xl relative left-4 -top-2'>
                    주방
                  </label>
                </div>
              </div>

              <div className='flex gap-80'>
                <div>
                  <input
                    type='checkbox'
                    id='washing_machine'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='washing_machine' className='text-xl relative left-4 -top-2'>
                    세탁기
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='dryer'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='dryer' className='text-xl relative left-4 -top-2'>
                    건조기
                  </label>
                </div>
              </div>
              <div className='flex gap-80'>
                <div>
                  <input
                    type='checkbox'
                    id='air-conditioner'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='air-conditioner' className='text-xl relative left-4 -top-2'>
                    에어컨
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='heater'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='heater' className='text-xl relative left-4 -top-2'>
                    난방
                  </label>
                </div>
              </div>
            </div>

            {/* 편의 시설 접기 펼치기 */}
            <div>
              {foldingConvenience ? (
                <>
                  <div className='grid grid-rows-3'>
                    <div className='flex gap-64 mt-4'>
                      <div>
                        <input
                          type='checkbox'
                          id='work_space'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='work_space' className='text-xl relative left-4 -top-2'>
                          업무 전용 공간
                        </label>
                      </div>
                      <div className='-ml-2'>
                        <input
                          type='checkbox'
                          id='tv'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='tv' className='text-xl relative left-4 -top-2'>
                          TV
                        </label>
                      </div>
                    </div>
                    <div className='flex gap-64 mt-4'>
                      <div>
                        <input
                          type='checkbox'
                          id='hairdryer'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='hairdryer' className='text-xl relative left-4 -top-2'>
                          헤어드라이어
                        </label>
                      </div>
                      <div className='ml-1'>
                        <input
                          type='checkbox'
                          id='iron'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='iron' className='text-xl relative left-4 -top-2'>
                          다리미
                        </label>
                      </div>
                    </div>
                  </div>

                  <p className='font-semibold mt-8 text-xl'>특징</p>
                  <div className='grid grid-rows-3'>
                    <div className='flex gap-80'>
                      <div>
                        <input
                          type='checkbox'
                          id='swimplace'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='swimplace' className='text-xl relative left-4 -top-2'>
                          수영장
                        </label>
                      </div>
                      <div>
                        <input
                          type='checkbox'
                          id='jakuju'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='jakuju' className='text-xl relative left-4 -top-2'>
                          자쿠지 욕조
                        </label>
                      </div>
                    </div>
                    <div className='flex gap-56'>
                      <div>
                        <input
                          type='checkbox'
                          id='freepark'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='freepark' className='text-xl relative left-4 -top-2'>
                          무료 주차 공간
                        </label>
                      </div>
                      <div className='ml-6'>
                        <input
                          type='checkbox'
                          id='electriccharge'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='electriccharge' className='text-xl relative left-4 -top-2'>
                          전기차 충전시설
                        </label>
                      </div>
                    </div>
                    <div className='flex gap-72'>
                      <div>
                        <input
                          type='checkbox'
                          id='babybed'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='babybed' className='text-xl relative left-4 -top-2'>
                          아기 침대
                        </label>
                      </div>
                      <div className='ml-2'>
                        <input
                          type='checkbox'
                          id='kingSize'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='kingSize' className='text-xl relative left-4 -top-2'>
                          킹사이즈 침대
                        </label>
                      </div>
                    </div>
                    <div className='flex gap-80'>
                      <div>
                        <input
                          type='checkbox'
                          id='gym'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='gym' className='text-xl relative left-4 -top-2'>
                          헬스장
                        </label>
                      </div>
                      <div>
                        <input
                          type='checkbox'
                          id='grill'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='grill' className='text-xl relative left-4 -top-2'>
                          바비큐 그릴
                        </label>
                      </div>
                    </div>
                    <div className='flex gap-72'>
                      <div>
                        <input
                          type='checkbox'
                          id='breakfast'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='breakfast' className='text-xl relative left-4 -top-2'>
                          아침식사
                        </label>
                      </div>
                      <div className='ml-3'>
                        <input
                          type='checkbox'
                          id='innerFireplace'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='innerFireplace' className='text-xl relative left-4 -top-2'>
                          실내 벽난로
                        </label>
                      </div>
                    </div>

                    <p className='font-semibold mt-8 text-xl'>위치</p>
                    <div className='grid grid-rows-3'>
                      <div className='flex gap-80'>
                        <div>
                          <input
                            type='checkbox'
                            id='nearBeach'
                            className='mt-4  accent-black w-8 h-8'
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor='nearBeach' className='text-xl relative left-4 -top-2'>
                            해변에 인접
                          </label>
                        </div>
                        <div>
                          <input
                            type='checkbox'
                            id='nearWater'
                            className='mt-4  accent-black w-8 h-8'
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor='nearWater' className='text-xl relative left-4 -top-2'>
                            수변에 인접
                          </label>
                        </div>
                      </div>
                      <div className='flex gap-80'>
                        <div>
                          <input
                            type='checkbox'
                            id='commingWthSki'
                            className='mt-4  accent-black w-8 h-8'
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor='commingWthSki' className='text-xl relative left-4 -top-2'>
                            스키 타고 출입
                          </label>
                        </div>
                      </div>
                    </div>
                    <p className='font-semibold mt-8 text-xl'>안전</p>
                    <div className='flex gap-80'>
                      <div>
                        <input
                          type='checkbox'
                          id='fireAlarm'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='fireAlarm' className='text-xl relative left-4 -top-2'>
                          화재경보기
                        </label>
                      </div>
                      <div>
                        <input
                          type='checkbox'
                          id='carbonAlarm'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='carbonAlarm' className='text-xl relative left-4 -top-2'>
                          일산화탄소 경보기
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              <button className='text-xl font-semibold underline' onClick={useFoldingConvenience}>
                {moreButtonConvenience}
              </button>
            </div>

            {/* 예약 옵션 */}
            <div className='divide-y-2 divide-gray-400'>
              <div></div>
              <div className='mt-12 mb-12'></div>
            </div>

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
            <Typography variant='h4' className='font-semibold'>
              접근성 편의
            </Typography>

            <p className='font-semibold mt-8 text-xl'>게스트 출입구 및 주차장</p>
            <div className='grid grid-rows-3 gap-4'>
              <div className='flex gap-52'>
                <div>
                  <input
                    type='checkbox'
                    id='withoutStairThresholdEntrance'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor='withoutStairThresholdEntrance'
                    className='text-xl relative left-4 -top-2'
                  >
                    게스트 출입구에 계단이나 문턱 없음
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='eightyoneEntrance'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='eightyoneEntrance' className='text-xl relative left-4 -top-2'>
                    너비 81cm 이상의 게스트 출입구
                  </label>
                </div>
              </div>

              <div className='flex gap-72'>
                <div>
                  <input
                    type='checkbox'
                    id='withBathchairPark'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='withBathchairPark' className='text-xl relative left-4 -top-2'>
                    휠체어 접근 가능 주차 공간
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='withoutStairEntrance'
                    className='mt-4  accent-black w-8 h-8'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='withoutStairEntrance' className='text-xl relative left-4 -top-2'>
                    게스트 출입구까지 계단 없음
                  </label>
                </div>
              </div>
            </div>

            {/* 접기 펼치기 */}
            <div className='relative -top-12'>
              {foldingAccessibility ? (
                <>
                  <div className='grid grid-rows-3'>
                    <p className='font-semibold mt-8 text-xl'>침실</p>
                    <div className='flex gap-80'>
                      <div>
                        <input
                          type='checkbox'
                          id='withoutStairBedroom'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='withoutStairBedroom'
                          className='text-xl relative left-4 -top-2'
                        >
                          계단이나 문턱 없는 침실
                        </label>
                      </div>
                      <div>
                        <input
                          type='checkbox'
                          id='eightyoneBedroomEntrance'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='eightyoneBedroomEntrance'
                          className='text-xl relative left-4 -top-2'
                        >
                          너비 81cm 이상의 침실 출입구
                        </label>
                      </div>
                    </div>

                    <p className='font-semibold mt-8 text-xl'>욕실</p>
                    <div className='flex gap-80'>
                      <div>
                        <input
                          type='checkbox'
                          id='withoutStairBathroom'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='withoutStairBathroom'
                          className='text-xl relative left-4 -top-2'
                        >
                          계단이나 문턱 없는 욕실
                        </label>
                      </div>
                      <div>
                        <input
                          type='checkbox'
                          id='eightyoneBathroomEntrance'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='eightyoneBathroomEntrance'
                          className='text-xl relative left-4 -top-2'
                        >
                          너비 81cm 이상의 욕실 출입구
                        </label>
                      </div>
                    </div>
                    <div className='flex space-x-96'>
                      <div>
                        <input
                          type='checkbox'
                          id='bathroomFixedHandle'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='bathroomFixedHandle'
                          className='text-xl relative left-4 -top-2'
                        >
                          샤워실 고정 손잡이
                        </label>
                      </div>
                      <div className='relative -left-5'>
                        <input
                          type='checkbox'
                          id='toiletFixedHandle'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='toiletFixedHandle'
                          className='text-xl relative left-4 -top-2'
                        >
                          변기 옆 고정 손잡이
                        </label>
                      </div>
                    </div>
                    <div className='flex gap-80'>
                      <div>
                        <input
                          type='checkbox'
                          id='withoutStairThresoldBathroom'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='withoutStairThresoldBathroom'
                          className='text-xl relative left-4 -top-2'
                        >
                          계단이나 문턱 없는 샤워실
                        </label>
                      </div>
                      <div className='relative -left-5'>
                        <input
                          type='checkbox'
                          id='showerChair'
                          className='mt-4  accent-black w-8 h-8'
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor='showerChair' className='text-xl relative left-4 -top-2'>
                          샤워/목욕 의자
                        </label>
                      </div>
                    </div>

                    <p className='font-semibold mt-8 text-xl'>장애인용 보조 장치</p>
                    <div>
                      <input
                        type='checkbox'
                        id='lift'
                        className='mt-4  accent-black w-8 h-8'
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor='lift' className='text-xl relative left-4 -top-2'>
                        천장형 또는 이동식 리프트
                      </label>
                    </div>
                  </div>
                </>
              ) : null}
              <button
                className='text-xl font-semibold underline mt-4'
                onClick={useFoldingAccessibility}
              >
                {moreButtonAccessibility}
              </button>
            </div>

            <div className='divide-y-2 divide-gray-400'>
              <div></div>
              <div className='mt-12 mb-12'></div>
            </div>

            <Typography variant='h4' className='font-semibold'>
              호스트 언어
            </Typography>
            <div className='grid grid-cols-2 gap-5'>
              {Object.entries(checkedLanguage).map(([language, isChecked]) => (
                <div key={language}>
                  <input
                    type='checkbox'
                    id={language}
                    name={language}
                    className='relative left-2 accent-black w-8 h-8'
                    checked={isChecked}
                    onChange={handleCheckLanguageChange}
                  />
                  <label htmlFor={language} className='text-xl relative left-6 -top-2'>
                    {language}
                  </label>
                </div>
              ))}
            </div>
            {/* 접기 펼치기 */}
            <div className='relative top-12'>
              {foldingLanguage ? (
                <>
                  <div className='grid grid-cols-2 gap-5 top-20'>
                    {Object.entries(checkedStates).map(([language, isChecked]) => (
                      <div key={language}>
                        <input
                          type='checkbox'
                          id={language}
                          name={language}
                          className='relative accent-black w-8 h-8'
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor={language} className='text-xl relative left-10 -top-2'>
                          {language}
                        </label>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
              <button className='text-xl font-semibold underline' onClick={useFoldingLanguage}>
                {moreButtonLanguage}
              </button>
            </div>
          </div>

          <div className='divide-y-2 divide-gray-400 w-[1000px] -ml-10 mt-2'>
            <div></div>
            <div></div>
          </div>
          <button className='mt-6 -ml-6 text-xl font-semibold' onClick={handleUncheckAll}>
            전체 해제
          </button>
        </Box>
      </Modal>
    </>
  )
}
