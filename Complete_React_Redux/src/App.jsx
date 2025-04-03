import ClassBasedComponent from './components/Class_based_component';
import FunctionalComponent from './components/Function_based_component';
import ProductList from './components/products';
import Users from './components/users/index';

const App = () => {

    const dummyProducts = ['Product 1', 'Product 2', 'Product 3'];

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-zinc-800">
            <div className='flex flex-col justify-center text-white font-semibold text-2xl text-center space-y-4'>
                <h1 className='text-purple-700'>React JS Concepts 2024</h1>
                {/* <ClassBasedComponent /> */}
                {/* <FunctionalComponent /> */}
                {/* <ProductList data={dummyProducts} name='rafay' city='Islamabad' /> */}
                {/* <Users /> */}
            </div>
        </div>
    )
}

export default App;
