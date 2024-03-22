import Link from 'next/link'
import LogoIcon from '/public/images/naviBarIcon/logo.svg'
import RightPartNavibar from '@/components/navigation/navibarComponents/rightPartNavibar'

export default function NavigationBar() {
  return (
    <div className='flex w-full h-20 justify-center border border-gray-100 sticky top-0 bg-white hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex'>
      <div className='flex w-10/12 h-20 '>
        <div className='flex w-full h-20 fixed top-0 justify-center items-center relative'>
          {/* div 3객 묶는 구역 */}
          {/* 로그 부분 */}
          <div className='flex w-40 h-20 items-center absolute left-16'>
            <Link className='w-[102px] h-[32px]' href='/'>
              <LogoIcon />
            </Link>
          </div>

          {/* 중간 검색 구역 */}

          <div className='min-h-20 max-h-40  px-19 grow flex  justify-center items-center absolute translate(-50%, -50%)'></div>

          {/* 네비케이션 부분 */}
          <div className='h-20 w-[400px] flex-none flex items-center justify-center absolute right-0'>
            <div className='inline-flexv w-full h-full flex flex-row justify-end items-center'>
              <RightPartNavibar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
