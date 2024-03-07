'use client'
import Link from 'next/link'
import LogoIcon from '/public/images/naviBarIcon/logo.svg'
import RoomSearchNavigation from '@/components/navigation/navibarComponents/roomSearchNavigation'
import { useEffect, useRef, useState } from 'react'
import HomeNavigation from '@/components/navigation/navibarComponents/homeNavigation'
import RightPartNavibar from '@/components/navigation/navibarComponents/rightPartNavibar'

export default function NavigationBar() {
  const [buttonClick, setButtonClick] = useState(false)

  const ref = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setButtonClick(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div className='md:w-[800px] lg:w-[1250px]'>
      <div
        className={`flex w-full ${
          buttonClick ? 'h-40' : 'h-20'
        } justify-center`}
      >
        <div className='flex w-full h-20'>
          <div className='flex w-full h-20 justify-center relative'>
            {/* div 3객 묶는 구역 */}
            {/* 로그 부분 */}
            <div className='flex w-40 h-20 ml-2 items-center absolute left-16'>
              <Link className='w-[102px] h-[32px]' href='/'>
                <LogoIcon />
              </Link>
            </div>

            {/* 중간 검색 구역 */}

            <div
              className='h-20 w-84 grow flex justify-center items-center absolute translate(-50%, -50%)'
              onClick={() => {
                setButtonClick(true)
              }}
              ref={ref}
            >
              <div className={`${buttonClick === true ? 'hidden' : ''}`}>
                <RoomSearchNavigation />
              </div>
              <div className={`${buttonClick === false ? 'hidden' : ''} mt-16`}>
                <HomeNavigation />
              </div>
            </div>

            {/* 네비케이션 부분 */}
            <div className='h-20 w-[400px] flex-none flex items-center justify-center absolute right-0'>
              <div className='inline-flexv w-full h-full flex flex-row justify-end items-center pr-20'>
                <RightPartNavibar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
