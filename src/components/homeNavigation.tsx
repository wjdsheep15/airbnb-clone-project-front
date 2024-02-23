export default function HomeNavigation() {
  return (
    <div className="flex flex-row" role="group">
      <button
        type="button"
        className="px-4  text-gray-900 rounded-full hover:bg-gray-100 "
      >
        숙소
      </button>
      <button
        type="button"
        className="px-4 text-gray-900 rounded-full  hover:bg-gray-100"
      >
        체험
      </button>
      <button
        type="button"
        className="px-4 text-gray-900 rounded-full hover:bg-gray-100"
      >
        온라인 체험
      </button>
    </div>
  );
}
