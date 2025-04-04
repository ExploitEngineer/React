import ClassBasedComponent from './components/Class_based_component';
import FunctionalComponent from './components/Function_based_component';
import ProductList from './components/products';
import Users from './components/users/index';
import Props from './components/props/Props';
import FunctionState from './components/stateManagement/FunctionState';
import FunctionStateForm from './components/stateManagement/FunctionStateForm';
import UserGreeting from './components/conditionalRendering/UserGreeting';
import List from './components/Lists_Keys/List';
import Button from './components/EventHandling/Button';

const App = () => {

    const dummyProducts = ['Product 1', 'Product 2', 'Product 3'];

    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 37 }
    ];

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-zinc-800">
            <div className='flex flex-col justify-center text-white font-semibold text-2xl text-center space-y-4'>
                <h1 className='text-purple-700'>React JS Concepts 2024</h1>
                {/* <ClassBasedComponent /> */}
                {/* <FunctionalComponent /> */}
                {/* <ProductList data={dummyProducts} name='rafay' city='Islamabad' /> */}
                {/* <Users /> */}
                {/* <Props /> */}
                {/* <FunctionState /> */}
                {/* <FunctionStateForm /> */}
                {/* <UserGreeting isLoggedIn={true} username='Rafay' /> */}
                {/* <List items={fruits} Category="Fruits" /> */}
                <Button />
            </div>
        </div>
    )
}

export default App;
