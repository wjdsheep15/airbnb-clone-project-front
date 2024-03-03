import Link from 'next/link'
import StarIcon from '/public/images/star.svg'
import Carousel from '@/components/itemCardView/carousel'

interface Props {
  slides: Array<string>
  id: number
  host: String
  guestPreference: boolean
  price: String
  introduction: String
}

export default function ItemCardView({
  slides,
  id,
  host,
  guestPreference,
  price,
  introduction,
}: Props) {
  return (
    <div className='w-[287.8px] h-[373.41px] flex flex-col items-center justify-center space-y-2'>
      <div className='w-full h-[270.41px] m-auto rounded-lg relative'>
        <Carousel key={id} slides={slides} id={id} guestPreference={guestPreference} />
      </div>
      <Link className='grid grid-cols-8 ' href={`/rooms/${id}`}>
        <span className='col-span-7 text-sm font-semibold'> {introduction} </span>
        <span className='col-span-1 flex flex-row items-center'>
          <StarIcon /> <span className='text-sm ml-1'>5.0</span>
        </span>
        <span className='col-span-8 text-sm text-mainGray'>{host}</span>
        <span className='col-span-8 text-sm text-mainGray'>3월 30일 ~ 4월 10일</span>
        <span className='col-span-8 text-sm pt-2 font-medium'>
          ₩{price} <span className='text-sm font-extralight'>/박</span>
        </span>
      </Link>
    </div>
  )
}
