import categoryData from "../../../dummyDatas/categoryData.json";

export async function GET(request, { params }) {
  const icondata = categoryData.Category;
  console.log(icondata);
  const found = icondata.find(
    (eachRoom) => eachRoom.id === parseInt(params.id)
  );
  return Response.json({ data: found.name });
}
