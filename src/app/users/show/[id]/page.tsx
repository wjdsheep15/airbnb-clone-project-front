import Authinfo from '@/components/profile/authinfo'
import Identification from '@/components/profile/identification'
import Introduction from '@/components/profile/introduction'
import IsAuthinfo from '@/components/profile/isAuthinfo'
import Review from '@/components/profile/review'

interface IdParams {
  params: { id: number }
}

export default async function UserProfilePage({ params: { id } }: IdParams) {
  const result = await fetch(`http://localhost:3000/api/user/${id}`)
  const inner = await result.json()
  const usersData = JSON.parse(inner.data)

  return (
    <section className='relative flex top-[40px] flex-wrap left-[100px] '>
      <div className='relative left-[200px] md:w-1/3 mb-4 md:mb-0'>
        <Identification name={usersData.name} />

        {usersData.isAuth === true ? (
          <IsAuthinfo name={usersData.name} />
        ) : (
          <Authinfo name={usersData.name} />
        )}
      </div>
      <div className='relative w-full md:w-2/3  '>
        <Introduction name={usersData.name} />
        <Review name={usersData.name} />
      </div>
    </section>
  )
}
