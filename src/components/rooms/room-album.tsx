import Image from "next/image";

export default function RoomAlbum({ id }: { id: number }) {
  // const roomAlbum = getRoomAlbum(id);

  return (
    <>
      <div>
        <div className="pt-6">
          {/* 좌측 버튼 + 숙소명 */}
          <section>
            <div className="px-20 flex flex-wrap justify-between items-end">
              <div>
                <span className="mr-3 inline-flex">
                  <button>
                    button
                    {/* <Image
                  src="C:\ASAC\Airbnb-project\airbnb-clone-front\image\translationImage.jpeg"
                  alt={"/translationImage"}
                  width={24}
                  height={24}
                /> */}
                  </button>
                </span>
                <span className="inline-flex text-26 font-circular text-gray-900 dark:text-white">
                  <h1>
                    숙소 이름
                  </h1>
                </span>
              </div>

              {/* 우측 버튼 그룹 */}
              <div className="flex justify-end items-center font-base font-sans">
                <div className="mr-5 inline-flex">
                  <span>
                    <button>공유하기</button>
                  </span>
                </div>
                <div>
                  <span>
                    <button>좋아요</button>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 이미지 그리드
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
        </div> */}
      </div>
    </>
  );
}
