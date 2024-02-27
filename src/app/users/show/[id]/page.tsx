import Authinfo from "@/components/profile/authinfo";
import Identification from "@/components/profile/identification";
import Introduction from "@/components/profile/introduction";
import Review from "@/components/profile/review";

export default function UserProfilePage() {
  return (
    <section>
      <Introduction name="승주" />
      <Review name="승주" />
      <Identification name="승주" />
      <Authinfo name="승주" />
    </section>
  );
}
