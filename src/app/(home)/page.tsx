import FitterButton from "@/components/categroyScroll/fillterButton";
import HorizonScroll from "@/components/categroyScroll/horizonScroll";
import NavigationBar from "@/components/navigation/navigation";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main className="flex items-center justify-center w-full h-full">
        <div className="flex flex-row items-center justify-center space-x-3 pt-3 w-10/12 h-24">
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
