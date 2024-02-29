import Image from "next/image";

export default function MenuImage() {
  return (
    <Image
      width={16}
      height={16}
      className="ml-3 mr-3"
      src="/images/naviBarIcon/menuIcon.svg"
      alt="메뉴 아이콘"
    />
  );
}
