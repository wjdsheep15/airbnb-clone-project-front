import ScrollPage from '@/components/categroyScroll/scrollPage'
import ItemCardPage from '@/components/itemCardView/itemCardPage'
import NavigationBar from '@/components/navigation/navigation'

export default async function HomePage() {
  return (
    <>
      <main className='flex flex-col items-center justify-center w-full h-full'>
        <header className='sticky top-0 bg-white w-full h-full flex flex-col z-50 items-center'>
          <NavigationBar />
          <hr className='w-full  border-mianGray' />
          <ScrollPage />
        </header>
        <ItemCardPage />
      </main>
    </>
  )
}
