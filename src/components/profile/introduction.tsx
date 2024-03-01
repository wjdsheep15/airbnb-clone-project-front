import Image from 'next/image'

export default function introduction({ name }: { name: string }) {
  return (
    <section>
      <h1 className='font-extrabold text-3xl  dark:text-white '>{name} 님 소개</h1>
      <button
        type='button'
        className='font-bold font-black rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 mt-5 border border-gray-800 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 '
      >
        프로필 수정하기
      </button>
      <br />
      <br />

      <div className='flex items-center'>
        <Image src='/images/profile1.png' className='mr-1' alt='프로필1' width={25} height={25} />
        <span className='text-center mr-20'>거주지: Icheon-si, 한국</span>
        <Image
          src='/images/profile2.png'
          alt='프로필2'
          className='ml-20 mr-2'
          width={25}
          height={25}
        />
        <span>취미: 넷플릭스 보기</span>
      </div>
      <br />
      <br />
      <hr />
    </section>
  )
}
