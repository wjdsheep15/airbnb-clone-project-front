import FitterButton from "@/components/categroyScroll/fillterButton";
import HorizonScroll from "@/components/categroyScroll/horizonScroll";
import NavigationBar from "@/components/navigation/navigation";

export default async function HomePage() {

  const result = await fetch(`http://localhost:3000/api/`);
  const inner = await result.json();
  const categroyIconData = inner.data;

  return (
    <>
      <NavigationBar />
      <main className="flex items-center justify-center w-full h-full">
        {/* 스크롤 설정 */}
        <div className="flex flex-row items-center justify-center space-x-10 pt-3 w-10/12 h-24">
          <div className="flex w-full h-20 grow">
            <HorizonScroll iconList={categroyIconData.Category} />
          </div>
          <div className="flex grow-0">
            <FitterButton />
          </div>
        </div>
      </main>
    </>
  );
}
