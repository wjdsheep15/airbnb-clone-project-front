import HeaderComponent from '@/app/(home)/header'
import ItemCardViewGrid from '@/components/itemCardView/itemCardViewGrid'

export default async function HomePage() {
  return (
    <>
      <main className='flex flex-col items-center justify-center w-full h-full'>
        <HeaderComponent />
        <ItemCardViewGrid />
      </main>
    </>
  )
}
