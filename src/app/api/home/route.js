import RoomsData from '../../../dummyDatas/roomsData.json'

export async function GET() {
  const rooms = RoomsData.Room
  const found = rooms.map((eachRoom) => {
    const id = parseInt(eachRoom.id)
    const slides = eachRoom.images
    const host = eachRoom.host.name
    const guestPreference = eachRoom.guestPreference
    const price = eachRoom.price
    const address = eachRoom.address
    const nation = eachRoom.nation
    return { id, slides, host, guestPreference, price, address, nation }
  })

  return Response.json({ data: JSON.stringify(found) })
}
