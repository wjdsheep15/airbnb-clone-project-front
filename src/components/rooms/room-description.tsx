'use client'

import { useState } from 'react'

export default function RoomDescription() {
  const initialDescription = [
    '가평의 푸르른 자연과 함께하는 공간',
    '안락함을 주는 우디한 객실과',
    '워터파크를 연상케하는 대형 야외 수영장까지 !',
    '사랑하는 사람과 즐겁고 편안한 시간 되세요 :)',
    '[가평 모닝 스파펜션]의 [세이지]객실 입니다.',
  ]

  const [description, setDescription] = useState(initialDescription)
  const [showMore, setShowMore] = useState(false)

  const showMoreDescription = () => {
    setShowMore((prevShowMore) => !prevShowMore)
  }

  return (
    <>
      <div>
        <div className='py-6'>
          <div className='flex flex-col flex-start'>
            <div className='w-full h-[144px]'>
              <span className='relative w-full h-full'>
                {description
                  .slice(0, showMore ? description.length : 4)
                  .map((eachDescriptionLine, lineIndex) => (
                    <div key={lineIndex}>{eachDescriptionLine}</div>
                  ))}
                {!showMore && description.length > 4 && (
                  <button
                    onClick={showMoreDescription}
                    className='text-gray-900 dark:text-white text-base font-semibold underline'
                  >
                    더 보기 {'>'}
                  </button>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
