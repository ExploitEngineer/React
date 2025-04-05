import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='text-center font-semibold font-mono'>
            <h1 className='text-xl'>About</h1>
            <div className='space-y-3 mt-5 flex flex-col'>
                <Link className='btn btn-primary' to='/'>Home</Link>
                <Link className='btn btn-secondary' to='/contact'>Contact</Link>
            </div>
        </div>
    );
};

export default About;
