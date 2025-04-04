import { useState } from 'react';

export function ControlledForm() {

    const [name, setName] = useState("John");
    const [password, setPassword] = useState('');

    function handleChange(e) {
        console.log(e.target.value);
        setName(e.target.value);
    };

    function handlePassword(e) {
        setPassword(e.target.value);
    };

    return (
        <>
            <form>
                <label htmlFor="username"></label>
                <input className='input input-primary' id='username' type="text" onChange={handleChange} value={name} />
                <label htmlFor="password"></label>
                <input className='input input-info' id='password' type="password" onChange={handlePassword} value={password} />
            </form>
        </>
    )
}
