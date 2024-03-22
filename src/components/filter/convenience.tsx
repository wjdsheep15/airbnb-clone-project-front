'use client'

import React, { useState } from 'react'
import { Typography } from '@mui/material'

export default function Convenience() {
  // 체크박스 상태를 변경하는 함수
  type CheckboxStates = {
    [key: string]: boolean
  }

  const [checkedConvenience, setCheckedConvenience] = useState<CheckboxStates>({
    '무선 인터넷': false,
    주방: false,
    세탁기: false,
    건조기: false,
    에어컨: false,
    난방: false,
  })

  const [checkedStates, setCheckedStates] = useState<CheckboxStates>({
    '업무 전용 공간': false,
    TV: false,
    헤어드라이어: false,
    다리미: false,
    수영장: false,
    '자쿠지 욕조': false,
    '무료 주차 공간': false,
    '전기차 충전시설': false,
    '아기 침대': false,
    '킹사이즈 침대': false,
    헬스장: false,
    '바비큐 그릴': false,
    아침식사: false,
    '실내 벽난로': false,
    '해변에 인접': false,
    '수변에 인접': false,
    '화재 경보기': false,
    '일산화탄소 경보기': false,
  })

  // 체크박스 상태를 변경하는 함수
  const handleCheckConvenienceChange = (event: { target: { name: any; checked: any } }) => {
    const { name, checked } = event.target
    setCheckedConvenience((prevStates) => ({
      ...prevStates,
      [name]: checked,
    }))
  }

  // 접기에 있는 목록들 체크 박스 상태 변경
  const handleCheckboxChange = (event: { target: { name: any; checked: any } }) => {
    const { name, checked } = event.target
    setCheckedStates((prevStates) => ({
      ...prevStates,
      [name]: checked,
    }))
  }

  // 편의 시설 더 보기
  const [moreButtonConvenience, setMoreButtonConvenience] = useState('더 표시')
  const [foldingConvenience, setFoldingConvenience] = useState(false)

  const useFoldingConvenience = () => {
    if (moreButtonConvenience === '더 표시') {
      setMoreButtonConvenience('접기')
      setFoldingConvenience(true)
    } else {
      setMoreButtonConvenience('더 표시')
      setFoldingConvenience(false)
    }
  }

  return (
    <>
      <Typography variant='h4' className='font-semibold'>
        편의 시설
      </Typography>
      <p className='font-semibold mt-8 text-xl'>필수</p>

      <div className='grid grid-cols-2 gap-5 mt-8'>
        {Object.entries(checkedConvenience).map(([convenience, isChecked]) => (
          <div key={convenience}>
            <input
              type='checkbox'
              id={convenience}
              name={convenience}
              className='relative left-2 accent-black w-8 h-8'
              checked={isChecked}
              onChange={handleCheckConvenienceChange}
            />
            <label htmlFor={convenience} className='text-xl relative left-6 -top-2'>
              {convenience}
            </label>
          </div>
        ))}
      </div>
      {/* 편의 시설 접기 펼치기 */}
      <div className='ml-2'>
        {foldingConvenience ? (
          <>
            <div className='grid grid-cols-2 gap-5 mt-8'>
              {Object.entries(checkedStates).map(([convenience, isChecked]) => (
                <div key={convenience}>
                  <input
                    type='checkbox'
                    id={convenience}
                    name={convenience}
                    className='relative accent-black w-8 h-8'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={convenience} className='text-xl relative left-4 -top-2'>
                    {convenience}
                  </label>
                </div>
              ))}
            </div>
          </>
        ) : null}
        <button className='text-xl font-semibold underline mt-4' onClick={useFoldingConvenience}>
          {moreButtonConvenience}
        </button>
      </div>
    </>
  )
}
