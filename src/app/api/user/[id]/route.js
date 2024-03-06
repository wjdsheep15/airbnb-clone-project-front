import usersData from '@/dummyDatas/usersData.json'

/**
 *
 * @param {*} request
 * @param {*} param
 * @returns
 */

export async function GET(request, { params }) {
  const users = usersData.User

  const found = users.find((eachUser) => eachUser.id === parseInt(params.id))

  const parsed = {
    id: found.id,
    name: found.name,
    profileImageUrl: found.profileImageUrl,
    isAuth: found.isAuth,
  }

  return Response.json({ data: JSON.stringify(parsed) })
}
