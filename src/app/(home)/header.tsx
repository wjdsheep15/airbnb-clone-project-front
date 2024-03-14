import ScrollPage from '@/components/categroyScroll/scrollPage'
import SmNavibar from '@/components/navigation/navibarComponents/smNavibar'
import NavigationBar from '@/components/navigation/navigation'

export default function Headers() {
  return (
    <>
      <header className='sticky top-0 bg-white w-full min-h-40 h-auto flex flex-col z-50 items-center hidden  sm:flex md:flex lg:flex xl:flex 2xl:flex'>
        <NavigationBar />
        <hr className='w-full  border-mianGray' />
        <ScrollPage />
      </header>
      <header className='sticky top-0 bg-white w-full h-full flex flex-col z-50 items-center black sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
        <SmNavibar />
        <ScrollPage />
      </header>
    </>
  )
}
