'use client'

import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { TransitionProps } from '@mui/material/transitions'
import Image from 'next/image'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export default function ViewMore1() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button className='mt-4 font-bold underline decoration-2 text-black' onClick={handleOpen}>
        더보기
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        // onTransitionEnter={Transition}
      >
        <Box className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border-2 shadow-lg p-16 w-[745px] h-[620px]'>
          <div>
            <div className='flex'>
              <Button className='border-none text-black -mt-5 -mb-0 -ml-10' onClick={handleClose}>
                <Image
                  src='/svgIcons/closeIcon.svg'
                  alt='My closeIcon SVG'
                  width={20}
                  height={20}
                  className='block h-4 w-4 overflow-visible -ml-10 -mt-9'
                />
              </Button>
            </div>
          </div>
          <Typography className='text-xl font-semibold'>로그인 또는 회원가입</Typography>
          <Typography className='mt-4 text-5xl font-semibold'>한국 사용자 대상 마케팅</Typography>
          <Typography className='mt-10 text-5xl font-semibold'>이메일</Typography>
        </Box>
      </Modal>
    </>
  )
}
