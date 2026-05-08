import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
   {
    id:"1",
    title: "Breaking News: New Policy Announced by the Government"
   },
   {
    id:"2",
    title: "Breaking News: Sports Team Wins Championsship"
   },
   {
    id:"1",
    title: "Breaking News: Sheikh Hasina has gone forever"
   },

]


const BreakingNews = () => {
    return (
        <div className='border rounded-xl p-3 flex gap-4 bg-[#f3f3f3]'>
            <button className='btn bg-[#d72050] text-white font-semibold'>Latest</button>
            <Marquee pauseOnHover={true} speed={50}>
                {
                    news.map((n) => {
                        return <span key={n.id}>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;