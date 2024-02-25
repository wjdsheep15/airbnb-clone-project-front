"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HomeNavigation() {
  const pathname = usePathname();

  const [pathHiddenOption, setPathHiddenOption] = useState("");

  useEffect(() => {
    if (pathname === "/") {
      setPathHiddenOption("");
    } else {
      setPathHiddenOption("hidden");
    }
  }, [pathname]);

  return (
    <div className={`${pathHiddenOption} flex flex-col h-40 mt-3`}>
      <div
        className="flex flex-row h-20 justify-center items-center"
        role="group"
      >
        <span className="h-8">
          <button
            type="button"
            className="px-4 h-8 text-gray-900 rounded-full hover:bg-gray-100 "
          >
            숙소
          </button>
        </span>

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

      <div className={`flex flex-row h-20 items-center pb-3`}>
        <div className="border border-gray-300 rounded-full shadow-lg flex h-16 items-center pb-5 ml-20 pt-5">
          <button className="h-13 w-56 rounded-full hover:bg-gray-100 flex flex-col pl-8 pt-3 pb-3">
            <span className="text-xs">여행지</span>
            <span className="text-sm mt-1 text-gray-400">여행지 검색</span>
          </button>
          <span className="text-xl text-gray-300">|</span>
          <button className="h-13 w-32 rounded-full hover:bg-gray-100 flex flex-col pl-4 pt-3 pb-3">
            <span className="text-xs">체크인</span>
            <span className="text-sm mt-1 text-gray-400">날짜 추가</span>
          </button>
          <span className="text-lg text-gray-300">|</span>
          <button className="h-13 w-32 rounded-full hover:bg-gray-100 flex flex-col pl-4 pt-3 pb-3">
            <span className="text-xs">체크아웃</span>
            <span className="text-sm mt-1 text-gray-400">날짜 추가</span>
          </button>
          <span className="text-lg text-gray-300">|</span>
          <button className="flex flex-row h-13 w-80 rounded-full pl-4 pt-3 pb-3 relative hover:bg-gray-100 ">
            <div className="flex flex-col">
              <span className="text-xs pr-[30px]">여행자</span>
              <span className="text-sm mt-1 text-gray-400">게스트 추가</span>
            </div>
            {/* <div className=" absolute right-3">
              <button className="flex w-10 h-10 bg-[#FF385C] rounded-full items-center justify-center hover:bg-[#FF999C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div> */}
          </button>
        </div>
      </div>
    </div>
  );
}
