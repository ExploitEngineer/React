import { useState, useMemo } from 'react';

const UseMemo = () => {

    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    const multiplication = useMemo(function multiply() {
        console.log("**********************");
        return add * 10;
    }, [add])

    return (
        <>
            <div className='text-white font-semibold font-mono'>
                <h1 className='mb-10'>Learning <span className='text-lime-400'>useMemo</span></h1>
                {multiplication} <br />
                <button type="button" className='px-3 py-1 me-6 mb-3 bg-red-600 rounded-xl' onClick={() => setAdd(add + 1)}>Addition</button>
                <span>{add}</span><br />
                <button type="button" className='px-3 py-1 me-6 bg-green-600 rounded-xl' onClick={() => setMinus(minus - 1)}>Substraction</button>
                <span>{minus}</span>
            </div>
        </>
    )
}

export default UseMemo;
