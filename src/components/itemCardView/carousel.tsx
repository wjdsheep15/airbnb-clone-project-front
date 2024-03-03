'use client'
import { useState } from 'react'
import LeftButtonIcon from '/public/images/LeftButtonIcon.svg'
import RightButtonIcon from '/public/images/RightButtonIcon.svg'
import Like from '/public/images/like.svg'
import Link from 'next/link'

interface Props {
  slides: Array<string>
  id: number
  guestPreference: boolean
}

export default function Carousel({ slides, id, guestPreference }: Props) {
  let [current, setCurrent] = useState(0)

  let previousSlide = () => {
    {
      console.log('버튼 클릭')
    }
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }
  return (
    <div className='overflow-hidden w-full h-full relative group'>
      <Link
        href={`/rooms/${id}`}
        className={`flex flex-row transition ease-out duration-40 w-full z-50 h-full`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((path, index) => {
          return (
            <img
              key={index}
              src={path}
              alt={''}
              width={287.8}
              height={270.41}
              className='z-0 rounded-lg'
            />
          )
        })}
      </Link>

      <span
        className={`bg-white rounded-full text-sm px-3 py-1 absolute top-3 left-3 ${guestPreference ? '' : 'hidden'}`}
      >
        게스트 선호
      </span>
      <button className='absolute top-3 right-3 stroke-white stroke-1 hover:-translate-all hover:scale-110'>
        <Like />
      </button>
      <button
        className={`absolute top-1/2 left-3 p-2 rounded-full bg-transparent group-hover:bg-transparent-70 ${current === 0 ? 'hidden' : ''}`}
        onClick={previousSlide}
      >
        <LeftButtonIcon className='group-hover:text-black text-transparent' />
      </button>
      <button
        className={`absolute top-1/2 right-3 p-2 rounded-full bg-transparent group-hover:bg-transparent-70 ${current === slides.length - 1 ? 'hidden' : 'bg-transparent-70'}`}
        onClick={nextSlide}
      >
        <RightButtonIcon className='group-hover:text-black text-transparent' />
      </button>

      <div className='absolute bottom-0 py-1 flex justify-center gap-1 w-full'>
        {slides.map((s, i) => {
          return (
            <div
              key={'circle' + i}
              className={`rounded-full w-1 h-1  ${i == current ? 'bg-white' : 'bg-transparent-70'}`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
