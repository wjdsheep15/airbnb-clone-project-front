import usersData from '../../../dummyDatas/usersData.json'

export async function GET() {
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
