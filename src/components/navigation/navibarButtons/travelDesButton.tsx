'use client'
import * as React from 'react'
import Image from 'next/image'
import RegionButton from '@/components/navigation/navibarButtons/travelDesRegioin'
import { useEffect } from 'react'

interface Props {
  setInputValue: (newValue: string) => void
  isOpen: boolean
  activeButton: number
  setIsOpen: (newValue: boolean) => void
}

export default function travelDesButton({ setInputValue, isOpen, activeButton, setIsOpen }: Props) {
  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (activeButton != 1) {
      handleClose()
    }
  }, [activeButton, isOpen])

  return (
    <>
      {isOpen && (
        <div className='text-sm bg-white rounded-lg border border-gray-200 p-8 absolve mt-5 w-[493px] h-auto z-50'>
          {/*지역으로 검색하기 + 지도 사진 */}
          <section className='w-full h-full flex items-center flex-col'>
            <span className=' font-bold flex justify-start w-full'>지역으로 검색하기</span>
            <div className='flex justify-between w-full mt-5'>
              {/**지도 사진1 */}
              <div
                className=' flex items-center w-35'
                onClick={() => {
                  setInputValue('여행지 검색')
                }}
              >
                <figure className='max-w-lg '>
                  <Image
                    className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                    src='/images/travelDesImg/ElasticSearch.jpg'
                    alt='image description'
                    width={90}
                    height={90}
                  />
                  <figcaption className='mt-2  text-center '>유연한 검색</figcaption>
                </figure>
              </div>
              {/**지도 사진2 */}
              <div
                className=' flex items-center w-35'
                onClick={() => {
                  setInputValue('유럽')
                }}
              >
                <figure className='max-w-lg '>
                  <Image
                    className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                    src='/images/travelDesImg/Europe.jpg'
                    alt='image description'
                    width={90}
                    height={90}
                  />
                  <figcaption className='mt-2 text-center '>유럽</figcaption>
                </figure>
              </div>
              {/**지도 사진3 */}
              <div
                className=' flex items-center w-35 '
                onClick={() => {
                  setInputValue('일본')
                }}
              >
                <figure className='max-w-lg '>
                  <Image
                    className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                    src='/images/travelDesImg/Japan.jpg'
                    alt='image description'
                    width={90}
                    height={90}
                  />
                  <figcaption className='mt-2 text-center '>일본</figcaption>
                </figure>
              </div>
              {/**지도 사진4 */}
              <div
                className=' flex items-center w-35'
                onClick={() => {
                  setInputValue('동남아시아')
                }}
              >
                <figure className='max-w-lg '>
                  <Image
                    className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                    src='/images/travelDesImg/EastSouthAsia.jpg'
                    alt='image description'
                    width={90}
                    height={90}
                  />
                  <figcaption className='mt-2  text-center '> 동남아시아</figcaption>
                </figure>
              </div>
            </div>

            {/*한국 + 지역버튼 */}
            <div className='mt-10 w-full h-auto'>
              <span className='flex w-full justify-start font-bold'>한국</span>
              <div className='flex-col mt-3'>
                <div className='flex justify-between items-center'>
                  {/* 첫번째 행 버튼 */}
                  <RegionButton Region='서울' setInputValue={setInputValue} />
                  <RegionButton Region='부산' setInputValue={setInputValue} />
                  <RegionButton Region='속초' setInputValue={setInputValue} />
                  <RegionButton Region='강릉' setInputValue={setInputValue} />
                </div>
                <div className='flex justify-between items-center'>
                  {/* 두번째 행 버튼 */}
                  <RegionButton Region='전주' setInputValue={setInputValue} />
                  <RegionButton Region='대구' setInputValue={setInputValue} />
                  <RegionButton Region='경주' setInputValue={setInputValue} />
                  <RegionButton Region='여수' setInputValue={setInputValue} />
                </div>
                <div className='flex justify-between items-center'>
                  {/* 세번째 행 버튼 */}
                  <RegionButton Region='서귀포' setInputValue={setInputValue} />
                  <RegionButton Region='대전' setInputValue={setInputValue} />
                  <RegionButton Region='제주도' setInputValue={setInputValue} />
                  <RegionButton Region='인천' setInputValue={setInputValue} />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}
