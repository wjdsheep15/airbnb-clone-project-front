import Authinfo from "@/components/profile/authinfo";
import Identification from "@/components/profile/identification";
import Introduction from "@/components/profile/introduction";
import Review from "@/components/profile/review";

export default function UserProfilePage() {
  return (
    <section className="relative flex top-[40px] ">
      <div className="relative w-1/3 left-[200px]">
        <Identification name="승주" />
        <Authinfo name="승주" />
      </div>
      <div className="w-2/3">
        <Introduction name="승주" />
        <Review name="승주" />
      </div>
    </section>
  );
}
