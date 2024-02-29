import Image from "next/image";

export default function SearchButton({
  buttonsizeboolen,
  searchButtonHover,
}: {
  buttonsizeboolen: boolean;
  searchButtonHover: boolean;
}) {
  const handleClick = () => {
    console.log("search button click");
  };
  return (
    <div
      className={`flex ${buttonsizeboolen ? "w-12 h-12" : "w-8 h-8"}
      ${
        searchButtonHover
          ? "bg-gradient-to-l from-mainColorHoverStart via-mainColorMiddle to-mainColorHoverEnd"
          : "bg-mainColor"
      }
       rounded-full items-center justify-center`}
      onClick={handleClick}
    >
      <Image
        width={16}
        height={16}
        src="/images/naviBarIcon/searchIcon.svg"
        alt="검색 버튼"
      />
    </div>
  );
}
