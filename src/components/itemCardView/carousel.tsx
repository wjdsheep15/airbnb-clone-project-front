'use client'
import { useState } from 'react'
import LeftButtonIcon from '/public/images/LeftButtonIcon.svg'
import RightButtonIcon from '/public/images/RightButtonIcon.svg'
import Like from '/public/images/like.svg'

export default function Carousel({ slides }: { slides: Array<string> }) {
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
    <div className='overflow-hidden w-full h-full relative'>
      <div
        className={`flex transition ease-out duration-40 w-full z-0 h-full`}
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
      </div>

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[91%] w-[91%]  z-50 text-black'>
        <span className='bg-white rounded-full text-sm px-3 py-1 absolute top-0 left-0'>
          게스트 선호
        </span>
        <button className='absolute top-0 right-0 stroke-white stroke-1 hover:-translate-all hover:scale-110'>
          <Like />
        </button>
        <button
          className={`absolute top-1/2 left-0 p-2 rounded-full bg-transparent-70 ${current === 0 ? 'hidden' : 'bg-transparent-70'}`}
          onClick={previousSlide}
        >
          <LeftButtonIcon />
        </button>
        <button
          className={`absolute top-1/2 right-0 p-2 rounded-full bg-transparent-70 ${current === slides.length - 1 ? 'hidden' : 'bg-transparent-70'}`}
          onClick={nextSlide}
        >
          <RightButtonIcon />
        </button>
      </div>

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
