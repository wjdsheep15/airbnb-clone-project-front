import { Metadata } from "next";
import NavigationBar from "@/components/navigation/userNavigation";

export const metadata: Metadata = {
  title: "게스트 프로필 - 에어비앤비",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
