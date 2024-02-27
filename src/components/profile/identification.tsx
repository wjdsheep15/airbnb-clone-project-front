import Image from "next/image";

export default function identification({ name }: { name: string }) {
  return (
    <span className="relative block w-[350px] h-[200px] p-6 bg-white border border-gray-200 rounded-s-3xl  rounded-e-3xl shadow-xl drop-shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 right-[-10px]">
      <div className="flex">
        {/* 첫 번째 가로 칸 */}
        <div className="w-2/3 mr-2 flex flex-col  items-center justify-center">
          <div>
            <Image
              className="rounded-full"
              src="/images/profile1.png"
              alt="image description"
              width={60}
              height={60}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold ">{name}</h2>
          </div>
          <h1 className="text-xs font-bold"> 게스트</h1>
        </div>

        {/* 두 번째 가로 칸 */}
        <div className="w-1/3 ml-2 flex flex-col ">
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
