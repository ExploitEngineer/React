import { useState } from 'react';

export default function State() {

    const [count, setCount] = useState(0);
    const [state, setState] = useState({ count: 0, clicks: 0 });
    const [items, setItems] = useState([]);

    return (
        <>
            <div>
                <h3>Button Clicked - {count} time</h3>
                <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Click</button> {/* direct update */}
                <button className='btn btn-secondary' onClick={() => { setCount((prev) => prev + 1); setCount((prev) => prev + 1); }}>Click me</button> {/* Functional Update */}
            </div>
            <div>
                <h3>Button Clicked - {state.count} time</h3>
                <h3>clicks {state.clicks}</h3>
                <button className='btn btn-primary' onClick={() => { setState({ ...state, count: state.count + 1, clicks: state.clicks + 1 }) }}>Click</button>
            </div>
            <div>
                <h1>{items}</h1>
                <button className='btn btn-accent' onClick={() => setItems([...items, `${items.length + 1}`])}>Add Items</button>
            </div>
        </>
    );
};
