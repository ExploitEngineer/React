import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {

    const location = useLocation();
    const { state: { getId } } = location;

    return (
        <div className='text-center font-semibold font-mono'>
            <h1 className='text-xl'>Home and id is {getId}</h1>
            <div className='space-y-3 mt-5 flex flex-col'>
                <Link className='btn btn-primary' to='/about'>About</Link>
                <Link className='btn btn-secondary' to='/contact'>Contact</Link>
                <Link className='btn btn-success' to='/navigate'>Navigation</Link>
            </div>
        </div>
    );
};

export default Home;
