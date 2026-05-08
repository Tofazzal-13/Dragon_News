import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { format, compareAsc } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-8'>
            <Image
                loading="eager"
                src={logo}
                width={300}
                height={300}
                alt='Logo'
                className='mx-auto'
                blurDataURL="..."
            ></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;