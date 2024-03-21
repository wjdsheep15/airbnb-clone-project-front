'use client'
import OnSearchButton from '@/components/navigation/navibarButtons/onSearchButton'
import SearchButton from '@/components/navigation/navibarButtons/searchButton'
import { useEffect, useRef, useState } from 'react'
import GestNumber from '@/components/navigation/navibarButtons/gestNumber'
import CloseIcon from '/public/svgIcons/closeIcon.svg'
import { format } from 'date-fns'

import { ko } from 'date-fns/locale'
import CalendarMenu from '@/components/navigation/navibarButtons/calendarMenu'
import TravelDesButton from '@/components/navigation/navibarButtons/travelDesButton'
import OneLayerNavibar from '@/components/navigation/navibarComponents/oneLayerNavibar'
import useCalendarLogic from '@/components/navigation/navibarButtons/calendarUseHook'

export type PersonType = 'adult' | 'child' | 'baby' | 'pet'

export interface Person {
  adult: number
  child: number
  baby: number
  pet: number
}
// named type ->
export default function HomeNavigation() {
  const ref = useRef<any>(null)
  const buttonsizeboolen = true

  const [searchButtonHover, setSearchButtonHover] = useState(false)
  const [activeButton, setActiveButton] = useState(0)
  const [topActivityMenu, setTopActivityMenu] = useState(true)

  const [inputValue, setInputValue] = useState('')

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // 2nd refactoring
  const [person, setPerson] = useState<Person>({
    adult: 0,
    child: 0,
    baby: 0,
    pet: 0,
  })

  const personSetter = (type: PersonType) => {
    return {
      plus: () => {
        const newperson = { ...person }
        if (type !== 'adult' && newperson.adult === 0) {
          newperson.adult += 1
        }
        newperson[type] += 1
        setPerson(newperson)
      },
      minus: () => {
        const newperson = { ...person }
        newperson[type] -= 1
        setPerson(newperson)
      },
    }
  }

  //달력 로직
  const {
    calendarOpen,
    setCalendarOpen,
    range,
    setRange,
    plusDate,
    setPlusDate,
    plusDateClick,
    setPlusDateClick,
    handleCalendar,
  } = useCalendarLogic()

  const handleNumber = () => {
    const resetNumber = { adult: 0, child: 0, baby: 0, pet: 0 }

    setPerson(resetNumber)
  }

  // 4개의 버튼을 다닫는 로직
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActiveButton(0)
        setIsMenuOpen(false)
        setCalendarOpen(false)
      }
    }
    if (inputValue.length != 0) {
      setIsOpen(false)
      setActiveButton(2)
      setCalendarOpen(true)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputValue])

  return (
    <div className='flex flex-col h-40'>
      <OneLayerNavibar topActivityMenu={topActivityMenu} setTopActivityMenu={setTopActivityMenu} />

      {/* 두번쨰 버튼층 */}
      <div className={`flex flex-row h-[79px] justify-center items-center pb-3`}>
        <div
          className={`border border-gray-300 rounded-full shadow-lg flex h-full items-center  ${
            activeButton ? 'bg-navigatorOneLayoutColor' : ''
          }`}
          ref={ref}
        >
          <button
            className={`h-full w-[282px] rounded-full relative flex flex-col pl-4 pt-3 pb-3 group ${
              activeButton === 1
                ? 'bg-white border border-gray-300 shadow'
                : 'hover:bg-navigatorTwoLayoutColor'
            }`}
            onClick={() => {
              setActiveButton(1)
              setIsOpen(!isOpen)
            }}
          >
            <span className='text-xs ml-4'>여행지</span>

            <input
              placeholder='여행지 검색'
              type='text'
              value={inputValue}
              onChange={(e) => inputValue}
              className={`text-sm mt-1 ml-4 w-52 bg-inherit group-focus:active focus:outline-none  ${
                activeButton === 1 ? 'active' : ''
              } ${inputValue.length != 0 ? 'text-black' : 'text-gray-400'} `}
            />
            <TravelDesButton
              setInputValue={setInputValue}
              activeButton={activeButton}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <div
              className={`rounded-full absolute  right-5 top-6 row-span-2 flex items-center  ${activeButton === 1 ? '' : 'hidden'}`}
              onClick={() => {
                setInputValue('')
              }}
            >
              <CloseIcon className={`flex items-center rounded-full  `} />
            </div>
          </button>

          <span
            className={`text-xl ${
              activeButton === 1 ||
              activeButton === 2 ||
              (topActivityMenu === false && activeButton === 3)
                ? 'text-navigatorOneLayoutColor'
                : 'text-navigatorOneLayoutColor '
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
                setCalendarOpen(true)
              }}
            >
              {/* 체크인 */}
              <div className='w-full h-full grid grid-cols-3 grid-rows-2'>
                <span className='text-xs flex justify-start col-span-2'>체크인</span>
                <div
                  className={`rounded-full row-span-2 flex items-center  ${activeButton === 2 ? '' : 'hidden'}`}
                  onClick={handleCalendar}
                >
                  <CloseIcon className={`flex items-center rounded-full  `} />
                </div>
                <span
                  className={`text-sm  col-span-2 flex justify-start ${range?.from ? 'text-black' : 'text-gray-400'} `}
                >
                  {range?.from
                    ? format(range.from, 'MMM dd', { locale: ko }) + '일 ' + plusDate
                    : '날짜 추가'}
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
                setCalendarOpen(true)
              }}
            >
              {/* 체크 아웃 */}
              <div className='w-full h-full grid grid-cols-3 grid-rows-2'>
                <span className='text-xs flex justify-start col-span-2'>체크아웃</span>
                <div
                  className={`rounded-full row-span-2 flex items-center  ${activeButton === 3 ? '' : 'hidden'}`}
                  onClick={handleCalendar}
                >
                  <CloseIcon className={`flex items-center rounded-full  `} />
                </div>
                <span
                  className={`text-sm col-span-2 flex justify-start ${range?.to ? 'text-black' : 'text-gray-400'} `}
                >
                  {range?.to
                    ? format(range.to, 'MMM dd', { locale: ko }) + '일 ' + plusDate
                    : '날짜 추가'}
                </span>
              </div>
            </button>
          </div>
          <div
            className={`h-full w-72 flex flex-row items-center ${topActivityMenu ? 'hidden' : ''}`}
            onClick={() => {
              setCalendarOpen(true)
            }}
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
              <div className='w-full h-full grid grid-cols-3 grid-rows-2'>
                <span className='text-xs flex justify-start col-span-2'>날짜</span>
                <div
                  className={`rounded-full flex items-center justify-end pr-3 row-span-2  ${activeButton === 3 ? '' : 'hidden'}`}
                  onClick={handleCalendar}
                >
                  <CloseIcon className={`flex items-center rounded-full  `} />
                </div>
                <span
                  className={`text-sm col-span-2 flex justify-start ${range?.from ? 'text-black' : 'text-gray-400'}`}
                >
                  {range?.from ? format(range.from, 'MMM dd', { locale: ko }) + '일 ' : '날짜 추가'}{' '}
                  {range?.to
                    ? '- ' + format(range.to, 'MMM dd', { locale: ko }) + '일 ' + plusDate
                    : ''}
                </span>
              </div>
            </button>
          </div>
          {/* 날짜 선택 메뉴*/}

          <div ref={ref}>
            <CalendarMenu
              range={range}
              setRange={setRange}
              activeButton={activeButton}
              calendarOpen={calendarOpen}
              setCalendarOpen={setCalendarOpen}
              setPlusDate={setPlusDate}
              setPlusDateClick={setPlusDateClick}
              plusdateClick={plusDateClick}
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
                    className={`flex items-center rounded-full  ${person.adult + person.child === 0 ? 'text-transparent hover:none' : 'hover:bg-navigatorOneLayoutColor'}`}
                  />
                </div>

                <span
                  className={`text-sm mt-1 w-[90%] flex justify-start col-span-3 line-clamp-1 ${person.adult + person.child === 0 ? 'text-gray-400' : 'text-black'}`}
                  style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                  게스트 {person.adult + person.child === 0 ? '추가' : person.adult + person.child}
                  {person.adult + person.child === 16 ? ' 이상' : ''}
                  {person.baby === 0 ? '' : ', 유아 ' + person.baby + '명'}
                  {person.pet === 0 ? '' : ', 반려동물 ' + person.pet + '마리'}
                </span>
              </span>
            </button>

            {/* 게스트 버튼 끝 */}
            <div ref={ref}>
              <GestNumber
                isMenuOpen={isMenuOpen}
                setPerson={personSetter}
                person={person}
                activeButton={activeButton}
                setIsMenuOpen={setIsMenuOpen}
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
