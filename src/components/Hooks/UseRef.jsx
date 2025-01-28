import { useRef, useState } from 'react';

// what is useRef ? Dom - Manipulate
// How to use it ?

const UseRef = () => {

    const [name, setName] = useState("whoami");

    const refElement = useRef();
    console.log(refElement);

    function Reset() {
        setName("");
        refElement.current.focus();
        refElement.current.style.color = "white";
    }

    function handleInput() {
        refElement.current.style.color = "red";
        refElement.current.value = "who are you ?";
    }

    return (
        <>
            <div className='text-white font-semibold font-mono'>
                <h1 className='mb-3'>Learning <span>useRef</span></h1>
                <input ref={refElement} className='bg-zinc-500 p-2 rounded-xl border border-white' type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <button type='button' className='bg-red-500 px-3 rounded-xl py-1 mt-3 ms-1' onClick={Reset}>Reset</button>
                <button type='button' className='bg-lime-500 px-3 rounded-xl py-1 mt-3 ms-1' onClick={handleInput}>Change Color</button>
            </div>
        </>
    )
}

export default UseRef;
