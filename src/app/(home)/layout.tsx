import NavigationBar from "@/components/navigation/navigation";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
}
