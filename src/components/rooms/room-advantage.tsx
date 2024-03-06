import Image from 'next/image'

interface Advantage {
  name: string
  image: string
}

export default function RoomAdvantage({ advantages }: { advantages: Advantage[] }) {
  console.log('advantages: ', advantages)
  const advantageList = advantages

  return (
    <>
      <div>
        <div className='py-6'>
          <div className='flex flex-col item-center justify-between space-y-6'>
            {advantageList.map((eachAdvantage, index) => (
              <section key={index} className='flex items-center'>
                <div className='flex flex-start items-center'>
                  <div className='w-10 h-10 mr-6'>
                    <button className='relative w-full h-full'>
                      <Image
                        src={eachAdvantage.image}
                        alt={'advantages image'}
                        fill
                        className='object-contain rounded-full'
                      />
                    </button>
                  </div>
                  <div className='flex flex-col justify-between space-y-1'>
                    <div className='text-[16px] font-semibold'>{eachAdvantage.name}</div>
                    <div className='text-[14px] text-mainGray'>{`추가정보: 더미에 데이터 추가 필요`}</div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
