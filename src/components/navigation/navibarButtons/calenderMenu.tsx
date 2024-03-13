'use client'

import PlusMinus from '/public/images/plusMinus.svg'
import Calender from '@/components/navigation/navibarButtons/calender'
import { useState, useEffect } from 'react'

interface Props {
  range: any
  setRange: any
  calenderOpen: boolean
  setCalenderOpen: (newValue: boolean) => void
  activeButton: number
  setPlusDate: (newValue: string) => void
  setPlusDateClick: (newValue: number) => void
  plusdateClick: number
}
export default function CalenderMenu({
  calenderOpen,
  setCalenderOpen,
  activeButton,
  range,
  setRange,
  setPlusDate,
  setPlusDateClick,
  plusdateClick,
}: Props) {
  const [menuButton, setMenuButton] = useState(1)

  useEffect(() => {
    if (activeButton === 1 || activeButton === 4) {
      setCalenderOpen(false)
    }
  }, [activeButton])
  return (
    <>
      {calenderOpen && (
        <div
          className={`flex items-center justify-center absolute top-[153px] right-0 z-10  w-[740px] h-[555px] origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex={-1}
        >
          <div className='relative w-[740px] h-[441px] flex flex-col flex-between items-center justify-center'>
            <div
              className={`absolute top-0  flex flex-row w-[311px] py-1 h-[44px] items-center px-2 justify-between grid-cols-3 gap-x-3 rounded-full bg-navigatorOneLayoutColor `}
            >
              <button
                className={`px-3 py-1 rounded-full border ${menuButton === 1 ? ' border-MainGray bg-white' : 'border-navigatorOneLayoutColor'}  `}
                onClick={() => setMenuButton(1)}
              >
                날짜 지정
              </button>
              <button
                className={`px-3 py-1 rounded-full border ${menuButton === 2 ? ' border-MainGray bg-white' : 'border-navigatorOneLayoutColor'}  `}
                onClick={() => setMenuButton(2)}
              >
                월 단위
              </button>
              <button
                className={`px-3 py-1 rounded-full border ${menuButton === 3 ? ' border-MainGray bg-white' : 'border-navigatorOneLayoutColor'} `}
                onClick={() => setMenuButton(3)}
              >
                유연한 일정
              </button>
            </div>

            {/* 중간 */}
            <div className='absolute top-3 w-full h-full flex items-center justify-center'>
              <div className={` ${menuButton === 1 ? '' : 'hidden'}`}>
                <Calender range={range} setRange={setRange} />
              </div>
            </div>

            {/* 끝 */}
            <div className='absolute bottom-0 left-9 w-[740px] h-[48px] flex flex-row gap-x-5 justify-start pl-8 items-center'>
              <button
                className={`h-[32px] text-wrap text-xs border rounded-full flex itmes-center p-2 ${plusdateClick === 0 ? 'border-2 border-black' : 'border-gray-200'}`}
                onClick={() => {
                  setPlusDateClick(0)
                }}
              >
                정확한 날짜
              </button>
              <button
                className={`h-[32px] text-wrap text-xs border rounded-full flex itmes-center p-2 ${plusdateClick === 1 ? 'border-2 border-black' : 'border-gray-200'}`}
                onClick={() => {
                  setPlusDate('±1')
                  setPlusDateClick(1)
                }}
              >
                <PlusMinus /> 1일
              </button>
              <button
                className={`h-[32px] text-wrap text-xs border rounded-full flex itmes-center p-2 ${plusdateClick === 2 ? 'border-2 border-black' : 'border-gray-200'}`}
                onClick={() => {
                  setPlusDate('±2')
                  setPlusDateClick(2)
                }}
              >
                <PlusMinus /> 2일
              </button>
              <button
                className={`h-[32px] text-wrap text-xs border rounded-full flex itmes-center p-2 ${plusdateClick === 3 ? 'border-2 border-black' : 'border-gray-200'}`}
                onClick={() => {
                  setPlusDate('±3')
                  setPlusDateClick(3)
                }}
              >
                <PlusMinus /> 3일
              </button>
              <button
                className={`h-[32px] text-wrap text-xs border rounded-full flex itmes-center p-2 ${plusdateClick === 4 ? 'border-2 border-black' : 'border-gray-200'}`}
                onClick={() => {
                  setPlusDate('±7')
                  setPlusDateClick(4)
                }}
              >
                <PlusMinus /> 7일
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
