import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import React from 'react';

const getCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data.data;
}
const getNewsByCategoriesId = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data = await res.json()
    return data.data;
}

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    const categories = await getCategories()
    const news = await getNewsByCategoriesId(id)
    return (
        <div className="grid grid-cols-12 gap-2 my-[60px]">

            {/* leftsidebar  */}
            <div className="col-span-3  ">
                <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
            </div>


            <div className="col-span-6   bg-purple-300">
                All news
                <div className="space-y-2">
                    {
                        news.length > 0 ? news.map(n => {
                            return <div className="border p-4 m-2 rounded-xl" key={n._id}>
                                {n.title}
                            </div>
                        }) : <h2 className='font-bold text-4xl text-center my-7'>No news found</h2>
                    } 
                </div>
            </div>
            <div className="col-span-3  ">
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default NewsCategoryPage;