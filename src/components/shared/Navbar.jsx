import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"


const Navbar = () => {
    return (
       <div className='container mx-auto '>
         <div className='flex justify-between items-center mt-6'>
            <div>

            </div>

            <div  className='mx-auto'>
                <ul className='flex justify-between items-center gap-3 text-gray-600'>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/aboutUs"}>About</Link>
                    </li>
                    <li>
                        <Link href={"/career"}>Career</Link>
                    </li>
                
                </ul>
            </div>


            <div className='flex justify-between items-center gap-4'>
                <Image 
                src={userAvatar}
                 alt='user avator'
                 width={40}
                 height={40}
                 ></Image>
                 <button className='btn btn-primary'> 
                    <Link href={"/login"}>Login</Link>
                 </button>
            </div>

         </div>
       </div>
    );
};

export default Navbar;