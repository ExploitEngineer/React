import { useRef, useState } from 'react';

export default function UseRef() {

    const [name, setName] = useState('whoami');

    const refElement = useRef();
    console.log(refElement);

    function Reset() {
        setName("");
        refElement.current.focus();
        refElement.current.style.color = "white";
    };

    function handleInput() {
        refElement.current.style.color = "red";
    };

    return (
        <>
            <h1>Learning useRef</h1>
            <input ref={refElement} className='input input-primary' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button className='btn btn-primary' onClick={Reset}>Reset</button>
            <button className='btn btn-secondary' onClick={handleInput}>Change Color</button>
        </>
    );
};
