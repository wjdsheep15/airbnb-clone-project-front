'use client'

import ReviewModal from '@/components/rooms/modal/review-modal'
import FullStarIcon from '@/components/rooms/starIcon/full-star'
import StarRateGenerator from '@/components/rooms/starIcon/starRateGenerator'
import Image from 'next/image'
import { useState } from 'react'

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

/**
 * 평균 별점 계산
 * @param 해당 room의 리뷰데이터 전부
 * @returns 평균 별점
 */
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

export default function RoomReview({ reviews }: { reviews: Review[] }) {
  const [expanded, setExpanded] = useState(false)

  const reviewExist = isReviewExist(reviews)
  const initialReviews = reviews.slice(0, 8)
  const avgScore = getAvgScore(reviews)

  const handleMoreContent = () => {
    setExpanded((expended) => false)
  }

  return (
    <>
      <div className='py-12'>
        <div className='flex flex-col justify-between space-y-6 md:w-[800px] lg:w-[1250px] px-20'>
          <div className='mb-12 flex flex-col'>
            <div>
              <span className='text-mainBlack text-[26px] font-semibold'>
                {`후기 ${reviews.length}개`}
              </span>
              {reviews.length > 2 ? (
                <div className='mb-3'>{`평점: ⭐${avgScore}`}</div>
              ) : (
                <div className='mb-3'>
                  <span className='text-mainGray text-[14px]'>
                    후기가 3개 이상이면 별점이 표시됩니다.
                  </span>
                </div>
              )}
            </div>
            <div className='flex flex-wrap'>
              {reviewExist ? (
                initialReviews.map((eachReview, index) => (
                  <section
                    key={index}
                    className='flex flex-col items-center w-1/2 md:h-[226px] lg:h-[226px] '
                  >
                    <div className='flex md:w-[470px] lg:w-[470xpx] ml-0 mr-auto mb-2'>
                      <div className='relative flex w-full h-12'>
                        <div className='w-12 h-full mr-[14px]'>
                          <div className='relative w-12 h-12'>
                            <Image
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
                    </div>
                    <div className='ml-0 mr-auto flex items-center mb-1 space-x-1'>
                      <StarRateGenerator score={eachReview.score} />
                    </div>
                    <div className='ml-0 mr-auto overflow-hidden'>
                      <p className='w-[450px] h-[72px] line-break-auto line-height-1.5 break-keep'>
                        {`${eachReview.content}`}
                      </p>
                    </div>
                    <div className='ml-0 mr-auto mt-2'>
                      <button
                        onClick={handleMoreContent}
                        className='text-mainBlack text-[16px] underline'
                      >
                        더 보기
                      </button>
                    </div>
                  </section>
                ))
              ) : (
                <div>리뷰가 없습니다.</div>
              )}
            </div>
            <div className='mt-3'>
              <button className='h-12 w-48 bg-white border-[1px] border-mainBlack rounded-lg'>
                <ReviewModal reviews={reviews} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
