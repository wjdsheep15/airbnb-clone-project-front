"use client";
import ScrollCardView from "@/components/categroyScroll/scrollCardView";
import React, { useEffect, useRef, useState } from "react";
import LeftButtonIcon from "/public/images/LeftButtonIcon.svg";
import RightButtonIcon from "/public/images/RightButtonIcon.svg";

interface Props {
  iconList: {
    id: number;
    image: string;
    name: string;
  }[];
}
export default function HorizonScroll(iconList : Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, SetScrollPosition] = useState(0);
  const [selectedIconId, setSelectedIconId] = useState(0);

  const listmap = iconList.iconList.map((listIndex) => (
    <ScrollCardView
      key={listIndex.id}
      iconId={listIndex.id}
      iconPath={listIndex.image}
      iconName={listIndex.name}
      selectedIconId={selectedIconId}
      onSelectIcon={setSelectedIconId}
    />
  ));

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
      
      if (scrollRef.current.scrollLeft + scrollOffset < 200) {
        SetScrollPosition(0);
        scrollRef.current.scrollLeft = 0;
      } else if (scrollRef.current.scrollLeft + scrollOffset > 3500) {
        SetScrollPosition(1);
        scrollRef.current.scrollLeft += scrollOffset;
      } else {
        SetScrollPosition(2);
      }
    }
  };

  return (
    <div className=" h-20 flex w-full grow items-center relative">
      {/* 왼쪽 버튼 */}
      <div
        className={`h-20 w-[70px] flex items-center absolute left-0 ${
          scrollPosition === 0
            ? "hidden"
            : "bg-gradient-to-l from-transparent-70 from-10% via-white to-white"
        }`}
      >
        <button
          className="flex items-center rounded-full border bg-white border-gray-300 p-2"
          onClick={() => scroll(-1000)}
        >
          <LeftButtonIcon />
        </button>
      </div>
      {/* 스크롤 */}
      <div
        className="overflow-x-auto h-full scroll-smooth overflow-y-hidden overflow-x-hidden grid flex items-center space-x-8 grid-rows-1 grid-flow-col scroll-pr-10"
        ref={scrollRef}
      >
        {listmap}
      </div>

      {/* 오른 버튼 */}
      <div
        className={`h-20 w-[70px] flex flex-row-reverse items-center absolute right-0 ${
          scrollPosition === 1
            ? "hidden"
            : "bg-gradient-to-r from-transparent-70 from-10% via-white to-white"
        }`}
      >
        <button
          className="border border-gray-300 rounded-full p-2"
          onClick={() => scroll(1000)}
        >
          <RightButtonIcon />
        </button>
      </div>
    </div>
  );
}
