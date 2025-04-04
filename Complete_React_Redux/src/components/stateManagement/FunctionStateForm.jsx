import { useState } from 'react';

export default function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    return (
        <>
            <h1 className='text-2xl font-semibold font-mono text-white'>Form Handling</h1>
            <form className='flex flex-col space-y-3'>
                <input type='text' className='input input-primary' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type='email' className='input input-secondary' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='number' className='input input-info' value={age} onChange={(e) => setAge(e.target.value)} />
            </form>
        </>
    );
};
