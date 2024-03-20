'use client'

import React, { useState } from 'react'
import { Typography } from '@mui/material'

export default function Accessibility() {
  type CheckboxStates = {
    [key: string]: boolean
  }

  const [checkedAccessibility, setCheckedAccessibility] = useState<CheckboxStates>({
    '게스트 출입구에 계단이나 문턱 없음': false,
    '너비 81cm 이상의 게스트 출입구': false,
    '휠체어 접근 가능 주차 공간': false,
    '게스트 출입구까지 계단 없음': false,
  })

  const [checkedStates, setCheckedStates] = useState<CheckboxStates>({
    '계단이나 문턱 없는 침실': false,
    '너비 81cm 이상의 침실 출입구': false,
    '계단이나 문턱 없는 욕실': false,
    '너비 81cm 이상의 욕실 출입구': false,
    '샤워실 고정 손잡이': false,
    '변기 옆 고정 손잡이': false,
    '계단이나 문턱 없는 샤워실': false,
    '샤워/목욕 의자': false,
    '천장형 또는 이동식 리프트': false,
  })

  // 체크박스 상태를 변경하는 함수
  const handleCheckAccessibilityChange = (event: { target: { name: any; checked: any } }) => {
    const { name, checked } = event.target
    setCheckedAccessibility((prevStates) => ({
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

  // 접근성 편의 더 보기
  const [moreButtonAccessibility, setMoreButtonAccessibility] = useState('더 표시')
  const [foldingAccessibility, setFoldingAccessibility] = useState(false)

  const useFoldingAccessibility = () => {
    if (moreButtonAccessibility === '더 표시') {
      setMoreButtonAccessibility('접기')
      setFoldingAccessibility(true)
    } else {
      setMoreButtonAccessibility('더 표시')
      setFoldingAccessibility(false)
    }
  }

  return (
    <>
      <Typography variant='h4' className='font-semibold'>
        접근성 편의
      </Typography>
      <p className='font-semibold mt-8 text-xl'>게스트 출입구 및 주차장</p>
      <div className='grid grid-cols-2 gap-4 mt-8'>
        {Object.entries(checkedAccessibility).map(([accessibility, isChecked]) => (
          <div key={accessibility}>
            <input
              type='checkbox'
              id={accessibility}
              name={accessibility}
              className='relative left-2 accent-black w-8 h-8'
              checked={isChecked}
              onChange={handleCheckAccessibilityChange}
            />
            <label htmlFor={accessibility} className='text-xl relative left-6 -top-2'>
              {accessibility}
            </label>
          </div>
        ))}
      </div>

      {/* 접기 펼치기 */}
      <div className='ml-2'>
        {foldingAccessibility ? (
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
        <button className='text-xl font-semibold underline mt-8' onClick={useFoldingAccessibility}>
          {moreButtonAccessibility}
        </button>
      </div>
    </>
  )
}
