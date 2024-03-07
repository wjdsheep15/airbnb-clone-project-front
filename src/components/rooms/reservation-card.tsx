import { Button } from '@mui/material'

export default function ReservationCard({ price }: { price: string }) {
  return (
    <>
      <div className='sticky top-8'>
        <div className='relative max-w-sm max-h-sm p-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col'>
            <div className='relative flex flex-end items-center mb-6'>
              <span className='text-[22px] font-semibold tracking-tight text-gray-900 dark:text-white'>
                {`₩${price}`}
              </span>
              <span className='pl-1 text-[16px]'>/박</span>
            </div>
            <div className='relative flex flex-col bg-white border border-gray-200 rounded-lg'>
              <div className='relative w-full h-1/2 border-b-2'>
                <Button className='relative flex w-full h-full text-mainBlack'>
                  <div className='relative flex flex-col w-1/2 border-r-2'>
                    <div className='h-1/2 text-[10px] ml-0 mr-auto'>체크인</div>
                    <div className='h-1/2 text-[14px] ml-0 mr-auto'>선택된 시작날짜</div>
                  </div>
                  <div className='flex flex-col w-1/2 ml-1'>
                    <div className='text-[10px] ml-0 mr-auto'>체크아웃</div>
                    <div className='text-[14px] ml-0 mr-auto'>선택된 종료날짜</div>
                  </div>
                </Button>
              </div>
              <div className='w-full h-1/2'>
                <label>
                  <Button className='w-full h-full text-mainBlack'>버튼2</Button>
                </label>
              </div>
            </div>
            <div className='mt-6'>
              <Button className='relative w-full bg-mainColor hover:bg-mainColorHoverStart text-[16px] text-white font-semibold rounded-lg'>
                예약하기
              </Button>
            </div>
            <div className='mt-2 relative flex justify-center'>
              <span className='text-[14px] text-mainBlack'>
                예약 확정 전에는 요금이 청구되지 않습니다.
              </span>
            </div>
            <div className='flex flex-col w-full text-[16px] mt-6 space-y-4'>
              <div className='relative flex justify-between'>
                <div>
                  <span className='underline'>{`₩${price} x 숙박일수`}</span>
                </div>
                <div>
                  <span>₩총숙박비</span>
                </div>
              </div>

              <div className='relative flex justify-between'>
                <div>
                  <span className='underline'>에어비엔비 수수료</span>
                </div>
                <div>
                  <span>₩수수료</span>
                </div>
              </div>
              <div>
                <hr />
              </div>
              <div className='relative flex justify-between text-[16px] font-semibold'>
                <div>
                  <span className='underline'>총 합계</span>
                </div>
                <div>
                  <span>₩총합계</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
