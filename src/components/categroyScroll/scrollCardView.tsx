"use client";
import Image from "next/image";
import { useState } from "react";

export default function ScrollCardView({
  iconId,
  iconPath,
  iconName,
}: {
  iconId: number;
  iconPath: string;
  iconName: string;
}) {
  const [iconClick, setIconClick] = useState(0);
  console.log(iconClick);

  return (
    <div
      className={`flex h-full items-center justify-center bg-white border-b-2 ${
        iconClick ? "border-black hover:border-black" : "border-white"
      } hover:border-gray-200`}
      onClick={() => setIconClick(iconId)}
    >
      <div className="h-[48px] w-[57px] flex flex-col space-y-2 items-center justify-center">
        <Image src={iconPath} width={24} height={24} alt="최고의 전망" />
        <span className="text-xs">{iconName}</span>
      </div>
    </div>
  );
}
