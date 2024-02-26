export default function identification({ name }: { name: string }) {
  return (
    <span className="block w-[400px] h-[200px] p-6 bg-white border border-gray-200 rounded-e-3xl shadow-xl drop-shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex">
        {/* 첫 번째 가로 칸 */}
        <div className="w-2/3 mr-2 flex items-center justify-center">
          {"첫 번째 가로 칸"}
        </div>

        {/* 두 번째 가로 칸 */}
        <div className="w-1/3 ml-2 flex flex-col">
          {/* 첫 번째 세로 칸 */}
          <div className="h-1/2 mb-2">
            <h2 className="text-2xl">1</h2>
            <p className="text-xs">후기</p>
            <hr />
          </div>
          {/* 두 번째 세로 칸 */}
          <div className="h-1/2"></div>
          <h2 className="text-2xl">5</h2>
          <p className="text-xs">에어비앤비 가입 기간(년)</p>
        </div>
      </div>
    </span>
  );
}
