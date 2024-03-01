"use client";
import Image from "next/image";

type NewType = {
  iconId: number;
  iconPath: string;
  iconName: string;
  selectedIconId: number;
  onSelectIcon: (id: number) => void;
};

export default function ScrollCardView({
  iconId,
  iconPath,
  iconName,
  selectedIconId,
  onSelectIcon,
}: NewType) {
  const isSelected = iconId === selectedIconId;

  return (
    <div
      className={`flex h-full items-center justify-center bg-white border-b-2 group ${
        isSelected
          ? "border-black hover:border-black "
          : "border-white hover:border-gray-200" 
      } `}
      onClick={() => onSelectIcon(iconId)}
    >
      <div className={`h-[48px] w-[57px] flex flex-col space-y-2 items-center justify-center `}>
       

        <Image src={iconPath} width={24} height={24}  alt="Icon"  />
       
        <span className={`text-xs text-nowrap group-hover:text-black ${isSelected ? "text-black"  : "text-mainGray"} `}>{iconName}</span>
        
        </div>
    </div>
  );
}
