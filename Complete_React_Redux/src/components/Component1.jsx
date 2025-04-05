import React from 'react';
import { useContext } from 'react';
import { CounterContext } from './context/context';

const Component1 = () => {

    const value = useContext(CounterContext);

    return (
        <div>
            <p>{value.count}</p>
        </div>
    )
}

export default Component1;
