import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div className='flex flex-col space-y-2'>
            <h2>LogIn with</h2>

            <button className='flex items-center gap-2 border p-2 justify-center'>
                <FaGoogle />
                Login with google
            </button>
            <button className='flex items-center gap-2 border p-2 justify-center'>
                <FaGithub />
                Login with github
            </button>


        </div>
    );
};

export default RightSidebar;