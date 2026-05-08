const getCategories = async () =>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json()
  return data.data;
}


export default async function Home() {
  const categories = await getCategories()
  
  
  return (
    <div className="grid grid-cols-12 gap-2 my-[60px]">
        
        <div className="col-span-3  ">
          <h2 className="font-bold text-lg">All categories</h2>
          <ul className="flex flex-col gap-3 mt-6">
             {
            categories.news_category.map(categorie => {
              return <li key={categorie.category_id}
              className="bg-slate-100 p-2 rounded-md font-bold text-center text-md">{categorie.category_name}</li>
            }
            )
           }
          </ul>
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
