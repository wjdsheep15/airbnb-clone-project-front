import RoomAdvantage from '@/components/rooms/room-advantage'
import RoomAlbum from '@/components/rooms/room-album'
import RoomDescription from '@/components/rooms/room-description'
import RoomHost from '@/components/rooms/room-host'
import RoomIntroduction from '@/components/rooms/room-introduction'
import RoomTitle from '@/components/rooms/room-title'
import Screen from '@/components/rooms/screen'

interface Host {
  name: string
  profileImageUrl: string
  career: string
  isSuperHost: boolean
  isAuth: boolean
  responseRate: number
  responseTime: string
}

interface RoomDetail {
  bedroomCount: number
  bedCount: number
  bathroomCount: number
}

interface Advantage {
  name: string
  image: string
}

interface Room {
  id: number
  images: string[]
  name: string
  introduction: string
  address: string
  nation: string
  description: string[]
  host: Host
  price: string
  roomDetail: RoomDetail
  guestPreference: boolean
  guestCapacity: number
  advantages: Advantage[]
  comforts: string[]
  checkIn: string
  checkOut: string
}

export default function ReservationScreen({ roomData }: { roomData: Room }) {
  return (
    <>
      <div className='md:h-[340px] lg:h-[450px] md:w-[800px] lg:w-[1250px]'>
        <div className='flex flex-start px-20'>
          <div className='relative w-2/3'>
            <div>
              <RoomIntroduction
                introduction={roomData.introduction}
                guestCapacity={roomData.guestCapacity}
                roomDetail={roomData.roomDetail}
              />
              <hr />
              <RoomHost host={roomData.host} />
              <hr />
              <RoomAdvantage advantages={roomData.advantages} />
              <hr />
              <RoomDescription />
              <hr />
            </div>
          </div>
          <div className='relative w-1/3'>{/* 스티키 예약 카드 */}</div>
        </div>
      </div>
    </>
  )
}
