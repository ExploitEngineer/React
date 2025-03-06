import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/React_Router/Home';
import About from './components/React_Router/About';
import Contact from './components/React_Router/Contact';

const App = () => {

    /* let roll = 101;
    const getData = (data) => {
        console.log(data);
    }

    const [isVisible, setVisible] = useState(true);

    const [add, setAdd] = useState(0);

    const Learning = useCallback(() => {
        // some operations
    }, []) */


    // Routing
    // BrowserRouter, Routes, Route
    // What is link in react ?

    // useNavigation

    return (
        <>
            <div className='w-full h-screen bg-zinc-900 flex justify-center items-center'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </>
    )
}

export default App;
