'use client'

import React, { useRef, useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { TransitionProps } from '@mui/material/transitions'
import Image from 'next/image'
import Upper from '/public/svgIcons/upper.svg'

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

  const scrollToTopRef = useRef<HTMLDivElement>(null)
  // const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    console.log('맨 위로 버튼 클릭함.')
    if (scrollToTopRef.current) {
      scrollToTopRef.current.scrollTop = 0
    }
  }

  // useEffect(() => {
  //   if (scrollToTopRef?.current?.scrollTop === 0) {
  //     console.log('위')
  //   }
  // }, [scrollToTopRef?.current?.scrollTop === 0])

  // useEffect(() => {
  //   const showButtonClick = () => {
  //     if (window.scrollY > 100) {
  //       setShowButton(true)
  //     } else {
  //       setShowButton(false)
  //     }
  //   }
  //   window.addEventListener('scroll', showButtonClick)
  //   return () => {
  //     window.removeEventListener('scroll', showButtonClick)
  //   }
  // }, [])

  const [ScrollY, setScrollY] = useState(0)
  const [BtnStatus, setBtnStatus] = useState(false) // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.scrollY)
    if (ScrollY > 800) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true)
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false)
    }
  }
  useEffect(() => {
    console.log('ScrollY is ', ScrollY) // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY])

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setScrollY(0) // ScrollY 의 값을 초기화
    setBtnStatus(false) // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    const watch = () => {
      scrollToTopRef?.current?.addEventListener('scroll', handleFollow)
    }
    watch()
    return () => {
      scrollToTopRef?.current?.removeEventListener('scroll', handleFollow)
    }
  })

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

          <div ref={scrollToTopRef} className='max-h-[500px] overflow-y-auto overflow-x-hidden'>
            <Typography className='text-xl font-semibold'>법적 약관</Typography>
            <Typography className='mt-4 text-5xl font-semibold'>한국 사용자 대상 마케팅</Typography>
            <Typography className='text-xl font-semibold mt-4'>
              에어비앤비가 수직 이용하는 개인 정보와 수집,이용,목적.
            </Typography>
            <Typography className='mt-4 text-3xl font-semibold'>
              에어비앤비 플랫폼을 이용하는 데 필요한 정보
            </Typography>
            <Typography className='text-xl mt-8'>
              당사는 회원님이 에어비앤비 플랫폼을 이용할 때 회원님의 개인 정보를 수집합니다. 그렇지
              않은 경우, 에어비앤비는 요청하신 서비스를 회원님께 제공하지 못할 수 있습니다.
            </Typography>
            <div className='relative left-8 mt-8 text-xl'>
              <li>
                <span className='font-semibold'>연락처 정보, 계정, 프로필 정보.</span>
                <span>
                  예약 및 호스팅 대행 서비스를 포함하여 에어비앤비 플랫폼에서 제공하는 서비스 이용에
                  필요한 회원님의 성명, 전화번호, 이메일 주소, 생년월일, 프로필 사진 및 인증 정보.
                  호스팅 대행 서비스를 제공하시는 경우에는 우편 주소가 추가로 필요합니다.
                </span>
              </li>
              <li>
                <span className='font-semibold'>결제 정보.</span>
                <span>대금을 지급받으려면 은행 계좌 또는 결제 계좌 정보가 필요합니다.</span>
              </li>
            </div>
            <Typography className='mt-8 text-3xl font-semibold'>
              에어비앤비 플랫폼 및 당사 결제 서비스 사용 시 자동으로 수집되는 정보
            </Typography>
            <Typography className='text-xl mt-8'>
              당사는 회원님이 에어비앤비 플랫폼 및 결제 서비스를 이용할 때 개인 정보를 자동으로
              수집합니다.
            </Typography>
            <div className='relative left-8 mt-8 text-xl'>
              <li>
                <span className='font-semibold'>위치 정보.</span>
                <span>
                  회원님 기기의 설정에 따라 IP 주소 또는 모바일 기기의 GPS를 이용해 판단하는 위치.
                  설정이나 기기 사용 권한을 통해 해당 기능을 활성화하는 경우, 에어비앤비는 회원님이
                  앱을 사용하지 않는 동안에도 이 정보를 수집할 수 있습니다.
                </span>
              </li>
              <li>
                <span className='font-semibold'>사용 정보.</span>
                <span>
                  회원님이 조회하는 페이지나 콘텐츠, 숙소 검색, 예약 내역, 에어비앤비 플랫폼에서
                  수행하는 기타 활동.
                </span>
              </li>
              <li>
                <span className='font-semibold'>로그 데이터 및 기기 정보. </span>
                <span>
                  에어비앤비 플랫폼 사용 방식(제3자 애플리케이션으로 연결되는 링크를 클릭했는지 여부
                  등)에 관한 세부 정보, IP 주소, 접속 날짜 및 시간, 하드웨어 및 소프트웨어 정보,
                  기기 정보, 기기 이벤트 정보, 고유 식별자, 충돌 데이터, 쿠키 데이터, 에어비앤비
                  플랫폼 사용 이전 또는 이후에 조회하거나 이용한 페이지. 에어비앤비 계정을 만들지
                  않았거나 로그인하지 않은 경우에도 당사는 이러한 정보를 수집할 수 있습니다.
                </span>
              </li>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className='fixed bottom-12 left-72 flex items-center w-36 h-16 text-xl text-white bg-black rounded-xl'
          >
            <div className='ml-2'>
              <Upper />
            </div>
            <span className='ml-2'>맨위로 이동</span>
          </button>
          {/* <button
            className={BtnStatus ? 'topBtn active' : 'topBtn'} // 버튼 노출 여부
            onClick={handleTop} // 버튼 클릭시 함수 호출
          >
            TOP
          </button> */}
        </Box>
      </Modal>
    </>
  )
}
