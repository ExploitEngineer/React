import { useState } from 'react'

const LearnState = () => {

    // INFO: useState returns Array of 2 items
    const [number, setNumber] = useState(0)
    console.log(number);

    const handleNum = () => {
        setNumber(9)
    }

    const [position, setPosition] = useState({ x: 1, y: 2 })
    console.log("position", position)

    const handlePosition = () => {
        setPosition({ x: 4, y: 10 })
    }

    return (
        <>
            <h1 className='text-lime-300 font-semibold font-mono text-2xl'>Number {number}</h1>
            <button type='button' className='text-white bg-indigo-500 rounded-2xl font-mono font-semibold text-xl p-5' onClick={handleNum}>Update Value</button>

            <h1 className='text-lime-300 font-semibold font-mono text-2xl'>Position: {position.x} {position.y}</h1>
            <button type='button' className='text-white bg-indigo-500 rounded-2xl font-mono font-semibold text-xl p-5' onClick={handlePosition}>Change Position</button>
        </>
    )
}

export default LearnState;
