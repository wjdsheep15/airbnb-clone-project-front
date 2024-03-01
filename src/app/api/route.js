import categoryData from '../../dummyDatas/categoriesData.json'

export async function GET() {
  return Response.json({ data: categoryData.Category })
}
