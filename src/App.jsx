import React, { useState, useCallback, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import LearnComponent from './components/LearnComponent';
import LearnJsx from './components/LearnJsx';
import LearnProps from './components/LearnProps';
import LearnEvent from './components/LearnEvent';
import LearnLiftingStateUp from './components/LearnLiftingStateUp';
import LearnState from './components/LearnState';
import CounterApp from './components/CounterApp';
import LearnConditionalRendering from './components/LearnConditionalRendering';
import Leranmap from './components/LearnMap';
import LearnInlineCss from './components/LearnInlineCss';
import LearnForm from './components/LearnForm';
import TodoApplication from './components/Todo_Application/Maintodo';
import UseState from './components/Hooks/UseState';
import UseEffect from './components/Hooks/UseEffect';
import UseMemo from './components/Hooks/UseMemo';
import UseRef from './components/Hooks/UseRef';
import UseCallback from './components/Hooks/UseCallback';
import Home from './components/React_Router/Home';
import About from './components/React_Router/About';
import Contact from './components/React_Router/Contact';

const App = () => {

    let roll = 101;
    const getData = (data) => {
        console.log(data);
    }

    const [isVisible, setVisible] = useState(true);

    const [add, setAdd] = useState(0);

    const Learning = useCallback(() => {
        // some operations
    }, [])


    // Routing
    // BrowserRouter, Routes, Route
    // What is link in react ?

    return (
        <>
            <div className='w-full h-screen bg-zinc-900 flex justify-center items-center relative'>
                <div>
                    {/* <LearnComponent />
                    <LearnJsx />
                    <LearnProps name="whoami" roll={roll} /> */}
                    {/* <LearnEvent /> */}
                    {/* <LearnLiftingStateUp myClick={getData} /> */}
                    {/* <LearnState /> */}
                    {/* <CounterApp /> */}
                    {/* <LearnConditionalRendering /> */}
                    {/* <Leranmap /> */}
                    {/* <LearnInlineCss /> */}
                    {/* <LearnForm /> */}
                    {/* <UseState /> */}
                    {/* <TodoApplication /> */}
                    {/* {isVisible ? <UseEffect /> : <></>}
                    <button className='text-white font-semibold font-mono px-3 py-1 rounded-xl bg-purple-600' onClick={() => setVisible(!isVisible)}>Cleanup</button> */}
                    {/* <UseMemo /> */}
                    {/* <UseRef /> */}
                    {/* <UseCallback Learning={Learning} />
                    <h1 className='text-white font-semibold text-xl font-mono text-center mb-3'>{add}</h1>
                    <button type='button' className='px-3 py-1 bg-rose-600 text-white font-semibold font-mono rounded-xl' onClick={() => setAdd(add + 1)}>Addition {add}</button> */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App;
