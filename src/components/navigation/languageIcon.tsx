import Image from "next/image";
export default function LanguageImage() {
  return (
    <Image
      width={16}
      height={16}
      src="/images/naviBarIcon/languageIcon.svg"
      alt={"언어 선택"}
    />
  );
}
