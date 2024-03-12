'use client'

import { useEffect, useState } from 'react'
import Minus from '/public/images/naviBarIcon/minus.svg'
import Plus from '/public/images/naviBarIcon/plus.svg'
import PetModal from '@/components/navigation/modal/petModal'

interface Props {
  activeButton: number
  isMenuOpen: boolean
  setIsMenuOpen: (newValue: boolean) => void
  gestNumber: number
  setGestNumber: (newValue: number) => void
  petNumber: number
  setPetNumber: (newValue: number) => void
  babyNumber: number
  setbabyNumber: (newValue: number) => void
  childNumber: number
  setChildNumber: (newValue: number) => void
}

export default function GestNumber({
  activeButton,
  isMenuOpen,
  setIsMenuOpen,
  gestNumber,
  setGestNumber,
  petNumber,
  setPetNumber,
  babyNumber,
  setbabyNumber,
  childNumber,
  setChildNumber,
}: Props) {
  const [petModelOpen, setPetModalOpen] = useState(false)
  const closeModalHandler = () => {
    setPetModalOpen(!petModelOpen)
  }

  let gestNumberSum = 0
  useEffect(() => {
    if (activeButton != 4) {
      setIsMenuOpen(false)
    }
    if ((childNumber > 0 || babyNumber > 0 || petNumber > 0) && gestNumber === 0) {
      setGestNumber(gestNumber + 1)
    }
    gestNumber = childNumber + gestNumber
  }, [gestNumber, babyNumber, childNumber, petNumber, activeButton])

  return (
    <>
      {isMenuOpen && (
        <div
          className='absolute top-16 right-0 z-10 mt-2 w-[406px] h-[395px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex={-1}
        >
          <div
            className='block px-4 py-2 w-full text-sm'
            role='menuitem'
            tabIndex={-1}
            id='menu-item-0'
          >
            <div className='w-full h-[91px] items-center flex flex-row justify-between'>
              <span className='text-base'>
                성인
                <br />
                <span className='text-sm text-mainGray'>13세 이상</span>
              </span>
              <div className='flex flex-row items-center gap-x-2'>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${gestNumber === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (gestNumber !== 0) setGestNumber(gestNumber - 1)
                  }}
                  disabled={gestNumber === 0}
                >
                  <Minus />
                </button>

                <span className='w-[25px] flex justify-center'>
                  {gestNumber === 16 ? '16+' : gestNumber}
                </span>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${gestNumber === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (gestNumberSum !== 16) setGestNumber(gestNumber + 1)
                  }}
                  disabled={gestNumberSum === 16}
                >
                  <Plus />
                </button>
              </div>
            </div>
            <hr />
            <div className='w-full h-[91px] items-center flex flex-row justify-between'>
              <span className='text-base'>
                어린이
                <br />
                <span className='text-sm text-mainGray'>2~12세</span>
              </span>
              <div className='flex flex-row items-center gap-x-2'>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${childNumber === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (childNumber !== 0) setChildNumber(childNumber - 1)
                  }}
                  disabled={childNumber === 0}
                >
                  <Minus />
                </button>

                <span className='w-[25px] flex justify-center'>
                  {childNumber === 15 ? '15' : childNumber}
                </span>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${childNumber === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (gestNumberSum !== 16) setChildNumber(childNumber + 1)
                  }}
                  disabled={gestNumberSum === 16}
                >
                  <Plus />
                </button>
              </div>
            </div>
            <hr />
            <div className='w-full h-[91px] items-center flex flex-row justify-between'>
              <span className='text-base'>
                유아
                <br />
                <span className='text-sm text-mainGray'>2세 미만</span>
              </span>
              <div className='flex flex-row items-center gap-x-2'>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${babyNumber === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (babyNumber !== 0) setbabyNumber(babyNumber - 1)
                  }}
                  disabled={babyNumber === 0}
                >
                  <Minus />
                </button>

                <span className='w-[25px] flex justify-center'>
                  {babyNumber === 5 ? '5' : babyNumber}
                </span>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${babyNumber === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (babyNumber !== 5) setbabyNumber(babyNumber + 1)
                  }}
                  disabled={babyNumber === 5}
                >
                  <Plus />
                </button>
              </div>
            </div>
            <hr />

            <div className='w-full h-[91px] items-center flex flex-row justify-between'>
              <span className='text-base'>
                반려동물
                <br />
                <span
                  className='text-sm text-mainGray underline'
                  onClick={() => {
                    setPetModalOpen(!petModelOpen)
                  }}
                >
                  보조동물을 동반하시나요?
                </span>
              </span>
              <div className='flex flex-row items-center gap-x-2'>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${petNumber === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (petNumber !== 0) setPetNumber(petNumber - 1)
                  }}
                  disabled={petNumber === 0}
                >
                  <Minus />
                </button>

                <span className='w-[25px] flex justify-center '>{petNumber}</span>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${petNumber === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (petNumber !== 5) setPetNumber(petNumber + 1)
                  }}
                  disabled={petNumber === 5}
                >
                  <Plus />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <PetModal petModelOpen={petModelOpen} closeModalHandler={closeModalHandler} />
    </>
  )
}
