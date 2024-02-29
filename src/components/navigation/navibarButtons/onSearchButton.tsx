import Image from "next/image";

export default function OnSearchButton() {
  const handleClick = () => {
    alert("Div was clicked!");
  };
  return (
    <div
      className="flex w-20 h-12 bg-gradient-to-l from-mainColorHoverStart via-mainColorMiddle to-mainColorHoverEnd hover:bg-gradient-to-l hover:from-mainSearchColorStart hover:to-mainSearchColorEnd rounded-full items-center justify-center"
      onClick={handleClick}
    >
      <Image
        width={16}
        height={16}
        src="/images/naviBarIcon/searchIcon.svg"
        alt="검색 버튼"
      />
      <span className="ml-2 text-white">검색</span>
    </div>
  );
}
