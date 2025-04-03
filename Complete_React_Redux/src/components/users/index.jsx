import { useState, useEffect } from 'react';

export default function Users() {

    const [usersList, setUsersList] = useState([]);
    const [pending, setPending] = useState(true);

    async function fetchAllUsers() {
        try {
            setPending(true);
            const url = 'http://dummyjson.com/users';
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`Https Error ${res.status}`);
            }
            const data = await res.json();
            if (data?.users) {
                setUsersList(data?.users)
                setPending(false);
            } else {
                setUsersList([]);
                setPending(false);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, [])

    console.log(usersList);

    if (pending) return <h1>Fetching users please wait !</h1>

    return (
        <div className="text-white font-semibold text-2xl text-center">
            <h1>All Users Lists</h1>
            <ul className='text-lg mt-10 space-y-2'>
                {
                    usersList && usersList.length > 0 ? usersList.map((userItem, key) => {
                        return (
                            <li key={key}>{userItem?.firstName} {userItem?.lastName}</li>
                        )
                    }) : <h1>No users found! Please try again</h1>
                }
            </ul>
        </div>
    )
};
