'use client'
import FillterIcon from '/public/images/fillter.svg'
import SearchIcon from '/public/images/naviBarIcon/searchIcon.svg'

export default function SmNavibar() {
  return (
    <>
      <div className='flex flex-row w-full px-6 pt-3 items-center gap-2'>
        {/* 메뉴 */}
        <button className='flex flex-row grow w-full h-14 items-center rounded-full border border-gray-200  shadow-lg'>
          <div className='flex w-14 h-14 items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              aria-hidden='true'
              role='presentation'
              focusable='false'
              className=' block h-[20px] w-[20px] fill-black'
            >
              <path d='M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z'></path>
            </svg>
          </div>
          <div className='h-14 w-full grow flex flex-col'>
            <span className='justify-start flex pt-2'>어디든지 게스트</span>
            <span className='text-xs text-mainGray justify-start flex'>언제든지 • 게스트 추가</span>
          </div>
        </button>

        {/* 필터 */}
        <button className='w-10 h-10 grow rounded-full border border-mainGray flex items-center justify-center'>
          <FillterIcon />
        </button>
      </div>
    </>
  )
}
