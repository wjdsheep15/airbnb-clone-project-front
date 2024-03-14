import SearchIcon from '/public/images/naviBarIcon/searchIcon.svg'

export default function SearchButton({
  buttonsizeboolen,
  searchButtonHover,
}: {
  buttonsizeboolen: boolean
  searchButtonHover: boolean
}) {
  const handleClick = () => {}
  return (
    <div
      className={`flex ${buttonsizeboolen ? 'w-12 h-12' : 'w-8 h-8'}
      ${
        searchButtonHover
          ? 'bg-gradient-to-l from-mainColorHoverStart via-mainColorMiddle to-mainColorHoverEnd'
          : 'bg-mainColor'
      }
       rounded-full items-center justify-center`}
      onClick={handleClick}
    >
      <SearchIcon />
    </div>
  )
}
