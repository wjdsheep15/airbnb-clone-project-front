'use client'

import MenuIcon from '/public/images/naviBarIcon/menuIcon.svg'
import UserIcon from '/public/images/naviBarIcon/UserIcon.svg'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KakaoLogin from '@/components/kakaoLogin/KakaoLogin'

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'

import styles from '@/components/navigation/navibarButtons/styles.module.css'
import SignUpButton from '@/components/navigation/modal/signUp'
import Image from 'next/image'
import { ClassNames } from '@emotion/react'
import Link from 'next/link'
import KakaoLogout from '@/components/kakaoLogin/KakaoLogout'

// 셀렉트 박스 값과 CSS
const options = [
  { value: '한국 (+82)', label: '한국 (+82)' },
  { value: '미국 (+1)', label: '미국 (+1)' },
]

export default function UserMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [loginOpen, setLoginOpen] = React.useState(false)

  const closeModalHandler = () => {
    setLoginOpen(!loginOpen)
  }
  const handleOpen = () => setLoginOpen(true)

  const [selectedOption, setSelectedOption] = React.useState('한국 (+82)') // 셀렉트 박스
  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedOption(event.target.value)
  }

  const [value, setValue] = React.useState('')

  const handleNumber = (event: { target: { value: any } }) => {
    const inputValue = event.target.value
    // 입력값이 숫자인지 확인
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue)
    }
  }

  const [existToken, setExistToken] = useState(false)

  useEffect(() => {
    if (
      localStorage &&
      localStorage.getItem('access_token') &&
      localStorage.getItem('access_token') !== 'undefined'
    ) {
      setExistToken(true)
    }
  })

  return (
    <div>
      <button
        className={`ml-2 h-[48px] w-[86px] items-center flex flex-row border border-gray-300 rounded-full text-black ${open ? 'shadow-xl' : ''} hover:shadow-lg`}
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon className='ml-3 mr-3' />
        <div className='w-8 h-8'>
          <UserIcon className='w-8 h-8' />
        </div>
      </button>
      <Menu
        className='mt-2'
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '.MuiPaper-root': {
            borderRadius: 3,
            boxShadow: '0px 3px 5px 2px rgb(0, 0, 0, 0.1)',
          },
        }}
      >
        {/**회원 가입 */}
        <MenuItem
          className={` ${existToken ? 'hidden' : ''}`}
          onClick={() => {
            handleClose()
            handleOpen()
          }}
        >
          회원 가입
        </MenuItem>
        <Link href={'/users/show/1'}>
          <MenuItem className={`${existToken ? '' : 'hidden'}`}>계정</MenuItem>
        </Link>
        {/**로그인 */}
        <MenuItem
          className={` ${existToken ? 'hidden' : ''}`}
          onClick={() => {
            handleClose()
            handleOpen()
          }}
        >
          로그인
        </MenuItem>
        <MenuItem className={` ${existToken ? '' : 'hidden'}`}>{<KakaoLogout />} </MenuItem>
        <hr />
        {/*당신의 공간을 에어비앤비 하세요*/}
        <MenuItem className='pt-3' onClick={handleClose}>
          당신의 공간을 에어비앤비 하세요
        </MenuItem>
        {/*도움말 센터 */}
        <MenuItem onClick={handleClose}>도움말 센터</MenuItem>
      </Menu>

      <Modal
        open={loginOpen}
        onClose={closeModalHandler}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border-black shadow-lg w-[745px] h-[820px]'>
          {/* 제목 + X버튼 영역 */}
          <div className='p-6 relative w-[745px] flex flex-row'>
            <Button className='justify-start border-none text-black' onClick={closeModalHandler}>
              <Image
                src='/svgIcons/closeIcon.svg'
                alt='My closeIcon SVG'
                width={20}
                height={20}
                className='block h-4 w-4 overflow-visible'
              />
            </Button>
            <Typography className='text-lg text-nowrap absolute left-1/3 ml-9 font-semibold'>
              로그인 또는 회원가입
            </Typography>
          </div>
          {/* 줄 */}
          <hr />

          {/* 전화번호 */}
          <div className='p-6'>
            <div className='text-2xl font-semibold'>에어비앤비에 오신 것을 환영합니다.</div>

            <br />

            <TextField
              select
              label='국가/지역'
              value={selectedOption}
              onChange={handleChange}
              fullWidth
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              aria-required='true'
              placeholder='전화번호'
              value={value}
              onChange={handleNumber}
              fullWidth
            />

            <Typography>
              <span className='text-base'>
                전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이
                부과됩니다.{' '}
                <span className='underline text-black font-bold text-base break-words'>
                  개인정보
                  <br />
                  처리방침
                </span>
              </span>
            </Typography>

            <SignUpButton />

            <Typography className={styles.hrSect}>
              <span className='text-sm text-mainGray'>또는</span>
            </Typography>
            <div className='relative text-black flex flex-row items-center justify-center  border border-solid border-black rounded-lg text-sm font-bold w-full h-[48px]'>
              <Image
                src='/images/kakaoLogin.png'
                alt='KakaoLogin'
                className='absolute left-5'
                width={20}
                height={20}
              />
              <KakaoLogin KakaoLocation='카카오 로그인' /> {/**카카오 로그인하기 */}
            </div>

            <Button className='relative text-black flex flex-row items-center justify-center mt-5 border border-solid border-black rounded-lg text-sm font-bold w-full h-[48px]'>
              <Image
                className='absolute left-5'
                src={'/images/naviBarIcon/email.svg'}
                alt='이메일'
                width={20}
                height={20}
              />
              <span>이메일로 로그인하기</span>
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
