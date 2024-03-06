'use client'
import React, { useState, Dispatch, SetStateAction, useEffect } from 'react'
import { DayPicker, DateRange } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

interface Props {
  range: any
  setRange: any
}

const css = `

.my-selected {
  color: white;
  background-color: black;
}

.range-start {
  background-color: black;
  border-radius: 50%;
}

.range-end {
  background-color: black;
  border-radius: 50%;
}

.range-middle {
  background-color: #F7F7F7;
  border-radius: 0;
  color: black;
}
`

const pastMonth = new Date()

export default function CalenderPicker({ range, setRange }: Props) {
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  }

  useEffect(() => {}, [range])

  return (
    <div className='CalenderPicker'>
      <style>{css}</style>
      <DayPicker
        mode='range'
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        modifiersClassNames={{
          selected: 'my-selected',
          range_end: 'range-end',
          range_middle: 'range-middle',
          range_start: 'range-start',
        }}
      />
    </div>
  )
}
