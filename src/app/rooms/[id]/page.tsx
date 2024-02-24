import NavigationBar from "@/components/navigation";
import RoomAlbum from "@/components/rooms/room-album";

interface IdParams {
  params: { id: number };
}

export default function RoomDetailPage({ params: { id } }: IdParams) {
  return (
    <>
      <div className="w-988 h-80">
        <NavigationBar />
      </div>
      <main className="w-988 h-full">
        <div className="relative w-full h-full">
          <RoomAlbum id={id} />
        </div>
      </main>
    </>
  );
}
