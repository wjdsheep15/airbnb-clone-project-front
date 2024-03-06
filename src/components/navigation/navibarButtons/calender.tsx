'use client'
import React, { useState } from 'react'
import { addDays, format } from 'date-fns'
import { DayPicker, DateRange } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const pastMonth = new Date()
export default function Calender() {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  }
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  let footer = <p>Please pick the first day.</p>
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      )
    }
  }

  return (
    <DayPicker
      className='HorizontalDayPicker'
      mode='range'
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      footer={footer}
    />
  )
}
