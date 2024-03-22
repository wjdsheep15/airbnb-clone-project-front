import Image from 'next/image'

interface Host {
  name: string
  profileImageUrl: string
  career: string
  isSuperHost: boolean
  isAuth: boolean
  responseRate: number
  responseTime: string
}

export default function RoomHost({ host }: { host: Host }) {
  // console.log(host.profileImageUrl)
  console.log(host.career)
  return (
    <>
      <div>
        <div className='py-6'>
          <section>
            <div className='flex flex-start items-center'>
              <div className='w-10 h-10 mr-6'>
                <button className='relative w-full h-full'>
                  <Image
                    src={host.profileImageUrl}
                    alt={'host profile image'}
                    fill
                    className='object-contain rounded-full'
                  />
                </button>
              </div>
              <div className='flex flex-col justify-between space-y-1'>
                <div className='text-[16px] font-semibold'>
                  {host.isSuperHost ? `슈퍼 호스트 - 호스트: ${host.name}` : `호스트: ${host.name}`}
                </div>
                <div className='text-[14px] text-mainGray'>{`호스팅 경력 ${host.career}`}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
