"use client";
import ScrollCardView from "@/components/categroyScroll/scrollCardView";
import React, { useRef, useState } from "react";
import LeftButtonIcon from "/public/images/LeftButtonIcon.svg";
import RightButtonIcon from "/public/images/RightButtonIcon.svg";

const list = [
  {
    id: 1,
    image: "/images/categoryIcon/categoryIcon1.jpeg",
    name: "최고의 전망",
  },
  {
    id: 2,
    image: "/images/categoryIcon/categoryIcon2.jpeg",
    name: "한적한 시골",
  },
  {
    id: 3,
    image: "/images/categoryIcon/categoryIcon3.jpeg",
    name: "한옥",
  },
  {
    id: 4,
    image: "/images/categoryIcon/categoryIcon4.jpeg",
    name: "와인 농장",
  },
  {
    id: 5,
    image: "/images/categoryIcon/categoryIcon5.jpeg",
    name: "저택",
  },
  {
    id: 6,
    image: "/images/categoryIcon/categoryIcon6.jpeg",
    name: "방",
  },
  {
    id: 7,
    image: "/images/categoryIcon/categoryIcon7.jpeg",
    name: "기상전외한 숙소",
  },
  {
    id: 8,
    image: "/images/categoryIcon/categoryIcon8.jpeg",
    name: "캠핑장",
  },
  {
    id: 9,
    image: "/images/categoryIcon/categoryIcon9.jpeg",
    name: "해변 바로 앞",
  },
  {
    id: 10,
    image: "/images/categoryIcon/categoryIcon10.jpeg",
    name: "초소형 주택",
  },
  {
    id: 11,
    image: "/images/categoryIcon/categoryIcon11.jpeg",
    name: "열대 지역",
  },
  {
    id: 12,
    image: "/images/categoryIcon/categoryIcon12.jpeg",
    name: "스키 타고 출입",
  },
  {
    id: 13,
    image: "/images/categoryIcon/categoryIcon13.jpeg",
    name: "멋진 수영장",
  },
  {
    id: 14,
    image: "/images/categoryIcon/categoryIcon14.jpeg",
    name: "통나무 집",
  },
  {
    id: 15,
    image: "/images/categoryIcon/categoryIcon15.jpeg",
    name: "국립공원",
  },
  {
    id: 16,
    image: "/images/categoryIcon/categoryIcon16.jpeg",
    name: "창작 공간",
  },
  {
    id: 17,
    image: "/images/categoryIcon/categoryIcon17.jpeg",
    name: "디자인",
  },
  {
    id: 18,
    image: "/images/categoryIcon/categoryIcon18.jpeg",
    name: "사막",
  },
  {
    id: 19,
    image: "/images/categoryIcon/categoryIcon19.jpeg",
    name: "인기 급상승",
  },
  {
    id: 20,
    image: "/images/categoryIcon/categoryIcon20.jpeg",
    name: "상징적 도시",
  },
  {
    id: 21,
    image: "/images/categoryIcon/categoryIcon21.jpeg",
    name: "보트",
  },
  {
    id: 22,
    image: "/images/categoryIcon/categoryIcon22.jpeg",
    name: "농장",
  },
  {
    id: 23,
    image: "/images/categoryIcon/categoryIcon23.jpeg",
    name: "북극",
  },
  {
    id: 24,
    image: "/images/categoryIcon/categoryIcon24.jpeg",
    name: "캐슬",
  },
  {
    id: 25,
    image: "/images/categoryIcon/categoryIcon25.jpeg",
    name: "섬",
  },
  {
    id: 26,
    image: "/images/categoryIcon/categoryIcon26.jpeg",
    name: "트룰로",
  },
  {
    id: 27,
    image: "/images/categoryIcon/categoryIcon27.jpeg",
    name: "신규",
  },
  {
    id: 28,
    image: "/images/categoryIcon/categoryIcon28.jpeg",
    name: "서핑",
  },
  {
    id: 29,
    image: "/images/categoryIcon/categoryIcon29.jpeg",
    name: "세상의 꼭대기",
  },
  {
    id: 30,
    image: "/images/categoryIcon/categoryIcon30.jpeg",
    name: "돔하우스",
  },
  {
    id: 31,
    image: "/images/categoryIcon/categoryIcon31.jpeg",
    name: "키즈",
  },
  {
    id: 32,
    image: "/images/categoryIcon/categoryIcon32.jpeg",
    name: "컨테이너하우스",
  },
  {
    id: 33,
    image: "/images/categoryIcon/categoryIcon33.jpeg",
    name: "료칸",
  },
  {
    id: 34,
    image: "/images/categoryIcon/categoryIcon34.jpeg",
    name: "복토 주택",
  },
  {
    id: 35,
    image: "/images/categoryIcon/categoryIcon35.jpeg",
    name: "호수 근처",
  },
  {
    id: 36,
    image: "/images/categoryIcon/categoryIcon36.jpeg",
    name: "호숫가",
  },
  {
    id: 37,
    image: "/images/categoryIcon/categoryIcon37.jpeg",
    name: "트리하우스",
  },
  {
    id: 38,
    image: "/images/categoryIcon/categoryIcon38.jpeg",
    name: "캠핑카",
  },
  {
    id: 39,
    image: "/images/categoryIcon/categoryIcon39.jpeg",
    name: "동굴",
  },
  {
    id: 40,
    image: "/images/categoryIcon/categoryIcon40.jpeg",
    name: "A자형 주택",
  },
  {
    id: 41,
    image: "/images/categoryIcon/categoryIcon41.jpeg",
    name: "골프장",
  },
  {
    id: 42,
    image: "/images/categoryIcon/categoryIcon42.jpeg",
    name: "B&B",
  },
  {
    id: 43,
    image: "/images/categoryIcon/categoryIcon43.jpeg",
    name: "Luxe",
  },
  {
    id: 44,
    image: "/images/categoryIcon/categoryIcon44.jpeg",
    name: "유서 깊은 주택",
  },
  {
    id: 45,
    image: "/images/categoryIcon/categoryIcon45.jpeg",
    name: "키클라데스 주택",
  },
  {
    id: 46,
    image: "/images/categoryIcon/categoryIcon46.jpeg",
    name: "전문가급 주방",
  },
  {
    id: 47,
    image: "/images/categoryIcon/categoryIcon47.jpeg",
    name: "유르트",
  },
  {
    id: 48,
    image: "/images/categoryIcon/categoryIcon48.jpeg",
    name: "마차",
  },
  {
    id: 49,
    image: "/images/categoryIcon/categoryIcon49.jpeg",
    name: "카사 파르티쿨라르",
  },
  {
    id: 50,
    image: "/images/categoryIcon/categoryIcon50.jpeg",
    name: "민수",
  },
  {
    id: 51,
    image: "/images/categoryIcon/categoryIcon51.jpeg",
    name: "풍차",
  },
  {
    id: 52,
    image: "/images/categoryIcon/categoryIcon52.jpeg",
    name: "그랜트 피아노",
  },
  {
    id: 53,
    image: "/images/categoryIcon/categoryIcon53.jpeg",
    name: "타워",
  },
  {
    id: 54,
    image: "/images/categoryIcon/categoryIcon54.jpeg",
    name: "헛간",
  },
  {
    id: 55,
    image: "/images/categoryIcon/categoryIcon55.jpeg",
    name: "속세를 벗어난 숙소",
  },
  {
    id: 56,
    image: "/images/categoryIcon/categoryIcon56.jpeg",
    name: "무장애",
  },
  {
    id: 57,
    image: "/images/categoryIcon/categoryIcon57.jpeg",
    name: "하우스보트",
  },
  {
    id: 58,
    image: "/images/categoryIcon/categoryIcon58.jpeg",
    name: "담무소",
  },
  {
    id: 59,
    image: "/images/categoryIcon/categoryIcon59.jpeg",
    name: "리아드",
  },
  {
    id: 60,
    image: "/images/categoryIcon/categoryIcon60.jpeg",
    name: "해변 근처",
  },
  {
    id: 61,
    image: "/images/categoryIcon/categoryIcon61.jpeg",
    name: "스키",
  },
];

export default function HorizonScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, SetScrollPosition] = useState(0);
  const [selectedIconId, setSelectedIconId] = useState(0);

  const listmap = list.map((listIndex) => (
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
      console.log("* 스크롤 왼쪽 현재 위치 : " + scrollRef.current.scrollLeft);
      console.log("* 스크롤 현재 넓이" + scrollRef.current.scrollWidth);
      console.log(
        "* 스크롤 현재 넓이 + 조정 위치 :" +
          scrollRef.current.scrollLeft +
          scrollOffset
      );
      console.log("-----------------------");

      if (scrollRef.current.scrollLeft + scrollOffset < 200) {
        SetScrollPosition(0);
        scrollRef.current.scrollLeft = 0;
      } else if (scrollRef.current.scrollLeft + scrollOffset > 3900) {
        SetScrollPosition(1);
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
