import MenuIcon from '/public/images/naviBarIcon/menuIcon.svg'
import LanguageIcon from '/public/images/naviBarIcon/languageIcon.svg'
import UserIcon from '/public/images/naviBarIcon/UserIcon.svg'

export default function RightPartNavibar() {
  return (
    <>
      <button className='text-sm p-2 text-black rounded-full  hover:bg-gray-100'>
        <span>당신의 공간을 에어비엔비하세요</span>
      </button>
      <button className='h-10 w-10 flex justify-center rounded-full p-2 hover:bg-gray-100 text-black  items-center'>
        <LanguageIcon />
      </button>

      <button className='ml-2 h-[48px] w-[86px] items-center flex flex-row border border-gray-300 rounded-full text-black shadow hover:shadow-lg'>
        <MenuIcon className='ml-3 mr-3' />
        <div className='w-8 h-8'>
          <UserIcon className='w-8 h-8' />
        </div>
      </button>
    </>
  )
}
