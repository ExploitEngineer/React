import React, { useState } from 'react';

const UseState = () => {

    const [count, setCount] = useState(4);

    const decrementCount = () => {
        setCount(count - 1);
    }

    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div className='text-white font-mono font-semibold flex gap-8'>
                <button type='button' className='bg-red-700 px-6 text-4xl rounded-xl' onClick={decrementCount}>-</button>
                <span className='text-4xl'>{count}</span>
                <button type='button' className='bg-lime-600 px-6 text-4xl rounded-xl' onClick={incrementCount}>+</button>
            </div>
        </>
    )
}

export default UseState;
