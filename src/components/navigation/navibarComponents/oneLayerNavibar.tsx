'use client'

interface Props {
  topActivityMenu: boolean
  setTopActivityMenu: (newValue: boolean) => void
}

export default function OneLayerNavibar({ topActivityMenu, setTopActivityMenu }: Props) {
  return (
    <div className='flex flex-row h-20 justify-center items-center' role='group'>
      <button
        type='button'
        className={`px-4 h-8 p-3 text-gray-900 flex items-center rounded-full ${
          topActivityMenu ? 'hover:bg-inherit' : 'hover:bg-gray-100'
        }`}
        onClick={() => setTopActivityMenu(true)}
      >
        <span className={`${topActivityMenu ? 'text-black' : 'text-gray-400'}`}>숙소</span>
      </button>

      <button
        type='button'
        className={`px-4 h-8 text-gray-900 rounded-full  ${
          topActivityMenu ? 'hover:bg-gray-100' : 'hover:bg-inherit'
        }`}
        onClick={() => setTopActivityMenu(false)}
      >
        <span className={`${topActivityMenu ? 'text-gray-400' : 'text-black'}`}>체험</span>
      </button>
      <button type='button' className='px-4 h-8 text-gray-900 rounded-full'>
        온라인 체험
      </button>
    </div>
  )
}
