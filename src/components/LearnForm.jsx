import React, { useState } from 'react';

const LearnForm = () => {

    // const [firstName, setFirstName] = useState('Abdul');
    // const [lastName, setLastName] = useState('Rafay');

    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value);
    // }

    // const handleLastName = (e) => {
    //     setLastName(e.target.value);
    // }

    const [formDate, setFormData] = useState({
        firstName: 'Abdul',
        lastName: 'Rafay'
    })

    const handleChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }

    return (
        <>
            {/* Handle Elements one by one */}
            {/* <form action="">
                First Name: <input type="text" name='firstName' value={firstName} onChange={handleFirstName} /> <br />
                Last Name: <input type="text" name='lastName' value={lastName} onChange={handleLastName} /> <br />
            </form> */}
            <form action="">
                First Name: <input type="text" name='firstName' value={FormData.firstName} onChange={handleFirstName} /> <br />
                Last Name: <input type="text" name='lastName' value={FormData.lastName} onChange={handleLastName} /> <br />
            </form>
        </>
    )
}

export default LearnForm;
