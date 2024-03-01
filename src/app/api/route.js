import categoryData from "../../../dummyDatas/categoryData.json";

export async function GET() {
  const icondata = categoryData.Category;

  if (!icondata) {
    return new Response("Not Found", { status: 404 });
  }
  return Response.json({ data: icondata });
}
