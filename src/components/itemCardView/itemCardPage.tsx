import ItemCardViewGrid from '@/components/itemCardView/itemCardViewGrid'

export default async function ItemCardPage() {
  const result = await fetch(`http://localhost:3000/api/home`)
  const inner = await result.json()
  const roomsData = JSON.parse(inner.data)

  return <ItemCardViewGrid roomsData={roomsData} />
}
