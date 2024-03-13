'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '/public/svgIcons/closeIcon.svg'
import Star from '/public/svgIcons/reviewModalSvgs/star.svg'
import Cleanliness from '/public/svgIcons/reviewModalSvgs/cleanliness.svg'
import Accuracy from '/public/svgIcons/reviewModalSvgs/accuracy.svg'
import CheckIn from '/public/svgIcons/reviewModalSvgs/checkIn.svg'
import Interaction from '/public/svgIcons/reviewModalSvgs/interaction.svg'
import Location from '/public/svgIcons/reviewModalSvgs/location.svg'
import Satisfication from '/public/svgIcons/reviewModalSvgs/satisfactionComparedToPrice.svg'
import Search from '/public/svgIcons/reviewModalSvgs/search.svg'

export default function reviewButton() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [selectedMenu, setSelectedMenu] = useState('최신순')
  const menus = ['최신순', '높은 평점순', '낮은 평점순']
  const handleMenuClick = (menuName: React.SetStateAction<string>) => {
    setSelectedMenu(menuName)
  }

  return (
    <>
      <button onClick={handleOpen}>후기 모두 보기</button>
      <Modal open={open} onClose={handleClose}>
        <Box
          className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl
           bg-white border-2 border-black shadow-lg p-8 w-[1200px] h-[770px]'
        >
          <div>
            <header>
              <button className='border-none text-black -p-12' onClick={handleClose}>
                <CloseIcon />
              </button>
            </header>
          </div>

          <div className='flex mt-20'>
            <Star />
            <span className='pt-2 pl-4 text-2xl font-semibold'>리뷰 평균 점수</span>
          </div>

          <div className='flex relative top-12'>
            <div className='w-44 border-r-2'>
              <div className=''>전체 평점</div>
              <ol>
                <li>
                  <div className='flex'>
                    <div className='text-sm'>5</div>
                    <div className='w-[120px] max-w-xs bg-gray-200 h-1 rounded-xl mt-2 ml-4'></div>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <div className='text-sm'>4</div>
                    <div className='w-[120px] max-w-xs bg-gray-200 h-1 rounded-xl mt-2 ml-4'></div>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <div className='text-sm'>3</div>
                    <div className='w-[120px] max-w-xs bg-gray-200 h-1 rounded-xl mt-2 ml-4'></div>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <div className='text-sm'>2</div>
                    <div className='w-[120px] max-w-xs bg-gray-200 h-1 rounded-xl mt-2 ml-4'></div>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <div className='text-sm'>1</div>
                    <div className='w-[120px] max-w-xs bg-gray-200 h-1 rounded-xl mt-2 ml-4'></div>
                  </div>
                </li>
              </ol>
            </div>

            <div className='w-36 border-r-2 pl-4'>
              <div className='w-16'>청결도</div>
              <div>4.8</div>
              <Cleanliness className='mt-12' />
            </div>

            <div className='w-36 border-r-2 pl-4'>
              <div className='w-16'>정확도</div>
              <div>4.8</div>
              <Accuracy className='mt-12' />
            </div>
            <div className='w-36 border-r-2 pl-4'>
              <div className='w-16'>체크인</div>
              <div>4.8</div>
              <CheckIn className='mt-12' />
            </div>

            <div className='w-36 border-r-2 pl-4'>
              <div className='w-16'>의사소통</div>
              <div>4.8</div>
              <Interaction className='mt-12' />
            </div>

            <div className='w-36 border-r-2 pl-4'>
              <div className='w-16'>위치</div>
              <div>4.8</div>
              <Location className='mt-12' />
            </div>

            <div className='w-36 pl-4'>
              <div>가격 대비 만족도</div>
              <div>4.8</div>
              <Satisfication className='mt-12' />
            </div>
          </div>

          <div className='w-[1200px] divide-y-2 divide-gray-400 -ml-8'>
            <div className='mt-20'></div>
            <div></div>
          </div>

          <div>
            <div className='relative top-8 text-2xl font-semibold'>후기 x개</div>
            <div className='flex justify-end'>
              <div className='group inline-block'>
                <button className='pl-2 bg-white font-semibold border rounded-2xl flex items-center max-w-32 h-12'>
                  <p className='pr-1 font-semibold'>{selectedMenu}</p>
                  <svg
                    className='fill-current h-4 w-4 transform group-hover:-rotate-180
                    transition duration-150 ease-in-out'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </button>
                <div
                  className='bg-white border rounded-sm transform scale-0 group-hover:scale-100
                  absolute transition duration-150 origin-top-left w-40 -translate-x-20'
                >
                  <div>
                    <ul>
                      {menus.map((menu, index) => (
                        <div>
                          <li
                            className='w-40 h-10 hover:bg-slate-200'
                            key={index}
                            onClick={() => handleMenuClick(menu)}
                          >
                            {menu}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full mt-12 h-11 rounded-3xl border-2 border-black'>
            <label className='flex'>
              <div className='mt-3 ml-4'>
                <Search />
              </div>
              <input
                className='mt-0 ml-2 h-10 text-xl focus:outline-none'
                type='text'
                placeholder='후기 검색'
              />
            </label>
          </div>
        </Box>
      </Modal>
    </>
  )
}
