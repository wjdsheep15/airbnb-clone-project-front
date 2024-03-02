import Link from 'next/link'
import StarIcon from '/public/images/star.svg'
import Carousel from '@/components/itemCardView/carousel'

let slides = [
  'https://a0.muscache.com/im/pictures/2d1a28a3-212b-442c-8eb6-caaf2b1dfa82.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/ba23384d-4e10-405b-9271-b5f0363071d0.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/5b9083c0-854b-4968-96ae-5d4110388ce6.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/a4a5e030-3386-49f0-9490-19bd5b698d49.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/78695e33-5684-4df5-9bb3-09e07b4536c8.jpg?im_w=720',
]

export default function ItemCardView() {
  return (
    <div className='w-[287.8px] h-[373.41px] flex flex-col items-center justify-center space-y-2'>
      <div className='w-full h-[270.41px] m-auto rounded-lg relative'>
        <Carousel slides={slides} />
      </div>
      <div className='grid grid-cols-8 '>
        <span className='col-span-7 text-sm font-semibold'> 주소</span>
        <span className='col-span-1 flex flex-row items-center'>
          <StarIcon /> <span className='text-sm ml-1'>5.0</span>
        </span>
        <span className='col-span-8 text-sm text-mainGray'>호스트</span>
        <span className='col-span-8 text-sm text-mainGray'>3월 30일 ~ 4월 10일</span>
        <span className='col-span-8 text-sm '>₩가격</span>
      </div>
    </div>
  )
}
