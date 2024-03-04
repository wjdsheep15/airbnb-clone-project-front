import usersData from '../../../dummyDatas/usersData.json'

// /**
//  *
//  * @param {*} request
//  * @param {*} param1
//  * @returns
//  */

export async function GET(request, { params: { id: string } }) {
  // const { searchParams } = new URL(request.url)
  // const searchid = searchParams.get('searchid')

  const users = usersData.User

  const found = users.map((eachUser) => {
    const id = parseInt(eachUser.id)
    const name = eachUser.name
    const profileImageUrl = eachUser.profileImageUrl
    const isAuth = eachUser.isAuth

    return { id, name, profileImageUrl, isAuth }
  })

  return Response.json({ data: JSON.stringify(found) })
}
