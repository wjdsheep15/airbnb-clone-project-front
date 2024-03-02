import Image from 'next/image'

export default function RoomAlbum({ images }: { images: string[] }) {
  // const roomAlbum = getRoomAlbum(id);

  return (
    <>
      <div>
        {/* 이미지 그리드 */}
        <div className='flex justify-center'>
          <div className='grid grid-cols-4 grid-rows-2 gap-4 px-20 pt-6 md:h-[340px] lg:h-[450px] md:w-[800px] lg:w-[1250px]'>
            <div className='col-span-2 row-span-2 aspect-w-1 aspect-h-1'>
              <button className='relative w-full h-full'>
                <Image
                  src={images[0]}
                  alt={'image1'}
                  fill
                  className='object-cover rounded-tl-md rounded-bl-lg'
                />
              </button>
            </div>
            <div className='col-span-1 row-span-1 aspect-w-1 aspect-h-1'>
              <button className='relative w-full h-full'>
                <Image src={images[1]} alt={'image2'} fill className='object-cover ' />
              </button>
            </div>
            <div className='col-span-1 row-span-1 aspect-w-1 aspect-h-1'>
              <button className='relative w-full h-full'>
                <Image
                  src={images[2]}
                  alt={'image3'}
                  fill
                  className='object-cover rounded-tr-md rounded-br-lg'
                />
              </button>
            </div>
            <div className='col-span-1 row-span-1 aspect-w-1 aspect-h-1'>
              <button className='relative w-full h-full'>
                <Image src={images[3]} alt={'image4'} fill className='object-cover' />
              </button>
            </div>
            <div className='col-span-1 row-span-1 aspect-w-1 aspect-h-1'>
              <button className='relative w-full h-full'>
                <Image
                  src={images[4]}
                  alt={'image5'}
                  fill
                  className='object-cover rounded-tr-md rounded-br-lg'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
