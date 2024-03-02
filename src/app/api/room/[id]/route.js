import roomsData from '../../../../dummyDatas/roomsData.json'

/**
 *
 * @param {*} request
 * @param {*} param1
 * @returns
 */
export async function GET({ params }) {
  const id = params.id
  const room = roomsData.Room.find((room) => room.id === parseInt(id))

  if (!room) {
    return new Response('Not Found', { status: 404 })
  }

  return Response.json({ data: room })
}
