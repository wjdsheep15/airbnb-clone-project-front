import SearchIcon from '/public/images/naviBarIcon/searchIcon.svg'

export default function OnSearchButton() {
  const handleClick = () => {
    alert('Div was clicked!')
  }
  return (
    <div
      className='flex w-20 h-12 bg-gradient-to-l from-mainColorHoverStart via-mainColorMiddle to-mainColorHoverEnd hover:bg-gradient-to-l hover:from-mainSearchColorStart hover:to-mainSearchColorEnd rounded-full items-center justify-center'
      onClick={handleClick}
    >
      <SearchIcon />
      <span className='ml-2 text-white'>검색</span>
    </div>
  )
}
