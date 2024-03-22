import Headers from '@/app/(home)/header'
import ItemCardPage from '@/components/itemCardView/itemCardPage'

export default async function HomePage() {
  return (
    <>
      <main className='flex flex-col items-center justify-center w-full h-full'>
        <Headers />
        <ItemCardPage />
      </main>
    </>
  )
}
