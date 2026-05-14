import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div className='flex flex-col space-y-2'>
            <h2>LogIn with</h2>

            <button className='btn'>
                <FaGoogle />
                Login with google
            </button>
            <button className='btn'>
                <FaGithub />
                Login with github
            </button>


        </div>
    );
};

export default RightSidebar;