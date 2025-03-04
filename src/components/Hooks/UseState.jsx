import { useState } from 'react';

const UseState = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className='text-white font-mono font-semibold flex gap-8 items-center'>
                <button type='button' className='bg-red-700 px-6 text-4xl rounded-xl' onClick={() => setCount(count - 1)}>-</button>
                <h6 className='text-4xl'>Number is {count % 2 === 0 ? "Even" : "Odd"}</h6>
                <span className='text-4xl'>{count}</span>
                <button type='button' className='bg-lime-600 px-6 text-4xl rounded-xl' onClick={() => setCount(count + 1)}>+</button>
            </div >
        </>
    )
}

export default UseState;
