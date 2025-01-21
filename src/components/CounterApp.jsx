import React, { useState } from 'react'

const CounterApp = () => {

    const [count, setCount] = useState(0)

    const handleCounter = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <>
            <h1 className='text-white text-3xl font-smibold font-mono'>Count: {count}</h1>
            <button type='button' className='p-4 text-white bg-green-500 font-mono text-xl font-semibold rounded-xl' onClick={handleCounter}>Increase Count</button>
            <button type='button' className='p-4 text-white bg-red-500 font-mono text-xl font-semibold rounded-xl' onClick={resetCount}>Reset Count</button>
        </>
    )
}

export default CounterApp;
