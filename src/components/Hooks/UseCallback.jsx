import { useState } from 'react';

const UseCallback = () => {

    const [value, setValue] = useState(0);

    return (
        <div className="font-semibold font-mono text-white text-xl">
            <h1 className="text-lime-500">Learning UseCallback Hook</h1>
            <h1 className="text-red-600">{value}</h1>
            <button type='button' onClick={() => setValue(value + 1)} className='py-1 px-4 bg-slate-700 text-sm rounded-lg'>Addition</button>
        </div>
    )
}

export default UseCallback
