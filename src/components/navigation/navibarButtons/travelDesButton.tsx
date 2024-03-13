'use client'
import * as React from 'react'
import Image from 'next/image'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import RegionButton from '@/components/navigation/navibarButtons/travelDesRegioin'
import { RefObject, useEffect } from 'react'

interface Props {
  setInputValue: (newValue: string) => void
  isOpen: boolean
  activeButton: number
  setIsOpen: (newValue: boolean) => void
  buttonRef: RefObject<HTMLButtonElement>
}

export default function travelDesButton({
  setInputValue,
  isOpen,
  activeButton,
  setIsOpen,
  buttonRef,
}: Props) {
  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (activeButton != 1) {
      handleClose()
    }
  }, [activeButton])

  return (
    <>
      {isOpen && (
        <Menu
          anchorEl={buttonRef.current}
          className='mt-2'
          id='basic-menu'
          open={isOpen}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            '.MuiPaper-root': {
              borderRadius: 3,
              boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.1)',
            },
            '.MuiMenuItem-root': {
              minHeight: '500px',
              minWidth: '470px',
            },
          }}
        >
          <MenuItem
            className='text-sm'
            onClick={handleClose}
            sx={{
              '&.MuiListItem-root:hover': {
                backgroundColor: 'white', // 원하는 색상으로 변경
              },
            }}
          >
            <div className='relative flex-col top-[30px]'>
              {/*지역으로 검색하기 + 지도 사진 */}
              <section>
                <div className='relative bottom-[60px] right-[-20px] font-bold'>
                  지역으로 검색하기
                </div>
                <div className='relative flex bottom-[35px] right-[10px]'>
                  {/**지도 사진1 */}
                  <div className='relative flex-auto w-35 right-[-30px] '>
                    <figure className='max-w-lg '>
                      <Image
                        className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                        src='/images/travelDesImg/ElasticSearch.jpg'
                        alt='image description'
                        width={90}
                        height={90}
                      />
                      <figcaption className='mt-2 mr-10 text-center '>유연한 검색</figcaption>
                    </figure>
                  </div>
                  {/**지도 사진2 */}
                  <div
                    className='relative flex-auto w-35 right-[-15px]'
                    onClick={() => setInputValue('유럽')}
                  >
                    <figure className='max-w-lg '>
                      <Image
                        className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                        src='/images/travelDesImg/Europe.jpg'
                        alt='image description'
                        width={90}
                        height={90}
                      />
                      <figcaption className='mt-2 mr-10 text-center '>유럽</figcaption>
                    </figure>
                  </div>
                  {/**지도 사진3 */}
                  <div
                    className='relative flex-auto w-35 right-[-25px]'
                    onClick={() => setInputValue('일본')}
                  >
                    <figure className='max-w-lg '>
                      <Image
                        className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                        src='/images/travelDesImg/Japan.jpg'
                        alt='image description'
                        width={90}
                        height={90}
                      />
                      <figcaption className='mt-2 mr-10 text-center '>일본</figcaption>
                    </figure>
                  </div>
                  {/**지도 사진4 */}
                  <div className='relative flex-auto w-35 right-[-35px]'>
                    <figure className='max-w-lg '>
                      <Image
                        className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                        src='/images/travelDesImg/EastSouthAsia.jpg'
                        alt='image description'
                        width={90}
                        height={90}
                      />
                      <figcaption className='mt-2 mr-6 text-center '> 동남아시아</figcaption>
                    </figure>
                  </div>
                </div>
              </section>
              {/*한국 + 지역버튼 */}
              <section>
                <div className='relative  right-[-20px] font-bold'>한국</div>
                <div className='flex-col'>
                  <div className='flex'>
                    {/* 첫번째 행 버튼 */}
                    <button
                      type='button'
                      className='rounded-3xl text-sm  text-center mt-4 border hover:border-black'
                      style={{ width: '90px', height: '40px' }}
                      onClick={() => setInputValue('서울')}
                    >
                      서울
                    </button>
                    <RegionButton Region='부산' setInputValue={setInputValue} />
                    <RegionButton Region='속초' setInputValue={setInputValue} />
                    <RegionButton Region='강릉' setInputValue={setInputValue} />
                  </div>
                  <div className='flex'>
                    {/* 두번째 행 버튼 */}
                    <button
                      type='button'
                      className='rounded-3xl text-sm text-center mt-4 border hover:border-black'
                      style={{ width: '90px', height: '40px' }}
                      onClick={() => setInputValue('전주')}
                    >
                      전주
                    </button>
                    <RegionButton Region='대구' setInputValue={setInputValue} />
                    <RegionButton Region='경주' setInputValue={setInputValue} />
                    <RegionButton Region='강릉' setInputValue={setInputValue} />
                  </div>
                  <div className='flex'>
                    {/* 세번째 행 버튼 */}
                    <button
                      type='button'
                      className='rounded-3xl text-sm text-center mt-4 border hover:border-black'
                      style={{ width: '90px', height: '40px' }}
                      onClick={() => setInputValue('서귀포')}
                    >
                      서귀포
                    </button>

                    <RegionButton Region='대전' setInputValue={setInputValue} />
                    <RegionButton Region='제주도' setInputValue={setInputValue} />
                    <RegionButton Region='인천' setInputValue={setInputValue} />
                  </div>
                </div>
              </section>
            </div>
          </MenuItem>
        </Menu>
      )}
    </>
  )
}
