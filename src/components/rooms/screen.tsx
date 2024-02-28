import RoomAlbum from "@/components/rooms/room-album";
import RoomTitle from "@/components/rooms/room-title";

/**
 * 전체 내용을 가지는 컴포넌트
 */
export default function Screen() {
  return (
    <>  
      <div className="flex flex-col max-w-[1120px]">
        <div>
            <RoomTitle />
            <RoomAlbum id={0} />
        </div>
      </div>
    </>
  );
}
