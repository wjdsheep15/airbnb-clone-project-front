const list = [
  {
    id: 1,
    image: "/images/toolbarImage1.jpeg",
    name: "최고의 전망",
  },
  {
    id: 2,
    image: "/images/toolbarImage2.jpeg",
    name: "한적한 시골",
  },
  {
    id: 3,
    image: "/images/toolbarImage3.jpeg",
    name: "한옥",
  },
];

export default function HorizonScroll() {
  console.log("실행됨");
  console.log(list);
  //const scrollIconMap = list.map((listIndex) => {<ScrollCardView listIndex.id listIndex.image listIndex.name />})
  return (
    <div className=" h-20 flex  w-full bg-gray-400">
      <div className="overflow-x-auto overflow-y-hidden grid flex items-center space-x-3 grid-rows-1 grid-flow-col">
        {/* {scrollIconMap} */}
      </div>
    </div>
  );
}
