import React from 'react'

let model = "G11234"

const LearnJsx = () => {
    return (
        <>
            {/* React.createElement("h1", "null", "LearnJsx 1") */}
            <h1 className='text-white font-mono text-2xl font-semibold'>Learn JSX</h1>

            {/* JavaScript Expression in JSX */}
            <h1 className='font-semibold font-mono text-3xl text-teal-400'>Price {10 + 20}</h1>
            <h1 className='font-semibold font-mono text-3xl text-yellow-400'>LG {model}</h1>

            {/* Attribute in Jsx */}
            <h1 className='bg-purple-400 font-mono text-white text-2xl font-semibold'>LearnJsx 3</h1>
            <h1 className={`text-2xl text-white font-semibold font-mono bg-orange-500 ${model}`}>LearnJsx 4</h1>
        </>
    )
}

export default LearnJsx
