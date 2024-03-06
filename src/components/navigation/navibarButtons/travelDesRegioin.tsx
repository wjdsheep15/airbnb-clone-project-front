import React from 'react'

interface Props {
  Region: string
}

export default function RegionButton({ Region }: Props) {
  return (
    <button
      type='button'
      className='rounded-3xl text-sm  text-center mt-4 ml-2 border hover:border-black'
      style={{ width: '90px', height: '40px' }}
    >
      {Region}
    </button>
  )
}
