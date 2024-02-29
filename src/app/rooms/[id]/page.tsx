import Screen from "@/components/rooms/screen";

interface IdParams {
  params: { id: number };
}

export default function RoomDetailPage({ params: { id } }: IdParams) {
  return (
    <>
      <main>
        <div className="flex justify-center">
          <Screen id={id}/>
        </div>
      </main>
    </>
  );
}
