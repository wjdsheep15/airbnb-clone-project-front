'use client'
import OnSearchButton from '@/components/navigation/navibarButtons/onSearchButton'
import SearchButton from '@/components/navigation/navibarButtons/searchButton'
import { useEffect, useRef, useState } from 'react'
import GestNumber from '@/components/navigation/navibarButtons/gestNumber'
import CloseIcon from '/public/svgIcons/CloseIcon.svg'
import CalenderMenu from '@/components/navigation/navibarButtons/calenderMenu'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

export default function HomeNavigation() {
  const buttonsizeboolen = true
  const [searchButtonHover, setSearchButtonHover] = useState(false)
  const [activeButton, setActiveButton] = useState(0)
  const [topActivityMenu, setTopActivityMenu] = useState(true)
  const ref = useRef<any>(null)
  const [inputValue, setInputValue] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [gestNumber, setGestNumber] = useState(0)
  const [childNumber, setChildNumber] = useState(0)
  const [petNumber, setPetNumber] = useState(0)
  const [babyNumber, setbabyNumber] = useState(0)

  const [calenderOpen, setCalenderOpen] = useState(false)
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  }
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  let gestSum = gestNumber + childNumber

  const handleCalender = () => {
    setRange(defaultSelected)
  }
  const handleNumber = () => {
    setGestNumber(0)
    setChildNumber(0)
    setPetNumber(0)
    setbabyNumber(0)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActiveButton(0)
        setIsMenuOpen(false)
        setCalenderOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div className='flex flex-col h-40 mt-4 mr-3'>
      <div className='flex flex-row h-20 justify-center items-center' role='group'>
        <button
          type='button'
          className={`px-4 h-8 p-3 text-gray-900 flex items-center rounded-full ${
            topActivityMenu ? 'hover:bg-inherit' : 'hover:bg-gray-100'
          }`}
          onClick={() => setTopActivityMenu(true)}
        >
          <span className={`${topActivityMenu ? 'text-black' : 'text-gray-400'}`}>숙소</span>
        </button>

        <button
          type='button'
          className={`px-4 h-8 text-gray-900 rounded-full  ${
            topActivityMenu ? 'hover:bg-gray-100' : 'hover:bg-inherit'
          }`}
          onClick={() => setTopActivityMenu(false)}
        >
          <span className={`${topActivityMenu ? 'text-gray-400' : 'text-black'}`}>체험</span>
        </button>
        <button type='button' className='px-4 h-8 text-gray-900 rounded-full'>
          온라인 체험
        </button>
      </div>

      {/* 두번쨰 버튼층 */}
      <div className={`flex flex-row h-[79px] justify-center items-center pb-3`}>
        <div
          className={`border border-gray-300 rounded-full shadow-lg flex h-full items-center  ${
            activeButton ? 'bg-navigatorOneLayoutColor' : ''
          }`}
          ref={ref}
        >
          <button
            className={`h-full w-[282px] rounded-full flex flex-col pl-4 pt-3 pb-3 group ${
              activeButton === 1
                ? 'bg-white border border-gray-300 shadow'
                : 'hover:bg-navigatorTwoLayoutColor'
            }`}
            onClick={() => setActiveButton(1)}
          >
            <span className='text-xs ml-4'>여행지</span>
            <input
              placeholder='여행지 검색'
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`text-sm mt-1 ml-4 w-52 bg-inherit group-focus:active focus:outline-none text-gray-400 ${
                activeButton === 1 ? 'active' : ''
              }`}
            />
          </button>
          <span
            className={`text-xl ${
              activeButton === 1 ||
              activeButton === 2 ||
              (topActivityMenu === false && activeButton === 3)
                ? 'text-gray-200'
                : 'text-gray-300 '
            }`}
          >
            |
          </span>
          <div
            className={`h-full w-72 flex flex-row items-center ${topActivityMenu ? '' : 'hidden'}`}
          >
            <button
              className={`h-full w-36 rounded-full flex flex-col pl-4 pt-3 pb-3 ${
                activeButton === 2
                  ? 'bg-white border border-gray-300 shadow'
                  : 'hover:bg-navigatorTwoLayoutColor'
              }`}
              onClick={() => {
                setActiveButton(2)
                setCalenderOpen(true)
              }}
            >
              {/* 체크인 */}
              <div className='w-full h-full grid grid-cols-3 grid-rows-2'>
                <span className='text-xs flex justify-start col-span-2'>체크인</span>
                <div
                  className={`rounded-full row-span-2 flex items-center  ${activeButton === 2 ? '' : 'hidden'}`}
                  onClick={handleCalender}
                >
                  <CloseIcon className={`flex items-center rounded-full  `} />
                </div>
                <span
                  className={`text-sm  col-span-2 flex justify-start ${range?.from ? 'text-black' : 'text-gray-400'} `}
                >
                  {range?.from ? format(range.from, 'MMM dd') : '날짜 추가'}
                </span>
              </div>
            </button>
            <span
              className={`text-lg ${
                activeButton === 2 || activeButton === 3 ? 'text-gray-200' : 'text-gray-300 '
              }`}
            >
              |
            </span>
            <button
              className={`h-full w-36 rounded-full flex flex-col pl-4 pt-3 pb-3 ${
                activeButton === 3
                  ? 'bg-white border border-gray-300 shadow'
                  : 'hover:bg-navigatorTwoLayoutColor'
              }`}
              onClick={() => {
                setActiveButton(3)
                setCalenderOpen(true)
              }}
            >
              {/* 체크 아웃 */}
              <div className='w-full h-full grid grid-cols-3 grid-rows-2'>
                <span className='text-xs flex justify-start col-span-2'>체크아웃</span>
                <div
                  className={`rounded-full row-span-2 flex items-center  ${activeButton === 3 ? '' : 'hidden'}`}
                  onClick={handleCalender}
                >
                  <CloseIcon className={`flex items-center rounded-full  `} />
                </div>
                <span
                  className={`text-sm col-span-2 flex justify-start ${range?.to ? 'text-black' : 'text-gray-400'} `}
                >
                  {range?.to ? format(range.to, 'MMM dd') : '날짜 추가'}
                </span>
              </div>
            </button>
          </div>
          <div
            className={`h-full w-72 flex flex-row items-center ${topActivityMenu ? 'hidden' : ''}`}
          >
            <button
              className={`h-full w-full rounded-full flex flex-col pl-4 pt-3 pb-3 ${
                activeButton === 3
                  ? 'bg-white border border-gray-300 shadow'
                  : 'hover:bg-navigatorTwoLayoutColor'
              }`}
              onClick={() => {
                setActiveButton(3)
              }}
            >
              <span className='text-xs'>날짜</span>
              <span className='text-sm mt-1 text-gray-400'>날짜 추가</span>
            </button>
          </div>
          {/* 날짜 선택 메뉴*/}

          <div ref={ref}>
            <CalenderMenu
              range={range}
              setRange={setRange}
              activeButton={activeButton}
              calenderOpen={calenderOpen}
              setCalenderOpen={setCalenderOpen}
            />
          </div>
          {/* 날짜 선택 끝 */}

          <span
            className={`text-lg ${
              activeButton === 3 || activeButton === 4 ? 'text-gray-200' : 'text-gray-300'
            }`}
          >
            |
          </span>

          <div className='flex flex-row h-full w-64 items-center rounded-full pt-3 pb-3 relative'>
            {/* 첫 번째 버튼 그룹 - 여행자 메뉴 */}
            <button
              className={`flex-grow pt-1 pb-1 pl-3 flex rounded-full group ${
                activeButton === 4
                  ? 'bg-white border border-gray-300 shadow'
                  : 'hover:bg-navigatorTwoLayoutColor'
              }`}
              onClick={() => {
                setActiveButton(4)
                setIsMenuOpen(!isMenuOpen)
              }}
              id='menu-button'
            >
              {/* gestNumber grid */}
              <span
                className={`flex ml-1 flex-col mb-1 w-[70%] h-full grid grid-cols-4 grid-rows-2  ${
                  activeButton === 4
                    ? 'group-hover:bg-white'
                    : 'group-hover:bg-navigatorTwoLayoutColor'
                }`}
              >
                <span className={`text-xs flex pt-3 justify-start col-span-3`}>여행자</span>
                <div
                  className={`rounded-full mr-2 row-span-2 flex items-center  ${activeButton === 0 ? 'hidden' : ''}`}
                  onClick={handleNumber}
                >
                  <CloseIcon
                    className={`flex items-center rounded-full  ${gestSum === 0 ? 'text-transparent hover:none' : 'hover:bg-navigatorOneLayoutColor'}`}
                  />
                </div>

                <span
                  className={`text-sm mt-1 w-full line-clamp-1 text-nowrap  flex justify-start col-span-3 ${gestSum === 0 ? 'text-gray-400' : 'text-black'}`}
                >
                  게스트 {gestSum === 0 ? '추가' : gestSum + ','} {gestSum === 16 ? ' 이상' : ''}
                  {babyNumber === 0 ? '' : ' 유아 ' + babyNumber + '명'}
                  {petNumber === 0 ? '' : ', 반려동물 ' + petNumber + '마리'}
                </span>
              </span>
            </button>

            {/* 게스트 버튼 끝 */}
            <div ref={ref}>
              <GestNumber
                activeButton={activeButton}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                gestNumber={gestNumber}
                setGestNumber={setGestNumber}
                petNumber={petNumber}
                setPetNumber={setPetNumber}
                babyNumber={babyNumber}
                setbabyNumber={setbabyNumber}
                childNumber={childNumber}
                setChildNumber={setChildNumber}
              />
            </div>
            <div className='absolute right-3 '>
              <div
                className={`${activeButton === 0 ? '' : 'hidden'}`}
                onMouseEnter={() => {
                  setSearchButtonHover(true)
                }}
                onMouseLeave={() => {
                  setSearchButtonHover(false)
                }}
              >
                <SearchButton
                  buttonsizeboolen={buttonsizeboolen}
                  searchButtonHover={searchButtonHover}
                />
              </div>
              <div className={`${activeButton === 0 ? 'hidden' : ''}`}>
                <OnSearchButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
