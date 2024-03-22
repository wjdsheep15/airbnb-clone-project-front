'use client'

import React, { useState } from 'react'
import { Typography } from '@mui/material'

export default function HostLanguage() {
  type CheckboxStates = {
    [key: string]: boolean
  }

  const [checkedLanguage, setCheckedLanguage] = useState<CheckboxStates>({
    영어: false,
    프랑스어: false,
    독일어: false,
    일본어: false,
  })

  const [checkedStates, setCheckedStates] = useState<CheckboxStates>({
    이탈리아어: false,
    러시아어: false,
    스페인어: false,
    중국어: false,
  })

  // 체크박스 상태를 변경하는 함수
  const handleCheckLanguageChange = (event: { target: { name: any; checked: any } }) => {
    const { name, checked } = event.target
    setCheckedLanguage((prevStates) => ({
      ...prevStates,
      [name]: checked,
    }))
  }
  const handleCheckboxChange = (event: { target: { name: any; checked: any } }) => {
    const { name, checked } = event.target
    setCheckedStates((prevStates) => ({
      ...prevStates,
      [name]: checked,
    }))
  }

  // 언어 더 보기
  const [moreButtonLanguage, setMoreButtonLanguage] = useState('더 표시')
  const [foldingLanguage, setFoldingLanguage] = useState(false)

  const useFoldingLanguage = () => {
    if (moreButtonLanguage === '더 표시') {
      setMoreButtonLanguage('접기')
      setFoldingLanguage(true)
    } else {
      setMoreButtonLanguage('더 표시')
      setFoldingLanguage(false)
    }
  }

  const handleUncheckAll = () => {
    setCheckedLanguage((prevStates) => ({
      ...Object.keys(prevStates).reduce((newState: CheckboxStates, key: string) => {
        newState[key] = false // 모든 키에 대해 false 값을 할당
        return newState
      }, {}),
    }))

    setCheckedStates((prevStates) => ({
      ...Object.keys(prevStates).reduce((newState: CheckboxStates, key: string) => {
        newState[key] = false // 모든 키에 대해 false 값을 할당
        return newState
      }, {}),
    }))
  }

  return (
    <>
      <Typography variant='h4' className='font-semibold'>
        호스트 언어
      </Typography>
      <div className='grid grid-cols-2 gap-5 mt-8'>
        {Object.entries(checkedLanguage).map(([language, isChecked]) => (
          <div key={language}>
            <input
              type='checkbox'
              id={language}
              name={language}
              className='relative left-2 accent-black w-8 h-8'
              checked={isChecked}
              onChange={handleCheckLanguageChange}
            />
            <label htmlFor={language} className='text-xl relative left-6 -top-2'>
              {language}
            </label>
          </div>
        ))}
      </div>
      {/* 접기 펼치기 */}
      <div className='ml-2'>
        {foldingLanguage ? (
          <>
            <div className='grid grid-cols-2 gap-5 mt-8'>
              {Object.entries(checkedStates).map(([language, isChecked]) => (
                <div key={language}>
                  <input
                    type='checkbox'
                    id={language}
                    name={language}
                    className='relative accent-black w-8 h-8'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={language} className='text-xl relative left-4 -top-2'>
                    {language}
                  </label>
                </div>
              ))}
            </div>
          </>
        ) : null}
        <button className='text-xl font-semibold underline mt-8' onClick={useFoldingLanguage}>
          {moreButtonLanguage}
        </button>
      </div>

      <div className='divide-y-2 divide-gray-400 w-[1000px] -ml-10 mt-8'>
        <div></div>
        <div></div>
      </div>

      <button className='mt-6 text-xl font-semibold' onClick={handleUncheckAll}>
        전체 해제
      </button>
    </>
  )
}
