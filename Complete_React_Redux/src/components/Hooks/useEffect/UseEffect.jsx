import { useState, useEffect } from 'react';

export default function UseEffect() {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(100);
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('Learning useEffect');
        const interval = setInterval(() => {
            setTime((prev => prev + 1))
        }, 1000)

        return () => { clearInterval(interval) }
    }, [number]);

    return (
        <div>
            <p>{count}</p>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment</button>
            <p>{number}</p>
            <button className='btn btn-secondary' onClick={() => setNumber(number - 1)}>Decrement</button>
            <h1>Timer: {time}</h1>
        </div>
    );
};


export function ApiFetchuseEffect() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error))
    }, []);

    console.log(data, 'data')

    return (
        <div>
            {data ? <div>{data[0].title}</div> : <p>No Data Found!</p>}
        </div>
    );
};
