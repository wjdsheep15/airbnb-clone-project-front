'use client'
import React, { useState } from 'react'

import FillterModel from '@/components/filter/fillter'

export default function FitterButton() {
  const [open, setOpen] = useState(false)
  return (
    <button
      className='flex grow-0 items-center rounded-lg gap-x-2 justify-center border border-gray-300 w-20 h-12'
      onClick={() => setOpen(!open)}
    >
      <FillterModel />
    </button>
  )
}
