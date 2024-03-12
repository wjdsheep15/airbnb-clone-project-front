'use client'

import { useEffect, useState } from 'react'
import Minus from '/public/images/naviBarIcon/minus.svg'
import Plus from '/public/images/naviBarIcon/plus.svg'
import PetModal from '@/components/navigation/modal/petModal'
import { Person, PersonType } from '@/components/navigation/navibarComponents/homeNavigation'

interface Props {
  activeButton: number
  isMenuOpen: boolean
  setIsMenuOpen: (newValue: boolean) => void

  person: Person
  setPerson: (person: PersonType) => { plus: () => void; minus: () => void }
}

export default function GestNumber({
  activeButton,
  isMenuOpen,
  setIsMenuOpen,
  person,
  setPerson,
}: Props) {
  const [petModelOpen, setPetModalOpen] = useState(false)
  const closeModalHandler = () => {
    setPetModalOpen(!petModelOpen)
  }

  let gestNumberSum = person.adult + person.child

  useEffect(() => {
    if (activeButton != 4) {
      setIsMenuOpen(false)
    }
  }, [activeButton])

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
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${person.adult === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (person.adult !== 0) setPerson('adult').minus()
                  }}
                  disabled={person.adult === 0}
                >
                  <Minus />
                </button>

                <span className='w-[25px] flex justify-center'>
                  {person.adult === 16 ? '16+' : person.adult}
                </span>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${person.adult === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (gestNumberSum !== 16) setPerson('adult').plus()
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
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${person.child === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (person.child !== 0) setPerson('child').minus()
                  }}
                  disabled={person.child === 0}
                >
                  <Minus />
                </button>

                <span className='w-[25px] flex justify-center'>
                  {person.child === 15 ? '15' : person.child}
                </span>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${person.child === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (gestNumberSum !== 16) setPerson('child').plus()
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
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${person.baby === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (person.baby !== 0) setPerson('baby').minus()
                  }}
                  disabled={person.baby === 0}
                >
                  <Minus />
                </button>

                <span className='w-[25px] flex justify-center'>
                  {person.baby === 5 ? '5' : person.baby}
                </span>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${person.baby === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (person.baby !== 5) setPerson('baby').plus()
                  }}
                  disabled={person.baby === 5}
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
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${person.pet === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (person.pet !== 0) setPerson('pet').minus()
                  }}
                  disabled={person.pet === 0}
                >
                  <Minus />
                </button>

                <span className='w-[25px] flex justify-center '>{person.pet}</span>
                <button
                  className={`rounded-full  border p-2 hover:border-black hover:text-black  ${person.pet === 0 ? 'border-gray-200  text-gray-200' : 'border-mainGray  text-mainGray '}`}
                  onClick={() => {
                    if (person.pet !== 5) setPerson('pet').plus()
                  }}
                  disabled={person.pet === 5}
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
