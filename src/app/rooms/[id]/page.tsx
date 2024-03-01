import RoomAlbum from '@/components/rooms/room-album'
import RoomIntroduction from '@/components/rooms/room-introduction'
import RoomTitle from '@/components/rooms/room-title'
import Screen from '@/components/rooms/screen'

interface IdParams {
  params: { id: number }
}

export default async function RoomDetailPage({ params: { id } }: IdParams) {
  const result = await fetch(`http://localhost:3000/api/room/${id}`)
  const inner = await result.json()

  const roomData = inner.data

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
        </div>
      </main>
    </>
  )
}
