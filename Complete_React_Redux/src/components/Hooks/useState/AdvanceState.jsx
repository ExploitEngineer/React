import { useState } from 'react';

export default function AdvanceState() {

    const [allValues, setAllValues] = useState({ firstname: 'Abdul', lastname: 'Rafay', address: { city: 'Islamabad', country: 'Pakistan' } }); {/*  Nested state update */ }
    const [task, setTask] = useState(["Learn react", "Build Project"]);

    function expensive() {
        console.log('expensive');
        return 10;
    };

    const [count, setCount] = useState(() => expensive()); {/*  concept of lazy initilization */ }

    function handleClick() {
        setAllValues({ ...allValues, firstname: 'Zain', lastname: 'Shah', address: { ...allValues.address, city: 'bhopal' } });
    };

    const handleTask = () => {
        setTask([...task, 'learn nextJs', 'learn Express']);
    };

    return (
        <div className='space-y-10'>
            <div className='space-y-4 mt-10'>
                <h1>My firstname is {allValues.firstname} and lastname is {allValues.lastname} and city is {allValues.address.city} and country is {allValues.address.country}</h1>
                <button className='btn btn-primary' onClick={handleClick}>Update</button>
            </div>
            <div>
                {
                    task.map((val, key) => {
                        return (
                            <li key={key}>{val}</li>
                        )
                    })
                }
                <button className='btn btn-primary' onClick={handleTask}>Add task</button>
            </div>
            <div>
                <p>{count}</p>
                <button className='btn btn-secondary' onClick={() => { setCount(count + 1) }}>Click</button>
            </div>
        </div>
    );
};
