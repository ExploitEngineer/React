import ProductItem from './components/ProductItem';
import './style.css';

const productList = ({ name, city, data }) => {

    return (
        <div className='text-center text-white font-semibold text-2xl font-mono space-y-4'>
            <h3 className='title'>ECommerce Project</h3>
            <h4>Name is {name}, he/she belongs to this city {city}</h4>
            {/* <ProductItem /> */}
            <ul>
                {
                    data.map((item, index) => {
                        return (
                            <ProductItem singleProductItem={item} key={index} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default productList;
