import React from 'react';

const Header = (props) => {
    return (
        <>
            <h1 className='font-mono font-semibold text-4xl text-black mb-5'>{props.title}</h1>
        </>
    )
}

export default Header;
