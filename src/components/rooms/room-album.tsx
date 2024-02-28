import Image from "next/image";

export default function RoomAlbum({ id }: { id: number }) {
  // const roomAlbum = getRoomAlbum(id);

  return (
    <>
      <div>
        {/* 이미지 그리드 */}
        <div className="flex justify-center">
          <div className="grid grid-cols-4 grid-rows-2 gap-4 px-20 pt-6 md:h-[340px] lg:h-[450px] md:w-[800px] lg:w-[1250px]">
            <div className="col-span-2 row-span-2 aspect-w-1 aspect-h-1">
              <button className="relative w-full h-full">
                <Image
                  src={
                    "/images/rooms/2b37bfd0-8af5-4cb7-9452-ea240297bbb7.webp"
                  }
                  alt={"image1"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tl-md rounded-bl-lg"
                />
              </button>
            </div>
            <div className="col-span-1 row-span-1 aspect-w-1 aspect-h-1">
              <button className="relative w-full h-full">
                <Image
                  src={
                    "/images/rooms/145c26b8-ca6f-4835-992c-ea98e36ee2d8.webp"
                  }
                  alt={"image2"}
                  layout="fill"
                  objectFit="cover"
                />
              </button>
            </div>
            <div className="col-span-1 row-span-1 aspect-w-1 aspect-h-1">
              <button className="relative w-full h-full">
                <Image
                  src={
                    "/images/rooms/666d410d-6e3f-4801-91fd-4fb1afe5f7d3.webp"
                  }
                  alt={"image3"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tr-md rounded-br-lg"
                />
              </button>
            </div>
            <div className="col-span-1 row-span-1 aspect-w-1 aspect-h-1">
              <button className="relative w-full h-full">
                <Image
                  src={
                    "/images/rooms/5283e5f3-f75e-4b52-8b20-ab1dc01f7cf6.webp"
                  }
                  alt={"image4"}
                  layout="fill"
                  objectFit="cover"
                />
              </button>
            </div>
            <div className="col-span-1 row-span-1 aspect-w-1 aspect-h-1">
              <button className="relative w-full h-full">
                <Image
                  src={
                    "/images/rooms/ba01a6af-2f73-4732-85cf-76eb1f2c3a05.webp"
                  }
                  alt={"image5"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tr-md rounded-br-lg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
