import ClassBasedComponent from './components/Class_based_component';
import FunctionalComponent from './components/Function_based_component';
import ProductList from './components/products';

const App = () => {

    const dummyProducts = ['Product 1', 'Product 2', 'Product 3'];

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-zinc-800">
            <div className='flex flex-col justify-center'>
                <ClassBasedComponent />
                {/* <FunctionalComponent /> */}
                {/* <ProductList data={dummyProducts} name='rafay' city='Islamabad' /> */}
            </div>
        </div>
    )
}

export default App;
