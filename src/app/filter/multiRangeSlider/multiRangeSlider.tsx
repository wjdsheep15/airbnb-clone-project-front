import React, { useState } from 'react'
// import styled from 'styled-components'
import styled from '@emotion/styled'

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
  const priceGap = 10000
  const [rangeMinPercent, setRangeMinPercent] = useState(0)
  const [rangeMaxPercent, setRangeMaxPercent] = useState(0)

  const prcieRangeMinValueHandler = (e: { target: { value: string } }) => {
    setRangeMinValue(parseInt(e.target.value))
  }

  const prcieRangeMaxValueHandler = (e: { target: { value: string } }) => {
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
        <div className='relative h-4 w-650 rounded-lg bg-gray-300'></div>
        <div className='relative'>
          <FilterPriceRangeMin
            type='range'
            min={fixedMinPrice}
            max={fixedMaxPrice - priceGap}
            step='1000'
            value={rangeMinValue}
            onChange={(e) => {
              prcieRangeMinValueHandler(e)
              twoRangeHandler()
            }}
          />
          <FilterPriceRangeMax
            type='range'
            min={fixedMinPrice + priceGap}
            max={fixedMaxPrice}
            step='1000'
            value={rangeMaxValue}
            onChange={(e) => {
              prcieRangeMaxValueHandler(e)
              twoRangeHandler()
            }}
          />
        </div>
      </div>
    </div>
  )
}

const FilterPriceRangeMin = styled.input`
  position: absolute;
  top: -9px;
  right: -2px;
  height: 7px;
  width: 100%;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    pointer-events: auto;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 50%;
    background-color: #b0b0b0;
    pointer-events: auto;
    -moz-appearance: none;
  }
`

const FilterPriceRangeMax = styled(FilterPriceRangeMin)``
