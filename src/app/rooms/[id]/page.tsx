import NavigationBar from "@/components/navigation";
import RoomAlbum from "@/components/rooms/room-album";

interface IdParams {
  params: { id: number };
}

export default function RoomDetailPage({ params: { id } }: IdParams) {
  return (
    <>
      <main>
        <div>
          <RoomAlbum id={id} />
        </div>
      </main>
    </>
  );
}
