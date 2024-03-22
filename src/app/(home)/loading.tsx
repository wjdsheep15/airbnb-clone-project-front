export default function Loading() {
  return (
    <>
      <div className='animate-pulse flex flex-col w-full h-full justify-center items-center'>
        <div className='flex w-[91.16%]  h-20'>
          <div className='flex w-full h-20 justify-center items-center relative'>
            <div className='flex bg-slate-200 w-36 h-16 ml-1 rounded absolute left-0'></div>

            <div className='flex grow top-0  absolute translate(-50%, -50%) sm:flex sm:top-14 md:flex  md:top-14 lg:flex lg:top-0 xl:flex xl:top-0 2xl:flex 2xl:top-0'>
              <div className='flex flex-row h-20 gap-x-3 justify-center items-center'>
                <button className={`w-10 h-8 bg-slate-200  rounded-full `}></button>

                <button className={`w-10 h-8 bg-slate-200  rounded-full `}></button>
                <button className=' w-10 h-8 bg-slate-200 rounded-full'></button>
              </div>
            </div>

            <div className='h-20 w-[400px] flex-none flex items-center absolute right-0 '>
              <div className='inline-flexv w-full h-full flex justify-end items-center'>
                <button className='w-24 h-9 mr-3 bg-slate-200 rounded-full  '></button>
                <button className='h-10 w-10 bg-slate-200 flex  rounded-full '></button>
                <div>
                  <button
                    className={`ml-2 h-[48px] w-[86px] bg-slate-200  border border-gray-300 rounded-full `}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-20 w-full flex justify-center items-center'>
          <div className='rounded-full h-[66px] w-[850px] bg-slate-200'></div>
        </div>

        <div className='flex mt-5 items-center justify-center w-[91.16%] h-24'>
          <div className='flex w-full bg-slate-200 h-20'>
            <div className='flex grow-0 '></div>
          </div>
        </div>

        <div className='w-full h-auto flex justify-center mt-3'>
          <div className='w-11/12 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  auto-cols-max gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 z-0'>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
            <div className='w-[251px] h-[366px] rounded-lg bg-slate-200'></div>
          </div>
        </div>
      </div>
    </>
  )
}
