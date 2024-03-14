'use client'
import Link from 'next/link'
import RightPartNavibar from '@/components/navigation/navibarComponents/rightPartNavibar'
import LogoIcon from '/public/images/naviBarIcon/logo.svg'
import HomeNavigation from '@/components/navigation/navibarComponents/homeNavigation'
import RoomSearchNavigation from '@/components/navigation/navibarComponents/roomSearchNavigation'
import { useEffect, useState } from 'react'

export default function NavigationBar() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isShrink, setIsShrink] = useState(false) // 네비게이션 바 축소 상태 관리

  // 스크롤 이벤트 리스너 함수입니다. 스크롤 시 호출됩니다.
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)

    // 스크롤 위치에 따라 네비게이션 바의 축소 상태를 변경합니다.
    if (!isShrink && position > 150) {
      // 스크롤이 아래로 내려갔을 때 축소 상태로 변경
      setIsShrink(true)
    } else if (isShrink && position < 50) {
      // 스크롤이 위로 올라갔을 때 원래 크기로 복귀
      setIsShrink(false)
    }
  }

  // 컴포넌트 마운트 시 스크롤 이벤트 리스너를 추가하고, 언마운트 시 제거합니다.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isShrink]) // 의존성 배열에 isShrink 추가

  return (
    <div
      className={`flex w-full justify-center ${isShrink ? 'sm:h-20 md:h-20 lg:h-20 xl:h-20 2xl:h-20' : 'sm:h-60 md:h-60 lg:h-40 xl:h-40 2xl:h-40'} `}
    >
      <div className='flex w-[91.16%] h-20'>
        <div className='flex w-full h-20 justify-center items-center relative'>
          {/* div 3객 묶는 구역 */}
          {/* 로그 부분 */}
          <div className='flex w-40 h-20 ml-1 items-center absolute left-0'>
            <Link className='w-[102px] h-[32px]' href='/'>
              <LogoIcon />
            </Link>
          </div>

          {/* 중간 검색 구역 */}

          <div
            className={`flex grow top-0  absolute translate(-50%, -50%) sm:flex  md:flex lg:flex xl:flex 2xl:flex ${isShrink ? 'sm:top-0 md:top-0  lg:top-0  xl:top-0  2xl:top-0' : 'sm:top-14 md:top-14  lg:top-0  xl:top-0  2xl:top-0'} `}
          >
            <div className='flex flex-col min-h-20 items-center justify-center'>
              {isShrink ? <RoomSearchNavigation /> : <HomeNavigation />}
            </div>
          </div>

          {/* 네비케이션 부분 */}
          <div className='h-20 w-[400px] flex-none flex items-center absolute right-0 '>
            <div className='inline-flexv w-full h-full flex flex-row justify-end items-center'>
              <RightPartNavibar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
