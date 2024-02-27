import Image from "next/image";

export default function authinfo({ name }: { name: string }) {
  return (
    <div className="relative mt-4 block w-[342px] h-[400px] p-6 bg-white border border-gray-200 rounded-s-3xl  rounded-e-3xl shadow left-[10px] ">
      <div className="flex flex-col">
        <div className="h-1/3">
          {/* 세로 칸 위 */}
          <h2 className="mt-2 text-2xl font-bold dark:text-white ">
            {name} 님의 인증 정보
          </h2>
        </div>
        <div className="mt-4 flex items-center">
          {/* 인증 정보 아이콘 */}
          <Image
            src="/images/profile3.png"
            alt="프로필1"
            className="text-center mr-4"
            width={15}
            height={15}
          />
          <span className="text-center mr-20 ">이메일 주소</span>
        </div>

        <br />
        <hr />

        <div>
          {/* 세로 칸 아래 */}
          <h2 className="mt-10 text-2xl font-bold dark:text-white ">
            본인 인증을 해주세요
          </h2>

          <h1 className="mt-6">
            에어비앤비를 통해 예약하거나 호스팅하려면 이 단계를 완료하셔야
            합니다.
          </h1>

          <button
            type="button"
            className="font-medium font-black rounded-lg text-xl px-6 py-3 text-center mb-2 mt-5  text-gray-900 border border-gray-800 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            본인 인증하기
          </button>
        </div>
      </div>
    </div>
  );
}
