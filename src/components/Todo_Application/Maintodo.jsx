import React from 'react'
import Header from '../Todo_Application/Header'
import Todoitem from '../Todo_Application/Todoitem'
import TodoButton from '../Todo_Application/TodoButton'

const Maintodo = () => {
    return (
        <>
            <div className='bg-white p-10 rounded-xl w-[500px] min-h-[300px] flex flex-col justify-between'>
                <div>
                    <Header />
                    <Todoitem name="Eat" />
                    <Todoitem name="Code" />
                    <Todoitem name="Sleep" />
                    <Todoitem name="Repeat" />
                </div>
                <TodoButton />
            </div>
        </>
    )
}

export default Maintodo;
