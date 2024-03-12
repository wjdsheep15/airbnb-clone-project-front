import reviewsData from '../../../../../dummyDatas/reviewsData.json'
/**
 *
 * @param {*} roomId
 * @returns 
 */
export async function GET(request, { params }) {
  const id = parseInt(params.id);
  const reviews = reviewsData.Review.filter((review) => review.roomId === id);

  return Response.json({ data: reviews }, { status: 200 });
}
