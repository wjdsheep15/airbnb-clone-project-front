export default function review({ name }: { name: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold dark:text-white mt-10">
        {name} 님에 대한 호스트 후기
      </h3>
    </div>
  );
}
