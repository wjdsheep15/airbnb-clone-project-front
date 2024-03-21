import { useState } from 'react'

interface DateRange {
  from: Date | undefined
  to: Date | undefined
}

function useCalendarLogic() {
  const [calendarOpen, setCalendarOpen] = useState(false)
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  }
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)
  const [plusDate, setPlusDate] = useState('')
  const [plusDateClick, setPlusDateClick] = useState(0)

  // 캘린더 관련 상태를 초기화하는 함수
  const handleCalendar = () => {
    setRange(defaultSelected)
    setPlusDate('')
    setPlusDateClick(0)
  }

  return {
    calendarOpen,
    setCalendarOpen,
    range,
    setRange,
    plusDate,
    setPlusDate,
    plusDateClick,
    setPlusDateClick,
    handleCalendar,
  }
}

export default useCalendarLogic
