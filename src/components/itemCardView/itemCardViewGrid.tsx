import ItemCardView from '@/components/itemCardView/itemCardView'
import { Key } from 'react'

export default async function ItemCardViewGrid() {
  const result = await fetch(`http://localhost:3000/api/home`)
  const inner = await result.json()
  const rooms = JSON.parse(inner.data)

  interface Room {
    id: number
    slides: string[]
    host: string
    guestPreference: boolean
    price: string
    address: string
    nation: string
  }

  const itemsMap = rooms.map((item: Room, index: number) => {
    console.log('map image 배열 확인' + item.slides)
    return (
      <ItemCardView
        key={index}
        slides={item.slides}
        id={item.id}
        host={item.host}
        guestPreference={item.guestPreference}
        price={item.price}
        address={item.address}
        nation={item.nation}
      />
    )
  })
  return <div className='w-11/12 h-full grid gap-x-[24px] z-0 gap-y-10 grid-cols-5'>{itemsMap}</div>
}
