import FitterButton from '@/components/categroyScroll/fillterButton'
import HorizonScroll from '@/components/categroyScroll/horizonScroll'

export default async function ScrollPage() {
  const result = await fetch(`http://localhost:3000/api/`)
  const inner = await result.json()
  const categroyIconData = inner.data

  console.log('category 값입니다-> ' + categroyIconData)
  return (
    <div className='flex flex-row items-center justify-center space-x-10 pt-3 w-10/12 h-24'>
      <div className='flex w-full h-20 grow'>
        <HorizonScroll List={categroyIconData} />
      </div>
      <div className='flex grow-0'>
        <FitterButton />
      </div>
    </div>
  )
}
