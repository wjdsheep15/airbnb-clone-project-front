'use client'
import { useState, useEffect } from 'react'
import ItemCardView from '@/components/itemCardView/itemCardView'

interface Room {
  id: number
  slides: string[]
  host: string
  guestPreference: boolean
  price: string
  address: string
  nation: string
}

interface Props {
  roomsData: Room[]
}

export default function ItemCardViewGrid({ roomsData }: Props) {
  const [items, setItems] = useState<Room[]>(roomsData.slice(0, 20))
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      !hasMore
    )
      return
    loadMoreData()
  }

  const loadMoreData = () => {
    if (items.length >= roomsData.length) {
      setHasMore(false)
      return
    }
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...roomsData.slice(prevItems.length, prevItems.length + 20),
      ])
    }, 500)
  }

  const itemsMap = items.map((item: Room, index: number) => (
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
  ))

  return <div className='w-11/12 h-full grid gap-x-[24px] z-0 gap-y-10 grid-cols-5'>{itemsMap}</div>
}
