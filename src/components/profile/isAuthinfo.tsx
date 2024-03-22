import Image from 'next/image'

export default function authinfo({ name }: { name: string }) {
  return (
    <div className='relative mt-4 block w-[342px] h-[300px] p-6 bg-white border border-gray-200 rounded-s-3xl  rounded-e-3xl shadow left-[10px] '>
      <div className='flex flex-col'>
        <div className='h-1/3'>
          {/* flex 세로 칸 위 */}
          <h2 className='font-bold text-2xl mt-2  '>{name} 님의 인증 정보</h2>
        </div>

        {/** 신분증 */}
        <div className='mt-4 flex items-center'>
          <Image
            src='/images/profile3.png'
            alt='프로필1'
            className='text-center mr-4'
            width={15}
            height={15}
          />
          <span className='text-center mr-20 '>신분증</span>
          {/**이메일 주소 */}
        </div>
        <div className='mt-4 flex items-center'>
          <Image
            src='/images/profile3.png'
            alt='프로필1'
            className='text-center mr-4'
            width={15}
            height={15}
          />
          <span className='text-center mr-20 '>이메일 주소</span>
        </div>
        {/**전화 번호 */}
        <div className='mt-4 flex items-center'>
          <Image
            src='/images/profile3.png'
            alt='프로필1'
            className='text-center mr-4'
            width={15}
            height={15}
          />
          <span className='text-center mr-20 '> 전화 번호</span>
        </div>
        <a
          href='#'
          className='relative font-semibold underline text-gray-900 decoration-black bottom-[-30px]'
        >
          본인 인증 절차 자세히 알아보기
        </a>
      </div>
    </div>
  )
}
