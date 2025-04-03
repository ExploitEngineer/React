import { useState, useEffect } from 'react';
import ProductItem from './components/ProductItem';
import './style.css';

const productList = ({ name, city, data }) => {

    const [flag, setFlag] = useState(false);


    function handleToggleText() {
        setFlag(!flag);
    };

    // function renderTextBlock(getFlag) {
    //     return getFlag ? <h4>Name is {name}, he/she belongs to this city {city}</h4> : <h4>Hello World!</h4>
    // };

    const renderTextBlock = flag ? <h4>Name is {name}, he/she belongs to this city {city}</h4> : <h4>Hello World!</h4>;

    useEffect(() => {
        console.log('Run only once page load');
    }, []);

    return (
        <div className='text-center text-white font-semibold text-2xl font-mono space-y-4'>
            <h3 className='title'>ECommerce Project</h3>
            <button onClick={handleToggleText} className='btn btn-primary'>Toggle Text</button>
            {renderTextBlock}
            {
                flag ? <h4>{name} & {city}</h4> : <h4>Hello</h4>
            }

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
};

export default productList;
