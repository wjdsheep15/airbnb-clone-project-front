export default function introduction({ name }: { name: string }) {
  return (
    <div>
      <h1 className='text-4xl font-extrabold dark:text-white '>{name} 님 소개</h1>
      <button
        type='button'
        className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 mt-5 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 font-bold'
      >
        프로필 수정하기
      </button>
      <br />
      <br />
      <div className='flex items-center'>
        <img src='../../image/profile1.png' alt='프로필1' />
        <span className='text-center mr-20'>거주지: Icheon-si, 한국</span>
        <img src='../../image/profile1.png' alt='프로필2' className='text-center ml-20' />
        <span>취미: 넷플릭스 보기</span>
      </div>
      <br />
      <br />
      <hr />
    </div>
  )
}
