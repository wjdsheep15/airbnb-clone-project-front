interface RoomDetail {
  bedroomCount: number
  bedCount: number
  bathroomCount: number
}

export default function RoomIntroduction({
  introduction,
  guestCapacity,
  roomDetail,
}: {
  introduction: string
  guestCapacity: number
  roomDetail: RoomDetail
}) {
  return (
    <>
      <div>
        <div className='py-8'>
          <section>
            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <span className='text-gray-900 text-xl font-semibold'>{introduction}</span>
              </div>
              <div className='flex flex-row pt-1'>
                <span className='text-gray-900 text-base'>
                  {roomDetail.bedCount > 0
                    ? `최대 인원${guestCapacity}명, 침대 ${roomDetail.bedCount}개, 욕실 ${roomDetail.bathroomCount}개`
                    : `최대 인원${guestCapacity}명, 침실 ${roomDetail.bedroomCount}개, 욕실 ${roomDetail.bathroomCount}개`}
                </span>
              </div>
              <div className='flex flex-row pt-2'>
                <span>⭐</span>
                <span className='text-gray-900 text-base font-semibold underline'>
                  리뷰 관련 데이터
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
