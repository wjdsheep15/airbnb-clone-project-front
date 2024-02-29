import LanguageImage from '@/components/navigation/languageImage'
import MenuImage from '@/components/navigation/menuImage'
import UserNavigationImge from '@/components/navigation/userNavigationImage'

export default function RightPartNavibar() {
  return (
    <>
      <button className='text-sm p-2 text-black rounded-full  hover:bg-gray-100'>
        당신의 공간을 에어비엔비하세요
      </button>
      <button className='h-10 w-10 flex justify-center rounded-full p-2 hover:bg-gray-100 text-black  items-center'>
        <LanguageImage />
      </button>

      <button className='ml-2 h-[48px] w-[86px] items-center flex flex-row border border-gray-300 rounded-full text-black shadow hover:shadow-lg'>
        <MenuImage />
        <UserNavigationImge />
      </button>
    </>
  )
}
