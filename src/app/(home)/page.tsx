import ScrollPage from '@/components/categroyScroll/scrollPage'
import NavigationBar from '@/components/navigation/navigation'

export default async function HomePage() {
  return (
    <>
      <NavigationBar />
      <main className='flex flex-col items-center justify-center w-full h-full'>
        {/* 스크롤 설정 */}
        <ScrollPage />
      </main>
    </>
  )
}
