import roomsData from "../../dummyDatas/roomsData.json"

/**
 * JSON import 메서드 - 미작동
 * @param param0 id
 * @returns json data 하나
 */
// export function getRoomJson(id: number) {
//     if (!roomsData || !roomsData.Room || !Array.isArray(roomsData.Room)) {
//         return undefined;
//     }
//     return roomsData.Room.find((room) => room.id === id);
// }

export default async function RoomTitle({ id }: { id: number }) {
    /**
     * 위의 getRoomJson 사용 시
     */
    // const roomData = getRoomJson(id);

    const result = await fetch('http://localhost:3000/api/room')
    const inner = await result.json()
    const roomData = inner.data
    console.log(roomData)
    if (!roomData) {
        return <div>존재하지 않는 방입니다.</div>;
    }

  return (
    <>
      <div>
        <div className="pt-6">
          {/* 좌측 버튼 + 숙소명 */}
          <section>
            <div className="px-20 h-30 flex flex-wrap justify-between items-end">
              <div className="inline-flex">
                <span className="text-gray-900 dark:text-white text-2xl font-semibold">
                  {roomData.name}
                </span>
              </div>

              {/* 우측 버튼 그룹 */}
              <div className="flex justify-end items-center font-base font-sans">
                <div className="mr-5 flex">
                  <span>
                    <svg
                      className="w-6 h-6 inline-flex text-gray-800 dark:text-white mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"
                      />
                    </svg>
                    <button className="inline-flex">공유하기</button>
                  </span>
                </div>
                <div className="flex">
                  <span>
                    <svg
                      className="w-6 h-6 inline-flex text-gray-800 dark:text-white mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                      />
                    </svg>
                    <button className="inline-flex">좋아요</button>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
