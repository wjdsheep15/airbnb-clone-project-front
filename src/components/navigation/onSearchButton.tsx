export default function OnSearchButton() {
  const handleClick = () => {
    alert("Div was clicked!");
  };
  return (
    <div
      className="flex w-20 h-12 bg-[#FF385C] rounded-full items-center justify-center hover:bg-[#FF999C]"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-4 h-4 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <span className="ml-2 text-white">검색</span>
    </div>
  );
}
