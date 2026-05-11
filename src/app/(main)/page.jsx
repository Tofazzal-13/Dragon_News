import LeftSidebar from "@/components/homepage/news/LeftSidebar";

const getCategories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json()
  return data.data;
}


export default async function Home() {
  const categories = await getCategories()


  return (
    <div className="grid grid-cols-12 gap-2 my-[60px]">

      {/* leftsidebar  */}
      <div className="col-span-3  ">
        <LeftSidebar categories={categories} activeId={"05"}></LeftSidebar>
      </div>


      <div className="col-span-6 font-bold text-3xl bg-purple-300">
        All news
      </div>
      <div className="col-span-3 font-bold text-3xl bg-yellow-400">
        social icon
      </div>
    </div>
  );
}
