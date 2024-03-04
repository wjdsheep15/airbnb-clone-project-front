import RoomAdvantage from '@/components/rooms/room-advantage'
import RoomAlbum from '@/components/rooms/room-album'
import RoomDescription from '@/components/rooms/room-description'
import RoomHost from '@/components/rooms/room-host'
import RoomIntroduction from '@/components/rooms/room-introduction'
import RoomTitle from '@/components/rooms/room-title'
import Screen from '@/components/rooms/screen'

interface IdParams {
  params: { id: number }
}

export default async function RoomDetailPage({ params: { id } }: IdParams) {
  const result = await fetch(`http://localhost:3000/api/room/${id}`)
  console.log(result);
  const inner = await result.json()
  console.log(inner)
  const roomData = inner.data
  console.log(roomData)

  if (!roomData) {
    return <div>존재하지 않는 방입니다.</div>
  }

  return (
    <>
      <main>
        <div className='flex flex-col'>
          <Screen>
            <RoomTitle roomName={roomData.name} />
          </Screen>
          <Screen>
            <RoomAlbum images={roomData.images} />
          </Screen>
          <Screen>
            <RoomIntroduction
              introduction={roomData.introduction}
              guestCapacity={roomData.guestCapacity}
              roomDetail={roomData.roomDetail}
            />
          </Screen>
          <Screen>
            <RoomHost host={roomData.host} />
          </Screen>
          <Screen>
            <RoomAdvantage advantages={roomData.advantages} />
          </Screen>
          <Screen>
            <RoomDescription />
          </Screen>
        </div>
      </main>
    </>
  )
}
