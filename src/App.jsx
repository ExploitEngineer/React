import React, { useState } from 'react';
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
import UseState from './components/Hooks/UseState';
import TodoApplication from './components/Todo_Application/Maintodo';
import UseEffect from './components/Hooks/UseEffect';

const App = () => {

    let roll = 101;
    const getData = (data) => {
        console.log(data);
    }

    const [isVisible, setVisible] = useState(true);

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
                    {isVisible ? <UseEffect /> : <></>}
                    <button className='text-white font-semibold font-mono px-3 py-1 rounded-xl bg-purple-600' onClick={() => setVisible(!isVisible)}>Cleanup</button>
                </div>
            </div>
        </>
    )
}

export default App;
