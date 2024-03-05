'use client'
import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker'
import { PickersShortcutsItem } from '@mui/x-date-pickers/PickersShortcuts'
import { DateRange } from '@mui/x-date-pickers-pro'

const shortcutsItems: PickersShortcutsItem<DateRange<Dayjs>>[] = []

export default function BasicRangeShortcuts() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        slotProps={{
          shortcuts: {
            items: shortcutsItems,
          },
          actionBar: { actions: [] },
        }}
        calendars={3}
      />
    </LocalizationProvider>
  )
}
