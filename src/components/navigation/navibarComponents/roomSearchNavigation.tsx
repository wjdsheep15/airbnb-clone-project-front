"use client";
import SearchButton from "@/components/navigation/navibarButtons/searchButton";

export default function RoomSearchNavigation() {
  const buttonsizeboolen = false;
  const searchButtonHover = false;
  return (
    <div className={`flex flex-row h-12 w-84 items-center`}>
      {/* 버튼 세개 */}
      <div className="border border-gray-300 rounded-full shadow flex flex-row items-center h-12">
        <button className="w-20 h-12 ml-2">
          <span className="text-sm">어디든지</span>
        </button>
        <span className="text-gray-300 ml-1 mr-1">|</span>
        <button className="w-24 h-12">
          <span className="text-sm">언제든 일주일</span>
        </button>
        <span className="text-gray-300 ml-1 mr-1">|</span>
        <button className="w-20 h-12">
          <span className="text-sm text-gray-500">게스트 추가</span>
        </button>
        <div className="w-8 h-8 flex items-center ml-3 mr-2">
          <SearchButton
            buttonsizeboolen={buttonsizeboolen}
            searchButtonHover={searchButtonHover}
          />
        </div>
      </div>
    </div>
  );
}