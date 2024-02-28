"use client";
import ScrollCardView from "@/components/categroyScroll/scrollCardView";
import React, { useRef, useState } from "react";

const list = [
  {
    id: 1,
    image: "/images/toolbarImage1.jpeg",
    name: "최고의 전망",
  },
  {
    id: 2,
    image: "/images/toolbarImage2.jpeg",
    name: "한적한 시골",
  },
  {
    id: 3,
    image: "/images/toolbarImage3.jpeg",
    name: "한옥",
  },
  {
    id: 4,
    image: "/images/toolbarImage4.jpeg",
    name: "와인 농장",
  },
  {
    id: 5,
    image: "/images/toolbarImage5.jpeg",
    name: "저택",
  },
  {
    id: 6,
    image: "/images/toolbarImage6.jpeg",
    name: "방",
  },
  {
    id: 7,
    image: "/images/toolbarImage7.jpeg",
    name: "기상전외한 숙소",
  },
  {
    id: 8,
    image: "/images/toolbarImage8.jpeg",
    name: "캠핑장",
  },
  {
    id: 9,
    image: "/images/toolbarImage9.jpeg",
    name: "해변 바로 앞",
  },
  {
    id: 10,
    image: "/images/toolbarImage10.jpeg",
    name: "초소형 주택",
  },
  {
    id: 11,
    image: "/images/toolbarImage11.jpeg",
    name: "열대 지역",
  },
  {
    id: 12,
    image: "/images/toolbarImage12.jpeg",
    name: "스키 타고 출입",
  },
  {
    id: 13,
    image: "/images/toolbarImage13.jpeg",
    name: "멋진 수영장",
  },
  {
    id: 14,
    image: "/images/toolbarImage14.jpeg",
    name: "통나무 집",
  },
  {
    id: 15,
    image: "/images/toolbarImage15.jpeg",
    name: "국립공원",
  },
  {
    id: 16,
    image: "/images/toolbarImage16.jpeg",
    name: "창작 공간",
  },
  {
    id: 17,
    image: "/images/toolbarImage17.jpeg",
    name: "디자인",
  },
  {
    id: 18,
    image: "/images/toolbarImage18.jpeg",
    name: "사막",
  },
  {
    id: 19,
    image: "/images/toolbarImage19.jpeg",
    name: "인기 급상승",
  },
  {
    id: 20,
    image: "/images/toolbarImage20.jpeg",
    name: "상징적 도시",
  },
  {
    id: 21,
    image: "/images/toolbarImage21.jpeg",
    name: "보트",
  },
  {
    id: 22,
    image: "/images/toolbarImage22.jpeg",
    name: "농장",
  },
  {
    id: 23,
    image: "/images/toolbarImage23.jpeg",
    name: "북극",
  },
  {
    id: 24,
    image: "/images/toolbarImage24.jpeg",
    name: "캐슬",
  },
  {
    id: 25,
    image: "/images/toolbarImage25.jpeg",
    name: "섬",
  },
  {
    id: 26,
    image: "/images/toolbarImage26.jpeg",
    name: "트룰로",
  },
  {
    id: 27,
    image: "/images/toolbarImage27.jpeg",
    name: "신규",
  },
  {
    id: 28,
    image: "/images/toolbarImage28.jpeg",
    name: "서핑",
  },
  {
    id: 29,
    image: "/images/toolbarImage29.jpeg",
    name: "세상의 꼭대기",
  },
  {
    id: 30,
    image: "/images/toolbarImage30.jpeg",
    name: "돔하우스",
  },
  {
    id: 31,
    image: "/images/toolbarImage31.jpeg",
    name: "키즈",
  },
  {
    id: 32,
    image: "/images/toolbarImage32.jpeg",
    name: "컨테이너하우스",
  },
  {
    id: 33,
    image: "/images/toolbarImage33.jpeg",
    name: "료칸",
  },
  {
    id: 34,
    image: "/images/toolbarImage34.jpeg",
    name: "복토 주택",
  },
  {
    id: 35,
    image: "/images/toolbarImage35.jpeg",
    name: "호수 근처",
  },
  {
    id: 36,
    image: "/images/toolbarImage36.jpeg",
    name: "호숫가",
  },
  {
    id: 37,
    image: "/images/toolbarImage37.jpeg",
    name: "트리하우스",
  },
  {
    id: 38,
    image: "/images/toolbarImage38.jpeg",
    name: "캠핑카",
  },
  {
    id: 39,
    image: "/images/toolbarImage39.jpeg",
    name: "동굴",
  },
  {
    id: 40,
    image: "/images/toolbarImage40.jpeg",
    name: "A자형 주택",
  },
  {
    id: 41,
    image: "/images/toolbarImage41.jpeg",
    name: "골프장",
  },
  {
    id: 42,
    image: "/images/toolbarImage42.jpeg",
    name: "B&B",
  },
  {
    id: 43,
    image: "/images/toolbarImage43.jpeg",
    name: "Luxe",
  },
  {
    id: 44,
    image: "/images/toolbarImage44.jpeg",
    name: "유서 깊은 주택",
  },
  {
    id: 45,
    image: "/images/toolbarImage45.jpeg",
    name: "키클라데스 주택",
  },
  {
    id: 46,
    image: "/images/toolbarImage46.jpeg",
    name: "전문가급 주방",
  },
  {
    id: 47,
    image: "/images/toolbarImage47.jpeg",
    name: "유르트",
  },
  {
    id: 48,
    image: "/images/toolbarImage48.jpeg",
    name: "마차",
  },
  {
    id: 49,
    image: "/images/toolbarImage49.jpeg",
    name: "카사 파르티쿨라르",
  },
  {
    id: 50,
    image: "/images/toolbarImage50.jpeg",
    name: "민수",
  },
  {
    id: 51,
    image: "/images/toolbarImage51.jpeg",
    name: "풍차",
  },
  {
    id: 52,
    image: "/images/toolbarImage52.jpeg",
    name: "그랜트 피아노",
  },
  {
    id: 53,
    image: "/images/toolbarImage53.jpeg",
    name: "타워",
  },
  {
    id: 54,
    image: "/images/toolbarImage54.jpeg",
    name: "헛간",
  },
  {
    id: 55,
    image: "/images/toolbarImage55.jpeg",
    name: "속세를 벗어난 숙소",
  },
  {
    id: 56,
    image: "/images/toolbarImage56.jpeg",
    name: "무장애",
  },
  {
    id: 57,
    image: "/images/toolbarImage57.jpeg",
    name: "하우스보트",
  },
  {
    id: 58,
    image: "/images/toolbarImage58.jpeg",
    name: "담무소",
  },
  {
    id: 59,
    image: "/images/toolbarImage59.jpeg",
    name: "리아드",
  },
  {
    id: 60,
    image: "/images/toolbarImage60.jpeg",
    name: "해변 근처",
  },
  {
    id: 61,
    image: "/images/toolbarImage61.jpeg",
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

      if (scrollRef.current.scrollLeft === 0) {
        SetScrollPosition(0);
      } else if (
        scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
        scrollRef.current.scrollWidth
      ) {
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
        className={`h-20 w-[80px] flex items-center absolute left-0 ${
          scrollPosition === 0
            ? "hidden"
            : "bg-gradient-to-l from-transparent-70 to-white"
        }`}
      >
        <button
          className="flex items-center rounded-full border bg-white border-gray-300 "
          onClick={() => scroll(-900)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      {/* 스크롤 */}
      <div
        className="overflow-x-auto scroll-smooth overflow-y-hidden overflow-x-hidden grid flex items-center space-x-10 grid-rows-1 grid-flow-col"
        ref={scrollRef}
      >
        {listmap}
      </div>

      {/* 오른 버튼 */}
      <div
        className={`h-20 w-[50px] flex flex-row-reverse items-center absolute right-0 ${
          scrollPosition === 1
            ? "hidden"
            : "bg-gradient-to-r from-transparent-70 to-white"
        }`}
      >
        <button
          className="border border-gray-300 rounded-full"
          onClick={() => scroll(900)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
