'use client'

import PlusMinus from '/public/images/plusMinus.svg'
import Calender from '@/components/navigation/navibarButtons/calender'
import { useState } from 'react'

interface Props {
  calenderOpen: boolean
}
export default function CalenderMenu({ calenderOpen }: Props) {
  const [menuButton, setMenuButton] = useState(0)
  return (
    <>
      {calenderOpen && (
        <div
          className={`flex items-center justify-center absolute top-[200px] right-0 z-10 mt-2 w-[845px] h-[555px] origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex={-1}
        >
          <div className='w-[784px] h-[441px] p-8 gap-y-10 flex flex-col items-center justify-center'>
            <div
              className={` flex flex-row w-[311px] h-[44px] items-center px-2 justify-between grid-cols-3 gap-x-3 rounded-full bg-navigatorOneLayoutColor `}
            >
              <button
                className='px-2 py-1 rounded-full border border-MainGray focus:bg-white'
                onClick={() => setMenuButton(1)}
              >
                날짜 지정
              </button>
              <button
                className='px-3 py-1 rounded-full border border-MainGray focus:bg-white'
                onClick={() => setMenuButton(2)}
              >
                월 단위
              </button>
              <button
                className='px-3 py-1 rounded-full border border-MainGray focus:bg-white'
                onClick={() => setMenuButton(3)}
              >
                유연한 일정
              </button>
            </div>
            <div className='w-[1564px] h-[393px] flex items-center justify-center'>
              <Calender />
            </div>
            <div className='w-[801px] h-[48px] flex flex-row gap-x-5 justify-start pl-8 items-center'>
              <button className='h-[32px] text-wrap text-xs border border-mainGray rounded-full flex itmes-center p-2'>
                정확한 날짜
              </button>
              <button className='h-[32px] text-wrap text-xs border border-mainGray rounded-full flex itmes-center p-2'>
                <PlusMinus /> 1일
              </button>
              <button className='h-[32px] text-wrap text-xs border border-mainGray rounded-full flex itmes-center p-2'>
                <PlusMinus /> 2일
              </button>
              <button className='h-[32px] text-wrap text-xs border border-mainGray rounded-full flex itmes-center p-2'>
                <PlusMinus /> 3일
              </button>
              <button className='h-[32px] text-wrap text-xs border border-mainGray rounded-full flex itmes-center p-2'>
                <PlusMinus /> 7일
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
