'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '/public/svgIcons/closeIcon.svg'

export default function LanganguaeModal() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  const [modalContent, setModalContent] = useState('language')
  const closeModalHandler = () => {
    setOpen(false)
  }

  // 버튼 클릭 시 border 라인 긋기
  const [active, setActive] = useState('')

  const handleClick = (button: React.SetStateAction<string>) => {
    setActive(button)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open language modal</Button>
      <Modal open={open} onClose={closeModalHandler}>
        <Box className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border-2 border-black shadow-lg p-16 w-[1300px] h-[820px]'>
          <div>
            <div className='flex'>
              <button
                className='border-none text-black -mt-5 -mb-0 -ml-10'
                onClick={closeModalHandler}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className='divide-y-4'>
            <Typography className='flex'>
              <button
                onClick={() => {
                  setModalContent('language')
                  handleClick('button1')
                }}
                className={`mt-10 text-2xl font-semibold ${active === 'button1' ? 'border-b-4 border-b-teal-500' : ''}`}
              >
                <div>언어와 지역</div>
              </button>

              <button
                onClick={() => {
                  setModalContent('currency')
                  handleClick('button2')
                }}
                className={`mt-10 ml-8 text-2xl font-semibold ${active === 'button2' ? 'border-b-4 border-b-teal-500' : ''}`}
              >
                통화
              </button>
            </Typography>
            <div></div>
          </div>

          {/* 언어와 지역을 선택하는 박스 */}
          {modalContent === 'language' && (
            <div>
              <Typography className='mt-10 text-3xl font-semibold'>
                언어와 지역을 선택하세요.
              </Typography>
              <ul className='flex'>
                <li className='rounded-xl mt-4 border border-slate-900 w-2/12'>
                  <a aria-current='true' role='button' href='#' lang='ko-KR'>
                    <div className='p-2'>한국어</div>
                    <div className='p-2 -mt-4 text-gray-400'>대한민국</div>
                  </a>
                </li>

                <li className='rounded-xl mt-4 ml-4 w-2/12'>
                  <a aria-current='true' role='button' href='#' lang='ko-KR'>
                    <div className='p-2'>English</div>
                    <div className='p-2 -mt-4 text-gray-400'>United States</div>
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* 통화를 선택 */}
          {modalContent === 'currency' && (
            <div>
              <Typography className='mt-10 text-3xl font-semibold'>통화를 선택하세요.</Typography>
              <ul className='flex'>
                <li className='rounded-xl mt-4 border border-slate-900 w-2/12'>
                  <a aria-current='true' role='button' href='#' lang='ko-KR'>
                    <div className='p-2'>한국 원</div>
                    <div className='p-2 -mt-4 text-gray-400'>KRW - ₩</div>
                  </a>
                </li>

                <li className='rounded-xl mt-4 ml-4 w-2/12'>
                  <a aria-current='true' role='button' href='#' lang='ko-KR'>
                    <div className='p-2'>미국 달러</div>
                    <div className='p-2 -mt-4 text-gray-400'>USD-$</div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  )
}
