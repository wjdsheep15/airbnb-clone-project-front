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
import StarRateGenerator from '@/components/rooms/starIcon/starRateGenerator'
import Image from 'next/image'

interface Review {
  id: number
  reviewer: {
    name: string
    profileImageUrl: string
    address: string
  }
  content: string
  date: string
  roomId: number
  score: number
}

const isReviewExist = (reviews: Review[]): boolean => {
  return reviews.length > 0
}

const getAvgScore = (reviews: Review[]): number => {
  if (reviews.length === 0) {
    return 0
  }

  let totalScore = 0
  for (const review of reviews) {
    totalScore += review.score
  }
  const avgScore = totalScore / reviews.length
  return Math.round(avgScore * 10) / 10
}

export default function ReviewModal({ reviews }: { reviews: Review[] }) {
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

  const reviewExist = isReviewExist(reviews)
  const initialReviews = reviews.slice(0, 8)
  const avgScore = getAvgScore(reviews)

  return (
    <>
      <button
        onClick={handleOpen}
        className=' px-[23px] py-[13px] bg-white border-[1px] border-mainBlack rounded-lg'
      >
        <span className='text-mainBlack text-[16px] font-semibold'>
          {`리뷰 ${reviews.length}개 모두 보기`}
        </span>
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box
          className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl
           bg-white border-2 border-black shadow-lg p-8 w-[1200px] h-[780px]'
        >
          <div>
            <header>
              <button className='border-none text-black -p-12' onClick={handleClose}>
                <CloseIcon />
              </button>
            </header>
          </div>
          <div className='max-h-[600px] w-[1150px] overflow-y-auto overflow-x-hidden ml-2 mt-8'>
            <div>
              {reviews.length > 2 ? (
                <div className='flex'>
                  <Star />
                  <div className='pl-3 text-3xl font-semibold'>{`${avgScore}`}</div>
                </div>
              ) : (
                <div className='mb-3'>
                  <span className='text-mainGray text-[14px]'>
                    후기가 3개 이상이면 별점이 표시됩니다.
                  </span>
                </div>
              )}
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
              <div className='relative top-8 text-2xl font-semibold'>{`후기 ${reviews.length}개`}</div>
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
                          <li
                            className='w-40 h-10 hover:bg-slate-200'
                            key={index}
                            onClick={() => handleMenuClick(menu)}
                          >
                            {menu}
                          </li>
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

            <div className='mt-6'>
              {reviewExist ? (
                initialReviews.map((eachReview, index) => (
                  <section key={index} className='flex flex-col md:h-[226px] lg:h-[150px] '>
                    <div className='flex ml-0 mr-auto mb-2'>
                      <div className='w-12 h-full mr-[14px]'>
                        <div className='relative w-12 h-12'>
                          <Image
                            key={index}
                            src={eachReview.reviewer.profileImageUrl}
                            alt={`${index}. reviewer profileImage`}
                            fill
                            className='object-cover rounded-full'
                          />
                        </div>
                      </div>
                      <div className='flex flex-col justify-center space-y-[2px]'>
                        <div className='text-[16px] text-mainBlack font-semibold'>
                          {`${eachReview.reviewer.name}`}
                        </div>
                        <div className='text-[14px] text-mainGray'>
                          {`${eachReview.reviewer.address}`}
                        </div>
                      </div>
                    </div>
                    <div className='ml-0 mr-auto flex items-center mb-1 space-x-1'>
                      <StarRateGenerator score={eachReview.score} />
                    </div>
                    <div className='ml-0 mr-auto overflow-hidden'>
                      <p className='w-[450px] h-[72px] line-break-auto line-height-1.5 break-keep'>
                        {`${eachReview.content}`}
                      </p>
                    </div>
                  </section>
                ))
              ) : (
                <div>리뷰가 없습니다.</div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}
