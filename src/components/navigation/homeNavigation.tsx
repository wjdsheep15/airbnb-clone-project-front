"use client";
import OnSearchButton from "@/components/navigation/onSearchButton";
import SearchButton from "@/components/navigation/searchButton";
import { useEffect, useRef, useState } from "react";

export default function HomeNavigation() {
  const buttonsizeboolen = true;
  const [activeButton, setActiveButton] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActiveButton(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-col h-40 mt-4 mr-3">
      <div
        className="flex flex-row h-20 justify-center items-center"
        role="group"
      >
        <button
          type="button"
          className="px-4 h-8 text-gray-900 rounded-full hover:bg-gray-100 "
        >
          숙소
        </button>

        <button
          type="button"
          className="px-4 h-8 text-gray-900 rounded-full  hover:bg-gray-100"
        >
          체험
        </button>
        <button
          type="button"
          className="px-4 h-8 text-gray-900 rounded-full hover:bg-gray-100"
        >
          온라인 체험
        </button>
      </div>

      {/* 두번쨰 버튼층 */}
      <div
        className={`flex flex-row h-[79px] justify-center items-center pb-3`}
      >
        <div
          className={`border border-gray-300 rounded-full shadow-lg flex h-full items-center  ${
            activeButton ? "bg-gray-200" : ""
          }`}
          ref={ref}
        >
          <button
            className={`h-full w-[282px] rounded-full flex flex-col pl-4 pt-3 pb-3 ${
              activeButton === 1
                ? "bg-white border border-gray-300 shadow"
                : "hover:bg-zinc-300"
            }`}
            onClick={() => setActiveButton(1)}
          >
            <span className="text-xs ml-4">여행지</span>
            <span className="text-sm mt-1 ml-4 text-gray-400">여행지 검색</span>
          </button>
          <span
            className={`text-xl ${
              activeButton === 1 || activeButton === 2
                ? "text-gray-200"
                : "text-gray-300 "
            }`}
          >
            |
          </span>
          <button
            className={`h-full w-36 rounded-full flex flex-col pl-4 pt-3 pb-3 ${
              activeButton === 2
                ? "bg-white border border-gray-300 shadow"
                : "hover:bg-zinc-300"
            }`}
            onClick={() => setActiveButton(2)}
          >
            <span className="text-xs">체크인</span>
            <span className="text-sm mt-1 text-gray-400">날짜 추가</span>
          </button>
          <span
            className={`text-lg text-gray-300 ${
              activeButton === 2 || activeButton === 3
                ? "text-gray-200"
                : "text-gray-300 "
            }`}
          >
            |
          </span>
          <button
            className={`h-full w-36 rounded-full flex flex-col pl-4 pt-3 pb-3 ${
              activeButton === 3
                ? "bg-white border border-gray-300 shadow"
                : "hover:bg-zinc-300"
            }`}
            onClick={() => setActiveButton(3)}
          >
            <span className="text-xs">체크아웃</span>
            <span className="text-sm mt-1 text-gray-400">날짜 추가</span>
          </button>
          <span
            className={`text-lg text-gray-300 ${
              activeButton === 3 || activeButton === 4
                ? "text-gray-200"
                : "text-gray-300"
            }`}
          >
            |
          </span>
          <button
            className={`flex flex-row h-full w-64 items-center rounded-full pl-3 pt-3 pb-3 relative group  ${
              activeButton === 4
                ? "bg-white border border-gray-300 shadow"
                : "group-hover:bg-inherit hover:bg-zinc-300"
            }`}
            onClick={() => setActiveButton(4)}
          >
            <span className="flex flex-col group-hover:bg-zinc-300">
              <span className={`text-xs pr-[30px]`}>여행자</span>
              <span className="text-sm mt-1 text-gray-400">게스트 추가</span>
            </span>
            <div className=" absolute right-3 group-hover:bg-inherit">
              <div className={`${activeButton === 0 ? "" : "hidden"}`}>
                <SearchButton buttonsizeboolen={buttonsizeboolen} />
              </div>
              <div className={`${activeButton === 0 ? "hidden" : ""}`}>
                <OnSearchButton />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
