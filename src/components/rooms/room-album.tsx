import translateImage from "../../../image/translationImage.jpeg";

export default function RoomAlbum({ id }: { id: number }) {
  // const roomAlbum = getRoomAlbum(id);

  return (
    <>
      <div className="relative w-full h-54">
        <div className="relative flex items-center w-full h-full space-x-4 justify-between bg-white p-4 rounded-lg shadow-md">
          {/* 좌측 버튼 + 숙소명 */}
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-blue-500 transition duration-300 ease-in-out ">
              <button>
                <img src="translateImage" />
              </button>
            </span>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              숙소 이름
            </h2>
          </div>

          {/* 우측 버튼 그룹 */}
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-blue-500 transition duration-300 ease-in-out">
              공유하기
            </button>
            <button className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-blue-500 transition duration-300 ease-in-out">
              좋아요
            </button>
          </div>
        </div>

        {/* 이미지 그리드 */}
        <div className="relative w-full h-506 rounded-lg">
          <div className="grid grid-cols-4 grid-rows-4 gap-4">
            <div className="col-span-2 row-span-2 bg-gray-200">
              <button>
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=1200"
                  className="w-full h-full"
                />
              </button>
            </div>
            <div className="col-span-1 row-span-1 bg-gray-200">
              <button>
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=1200"
                  className="w-full h-full"
                />
              </button>
            </div>
            <div className="col-span-1 row-span-1 bg-gray-200">
              <button>
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=1200"
                  className="w-full h-full"
                />
              </button>
            </div>
            <div className="col-span-1 row-span-1 bg-gray-200">
              <button>
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=1200"
                  className="w-full h-full"
                />
              </button>
            </div>
            <div className="col-span-1 row-span-1 bg-gray-200">
              <button>
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=1200"
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
