import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='flex flex-col'>
            <p className='mb-10'>Count: {count}</p>
            <div className='flex flex-col space-y-3'>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
                <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>Decrement</button>
                <button className='btn btn-info' onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
};
