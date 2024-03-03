import ScrollPage from '@/components/categroyScroll/scrollPage'
import NavigationBar from '@/components/navigation/navigation'

export default function HeaderComponent() {
  return (
    <header className='sticky top-0 bg-white w-full h-full flex flex-col z-50 items-center'>
      <NavigationBar />
      <ScrollPage />
    </header>
  )
}
