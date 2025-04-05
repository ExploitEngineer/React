import React from 'react';
import Component1 from './Component1';
import { useContext } from 'react';
import { CounterContext } from './context/context';

const Button = () => {

    const value = useContext(CounterContext);
    const { setCount, count } = value;

    return (
        <div>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}><span><Component1 /></span>I am a button</button>
        </div>
    )
}

export default Button;
