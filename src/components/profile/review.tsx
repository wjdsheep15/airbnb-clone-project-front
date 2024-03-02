export default function review({ name }: { name: string }) {
  return (
    <div>
      <h3 className='font-bold text-2xl dark:text-white mt-10'>{name} 님에 대한 호스트 후기</h3>
      <br />
      <div className='flex'>
        {/*왼쪽 후기 박스*/}
        <span className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h5 className='mb-2 text-base tracking-tight text-gray-900 dark:text-white'>
            항상 인사해주시고 쓰레기도 다 정리하고 가신 최고의 게스트입니다. 다음에도 방문해주세요!!
          </h5>
          {/*오른쪽 후기 박스*/}
        </span>
        <span className='ml-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h5 className='mb-2 text-base tracking-tight text-gray-900 dark:text-white'>
            공기 좋은 강원도라고 칭찬을 많이 해주신 손님 친절함에 감사합니다! 다음주에 또 와주세요!
          </h5>
        </span>
      </div>
      <button
        type='button'
        className='font-bold rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 mt-5 border border-gray-800 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 '
      >
        후기 표시하기
      </button>
      <br />
      <br />
      <hr />
      <a
        href='#'
        className='font-bold font-black rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 mt-5 border border-gray-800 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300'
      >
        내가 작성한 후기
      </a>
    </div>
  )
}
