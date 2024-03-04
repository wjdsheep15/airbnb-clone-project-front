import Authinfo from '@/components/profile/authinfo'
import Identification from '@/components/profile/identification'
import Introduction from '@/components/profile/introduction'
import Review from '@/components/profile/review'

export default async function UserProfilePage() {
  const result = await fetch(`http://localhost:3000/api/user/1`)
  const inner = await result.json()
  const usersData = JSON.parse(inner.data)

  usersData.map((eachUser: any) => {
    console.log(eachUser)
  })

  return (
    <section className='relative flex top-[40px] flex-wrap left-[100px] '>
      <div className='relative left-[200px] md:w-1/3 mb-4 md:mb-0'>
        <Identification name='승주' />
        <Authinfo name='승주' />
      </div>
      <div className='relative w-full md:w-2/3  '>
        <Introduction name='승주' />
        <Review name='승주' />
      </div>
    </section>
  )
}
