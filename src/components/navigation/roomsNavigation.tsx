import Link from 'next/link'
import Logo from '@/components/navigation/logo'
import LanguageImage from '@/components/navigation/languageImage'
import MenuImage from '@/components/navigation/menuImage'
import UserNavigationImge from '@/components/navigation/userNavigationImage'
import RoomSearchNavigation from '@/components/navigation/roomSearchNavigation'
import { useEffect, useRef, useState } from 'react'

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
    <div className='flex w-full h-20 justify-center items-center border border-gray-100'>
      <div className='flex w-9/12 h-20 '>
        <div className='flex w-full h-20  justify-center items-center relative'>
          {/* div 3객 묶는 구역 */}
          {/* 로그 부분 */}
          <div className='flex w-40 h-20 ml-2 items-center absolute left-16'>
            <Link className='w-[102px] h-[32px]' href='/'>
              <Logo />
            </Link>
          </div>

          {/* 중간 검색 구역 */}

          <div className='h-20 w-84 grow flex justify-center items-center absolute translate(-50%, -50%)'>
            <RoomSearchNavigation />
          </div>

          {/* 네비케이션 부분 */}
          <div className='h-20 w-100 mr-2 flex-none flex items-center justify-center absolute right-20 top-1'>
            <div className='inline-flexv w-full flex flex-row justify-center'>
              <div className='items-center justify-center py-2 mt-1'>
                <button className='px-3 text-sm text-black rounded-full hover:bg-gray-100 pb-3'>
                  당신의 공간을 에어비엔비하세요
                </button>
              </div>
              <div className='items-center  justify-center pt-1 mt-1'>
                <button className='px-2 py-2 rounded-full hover:bg-gray-100 text-black'>
                  <LanguageImage />
                </button>
              </div>
              <div className='items-center justify-center ml-3'>
                <button className='h-[48px] w-[86px] mb-3 items-center flex flex-row border border-gray-300 rounded-full text-black shadow hover:shadow-lg'>
                  <MenuImage />
                  <UserNavigationImge />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
