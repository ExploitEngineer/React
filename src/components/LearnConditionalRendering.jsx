import { h1 } from 'framer-motion/client';
import React, { useState } from 'react'

const LearnConditionalRendering = () => {
    const status = true;
    cosnt [isLogin, setIsLogin] = useState(false);
    return (
        <>
            {status && <h1 className='font-semibold text-2xl text-white font-mono'>Hello there !</h1>}
            {isLogin ? (<><h1>Dashboard Page</h1></>) : (<><h1>Login Page</h1></>)}
        </>
    )
}

export default LearnConditionalRendering;
