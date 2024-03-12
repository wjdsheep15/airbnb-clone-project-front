import React, { useState } from 'react'
import styles from './styles.module.css'

export default function MultiRangeBar({
  fixedMinPrice,
  fixedMaxPrice,
  setRangeMinValue,
  rangeMinValue,
  setRangeMaxValue,
  rangeMaxValue,
}: {
  fixedMinPrice: number
  fixedMaxPrice: number
  setRangeMinValue: (value: number) => void
  rangeMinValue: number
  setRangeMaxValue: (value: number) => void
  rangeMaxValue: number
}) {
  const priceGap = 1000 // priceGap : 최소값과 최대값의 최소 격차
  const [rangeMinPercent, setRangeMinPercent] = useState(0)
  const [rangeMaxPercent, setRangeMaxPercent] = useState(0)

  const priceRangeMinValueHandler = (e: { target: { value: string } }) => {
    setRangeMinValue(parseInt(e.target.value))
  }

  const priceRangeMaxValueHandler = (e: { target: { value: string } }) => {
    setRangeMaxValue(parseInt(e.target.value))
  }

  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMaxValue(rangeMinValue + priceGap)
      setRangeMinValue(rangeMaxValue - priceGap)
    } else {
      setRangeMinPercent((rangeMinValue / fixedMaxPrice) * 100)
      setRangeMaxPercent(100 - (rangeMaxValue / fixedMaxPrice) * 100)
    }
  }

  return (
    <div className='mt-16'>
      <div className='mb-20'>
        <div className='h-4 w-650 rounded-lg bg-gray-300'></div>
        <div className='relative'>
          <input
            className={styles.input}
            type='range'
            min={fixedMinPrice}
            max={fixedMaxPrice - priceGap}
            step='1000'
            value={rangeMinValue}
            onChange={(e) => {
              priceRangeMinValueHandler(e)
              twoRangeHandler()
            }}
          />
          <input
            className={styles.input}
            type='range'
            min={fixedMinPrice + priceGap}
            max={fixedMaxPrice}
            step='1000'
            value={rangeMaxValue}
            onChange={(e) => {
              priceRangeMaxValueHandler(e)
              twoRangeHandler()
            }}
          />

          <div className='flex pt-4 pl-4 space-x-28'>
            <div className='relative mt-4 rounded-md shadow-sm'>
              <div className='pointer-events-none absolute items-center pl-3'>
                <div className='text-slate-500 pt-2'>최저</div>
                <span className='text-lg absolute left-4'>₩</span>
              </div>
              <input
                type='text'
                className=' w-full h-[70px] rounded-md border-0 pl-12 pt-5 ring-2 ring-gray-300 text-xl'
                placeholder={rangeMinValue.toLocaleString()}
              />
            </div>

            <div className='relative left-8 w-12 mb-8 border-b border-black'></div>

            <div className='relative right-4 mt-4 rounded-md shadow-sm'>
              <div className='pointer-events-none absolute items-center pl-3'>
                <div className='text-slate-500 pt-2'>최고</div>
                <span className='text-lg absolute left-4'>₩</span>
              </div>
              <input
                type='text'
                className=' w-full h-[70px] rounded-md border-0 pl-12 pt-5 ring-2 ring-gray-300 text-xl'
                placeholder={rangeMaxValue.toLocaleString()} // 천 단위로
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
