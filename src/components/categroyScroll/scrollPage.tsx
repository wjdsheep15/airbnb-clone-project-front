import FitterButton from '@/components/categroyScroll/fillterButton'
import HorizonScroll from '@/components/categroyScroll/horizonScroll'

export default async function ScrollPage() {
  const result = await fetch(`http://localhost:3000/api/`)
  const inner = await result.json()
  const categroyIconData = inner.data

  return (
    <div className='flex flex-row items-center justify-center space-x-4 pb-3 pt-5 w-[91.16%] h-24'>
      <div className='flex w-[91.16%] h-20 grow'>
        <HorizonScroll categoryList={categroyIconData} />
      </div>
      <div className='flex grow-0'>
        <FitterButton />
      </div>
    </div>
  )
}
