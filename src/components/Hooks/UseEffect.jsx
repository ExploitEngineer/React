import { useEffect, useState } from 'react';

// what is useEffect Hook ?
// Run code during the change in lifecycle of a component

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);

    useEffect(() => {
        console.log("UseEffect Component is Mounting .....");

        return (
            () => {
                console.log("UseEffect Component is unMounting .....");
            }
        )

    }, []);   // <--- this empty array is called as dependency array

    useEffect(() => {
        console.log("Count got updated", count);
        return () => { console.log("Returning count", count) }
    }, [count]); // <--- this will run when the component is upated

    return (
        <>
            <div className='text-white font-mono font-semibold'>
                <p className='mb-3'>Count is {count}</p>
                <p className='mb-3'>Count2 is {count2}</p>
                <button type='button' className='px-3 mb-2 py-1 rounded-xl bg-yellow-400' onClick={() => setCount(count + 1)}>Update</button>
                <button type='button' className='px-3 block mb-2 py-1 rounded-xl bg-lime-400' onClick={() => setCount2(count2 + 1)}>Update2</button>
            </div>
        </>
    )
}

export default UseEffect;
