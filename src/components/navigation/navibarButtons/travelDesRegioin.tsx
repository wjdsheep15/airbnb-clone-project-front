import React from 'react'

interface Props {
  Region: string
}

export default function RegionButton({ Region }: Props) {
  return (
    <button
      type='button'
      className='rounded-3xl text-sm px-8 py-3 text-center mt-4 ml-2 border hover:border-black'
    >
      {Region}
    </button>
  )
}
