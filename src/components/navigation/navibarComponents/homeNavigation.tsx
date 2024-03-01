"use client";
import OnSearchButton from "@/components/navigation/navibarButtons/onSearchButton";
import SearchButton from "@/components/navigation/navibarButtons/searchButton";
import { useEffect, useRef, useState } from "react";

export default function HomeNavigation() {
  const buttonsizeboolen = true;
  const [searchButtonHover, setSearchButtonHover] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const [topActivityMenu, setTopActivityMenu] = useState(true);
  const ref = useRef<any>(null);
  const [inputValue, setInputValue] = useState("");

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
          className={`px-4 h-8 p-3 text-gray-900 flex items-center rounded-full ${
            topActivityMenu ? "hover:bg-inherit" : "hover:bg-gray-100"
          }`}
          onClick={() => setTopActivityMenu(true)}
        >
          <span
            className={`${topActivityMenu ? "text-black" : "text-gray-400"}`}
          >
            숙소
          </span>
        </button>

        <button
          type="button"
          className={`px-4 h-8 text-gray-900 rounded-full  ${
            topActivityMenu ? "hover:bg-gray-100" : "hover:bg-inherit"
          }`}
          onClick={() => setTopActivityMenu(false)}
        >
          <span
            className={`${topActivityMenu ? "text-gray-400" : "text-black"}`}
          >
            체험
          </span>
        </button>
        <button type="button" className="px-4 h-8 text-gray-900 rounded-full">
          온라인 체험
        </button>
      </div>

      {/* 두번쨰 버튼층 */}
      <div
        className={`flex flex-row h-[79px] justify-center items-center pb-3`}
      >
        <div
          className={`border border-gray-300 rounded-full shadow-lg flex h-full items-center  ${
            activeButton ? "bg-navigatorOneLayoutColor" : ""
          }`}
          ref={ref}
        >
          <button
            className={`h-full w-[282px] rounded-full flex flex-col pl-4 pt-3 pb-3 group ${
              activeButton === 1
                ? "bg-white border border-gray-300 shadow"
                : "hover:bg-navigatorTwoLayoutColor"
            }`}
            onClick={() => setActiveButton(1)}
          >
            <span className="text-xs ml-4">여행지</span>
            {/* <span className="text-sm mt-1 ml-4 text-gray-400">여행지 검색</span> */}
            <input
              placeholder="여행지 검색"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`text-sm mt-1 ml-4 w-52 bg-inherit group-focus:active focus:outline-none text-gray-400 ${
                activeButton === 1 ? "active" : ""
              }`}
            />
          </button>
          <span
            className={`text-xl ${
              activeButton === 1 ||
              activeButton === 2 ||
              (topActivityMenu === false && activeButton === 3)
                ? "text-gray-200"
                : "text-gray-300 "
            }`}
          >
            |
          </span>
          <div
            className={`h-full w-72 flex flex-row items-center ${
              topActivityMenu ? "" : "hidden"
            }`}
          >
            <button
              className={`h-full w-36 rounded-full flex flex-col pl-4 pt-3 pb-3 ${
                activeButton === 2
                  ? "bg-white border border-gray-300 shadow"
                  : "hover:bg-navigatorTwoLayoutColor"
              }`}
              onClick={() => setActiveButton(2)}
            >
              <span className="text-xs">체크인</span>
              <span className="text-sm mt-1 text-gray-400">날짜 추가</span>
            </button>
            <span
              className={`text-lg ${
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
                  : "hover:bg-navigatorTwoLayoutColor"
              }`}
              onClick={() => setActiveButton(3)}
            >
              <span className="text-xs">체크아웃</span>
              <span className="text-sm mt-1 text-gray-400">날짜 추가</span>
            </button>
          </div>
          <div
            className={`h-full w-72 flex flex-row items-center ${
              topActivityMenu ? "hidden" : ""
            }`}
          >
            <button
              className={`h-full w-full rounded-full flex flex-col pl-4 pt-3 pb-3 ${
                activeButton === 3
                  ? "bg-white border border-gray-300 shadow"
                  : "hover:bg-navigatorTwoLayoutColor"
              }`}
              onClick={() => setActiveButton(3)}
            >
              <span className="text-xs">날짜</span>
              <span className="text-sm mt-1 text-gray-400">날짜 추가</span>
            </button>
          </div>
          <span
            className={`text-lg ${
              activeButton === 3 || activeButton === 4
                ? "text-gray-200"
                : "text-gray-300"
            }`}
          >
            |
          </span>

          <div className="flex flex-row h-full w-64 items-center rounded-full pt-3 pb-3 relative">
            <button
              className={`flex-grow pt-3 pb-3 pl-3 flex rounded-full group ${
                activeButton === 4
                  ? "bg-white border border-gray-300 shadow"
                  : "hover:bg-navigatorTwoLayoutColor"
              }`}
              onClick={() => setActiveButton(4)}
            >
              <span
                className={`flex flex-col  ${
                  activeButton === 4
                    ? "group-hover:bg-white"
                    : "group-hover:bg-navigatorTwoLayoutColor"
                }`}
              >
                <span className={`text-xs pr-[30px]`}>여행자</span>
                <span className="text-sm mt-1 text-gray-400">게스트 추가</span>
              </span>
            </button>
            <div className="absolute right-3">
              <div
                className={`${activeButton === 0 ? "" : "hidden"}`}
                onMouseEnter={() => {
                  setSearchButtonHover(true);
                }}
                onMouseLeave={() => {
                  setSearchButtonHover(false);
                }}
              >
                <SearchButton
                  buttonsizeboolen={buttonsizeboolen}
                  searchButtonHover={searchButtonHover}
                />
              </div>
              <div className={`${activeButton === 0 ? "hidden" : ""}`}>
                <OnSearchButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}