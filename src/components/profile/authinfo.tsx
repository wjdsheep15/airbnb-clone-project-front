export default function authinfo({ name }: { name: string }) {
  return (
    <div className="relative mt-4 block w-[350px] h-[400px] p-6 bg-white border border-gray-200 rounded-s-3xl  rounded-e-3xl shadow left-[10px] ">
      <div className="flex flex-col">
        <div>
          {/* 세로 칸 위 */}
          <h2 className="text-2xl font-bold dark:text-white mt-10">
            {name} 님의 인증 정보
          </h2>
        </div>
        <div>{/* 세로 칸 아래 */}</div>
      </div>
    </div>
  );
}

//"block max-w-sm p-6 border-gray-200"
