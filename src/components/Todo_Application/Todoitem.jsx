import React from 'react'

const Todoitem = (props) => {
    return (
        <>
            <li className='flex items-center justify-between px-2'>
                <div className='flex font-mono gap-2'>
                    <input type="checkbox" />
                    <p>{props.name}</p>
                </div>
                <p>...</p>
            </li>
        </>
    )
}

export default Todoitem;
