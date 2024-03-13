import ScrollPage from '@/components/categroyScroll/scrollPage'
import ItemCardPage from '@/components/itemCardView/itemCardPage'
import SmNavibar from '@/components/navigation/navibarComponents/smNavibar'

import NavigationBar from '@/components/navigation/navigation'

export default async function HomePage() {
  return (
    <>
      <main className='flex flex-col items-center justify-center w-full h-full'>
        <header className='sticky top-0 bg-white w-full h-full flex flex-col z-50 items-center hidden  sm:flex md:flex lg:flex xl:flex 2xl:flex'>
          <NavigationBar />
          <hr className='w-full  border-mianGray' />
        </header>
        <header className='sticky top-0 bg-white w-full h-full flex flex-col z-50 items-center black sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
          <SmNavibar />
        </header>

        <div className='sticky top-0 bg-white w-full h-full flex flex-col z-20 items-center'>
          <ScrollPage />
        </div>

        <ItemCardPage />
      </main>
    </>
  )
}
