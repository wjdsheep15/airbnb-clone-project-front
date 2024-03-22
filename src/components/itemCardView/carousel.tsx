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
  const [current, setCurrent] = useState(0)
  const [heart, setHeart] = useState(false)

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }
  const handleHeart = () => {
    setHeart(!heart)
  }
  return (
    <div className='overflow-hidden w-full h-full relative group'>
      <Link
        href={`/rooms/${id}`}
        className='flex flex-row transition ease-out duration-40 w-full aspect-custom'
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((path, index) => {
          return (
            <img key={index} src={path} alt='' className='w-full h-auto rounded-lg object-cover' />
          )
        })}
      </Link>

      <span
        className={`bg-white rounded-full text-sm px-3 py-1 absolute top-3 left-3 ${guestPreference ? '' : 'hidden'}`}
      >
        게스트 선호
      </span>
      <button
        className='absolute top-3 right-3  stroke-white stroke-1 hover:-translate-all hover:scale-110'
        onClick={handleHeart}
      >
        <Like className={`${heart ? 'fill-mainColor' : ''}`} />
      </button>
      <button
        className={`absolute top-1/2 left-3 p-2 rounded-full bg-transparent group-hover:bg-transparent-70 ${current === 0 ? 'hidden' : ''}`}
        onClick={previousSlide}
      >
        <LeftButtonIcon className='group-hover:text-black text-transparent' />
      </button>
      <button
        className={`absolute top-1/2 right-3 p-2 rounded-full bg-transparent group-hover:bg-transparent-70 ${current === slides.length - 1 ? 'hidden' : ''}`}
        onClick={nextSlide}
      >
        <RightButtonIcon className='group-hover:text-black text-transparent' />
      </button>

      <div className='absolute bottom-0 py-1 flex justify-center items-center gap-1 w-full'>
        {slides.slice(Math.max(0, current - 2), current + 3).map((s, i) => {
          const index = i + Math.max(0, current - 2)
          return (
            <div
              key={'circle' + index}
              className={`rounded-full ${index === current ? 'w-1.5 h-1.5' : 'w-1 h-1'} ${index === current ? 'bg-white' : 'bg-transparent-70'}`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
