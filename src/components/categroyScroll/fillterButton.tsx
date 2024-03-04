import FitterIcon from '/public/images/fillter.svg'

export default function FitterButton() {
  return (
    <div className='flex grow-0 items-center rounded-lg gap-x-2 justify-center border border-gray-300 w-20 h-12'>
      <FitterIcon />
      <span className='text-xs'>필터</span>
    </div>
  )
}
