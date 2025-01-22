import React from 'react'
import LearnComponent from './components/LearnComponent'
import LearnJsx from './components/LearnJsx'
import LearnProps from './components/LearnProps'
import LearnEvent from './components/LearnEvent'
import LearnLiftingStateUp from './components/LearnLiftingStateUp'
import LearnState from './components/LearnState'
import CounterApp from './components/CounterApp'

const App = () => {

    let roll = 101;
    const getData = (data) => {
        console.log(data);
    }

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
                </div>
            </div>
        </>
    )
}

export default App;
