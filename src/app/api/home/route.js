import RoomsData from '../../../dummyDatas/roomsData.json'

export async function GET() {
  return Response.json({ data: categoryData.Category })
}
