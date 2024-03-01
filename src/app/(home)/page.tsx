import NavigationBar from "@/components/navigation/navigation";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main className="flex items-center justify-center w-full h-full">
        {/* 스크롤 설정 */}
        <div className="flex flex-row items-center justify-center space-x-10 pt-3 w-10/12 h-24">
          <div className="flex w-full h-20 grow">
            <HorizonScroll />
          </div>
          <div className="flex grow-0">
            <FitterButton />
          </div>
        </div>
      </main>
    </>
  );
}
