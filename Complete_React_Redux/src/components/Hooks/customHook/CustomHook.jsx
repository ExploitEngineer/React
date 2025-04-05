import useCounter from './useCounter';

export default function CustomHook() {

    const [count, Increment, Decrement] = useCounter();

    return (
        <div className='flex flex-col justify-center text-center font-mono space-y-3'>
            <h1 className='text-xl font-semibold'>{count}</h1>
            <button className='btn btn-primary' onClick={Increment}>Increment</button>
            <button className='btn btn-secondary' onClick={Decrement}>Decrement</button>
        </div>
    );
};
