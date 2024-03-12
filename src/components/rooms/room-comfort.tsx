import Image from 'next/image'

interface Comforts {
  name: string
  image: string
}

const isComfortExist = (comforts: Comforts[]): boolean => {
  return comforts.length > 0
}

export default function RoomComport({ comforts }: { comforts: Comforts[] }) {
  const comfortExist = isComfortExist(comforts)
  return (
    <>
      <div>
        <div className='pb-6'>
          <div className='flex flex-col justify-between space-y-6'>
            <div className='pt-6 text-[22px] font-semibold'>숙소 편의시설</div>
            <div className='flex flex-wrap'>
              {comfortExist ? (
                comforts.map((eachComfort, index) => (
                  <section key={index} className='flex items-center w-1/2'>
                    <div className='relative flex px-2 w-[265px] pb-4'>
                      <div className='w-6 h-6 mr-4'>
                        <div className='relative w-full h-full'>
                          <Image
                            src={eachComfort.image}
                            alt={`eachComfort image: ${index}`}
                            fill
                            className='object-contain'
                          />
                        </div>
                      </div>
                      <div className='text-[16px] font-mainBlack'>{eachComfort.name}</div>
                    </div>
                  </section>
                ))
              ) : (
                <section>
                  <div className='flex'>편의시설이 없습니다.</div>
                </section>
              )}
            </div>
            <div className='mt-6'>
              <button className=' px-[23px] py-[13px] bg-white border-[1px] border-mainBlack rounded-lg'>
                <span className='text-mainBlack text-[16px] font-semibold'>
                {`편의시설 ${comforts.length}개 모두 보기`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
