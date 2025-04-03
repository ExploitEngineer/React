const ButtonComponent = () => {
    return <button className="btn  btn-accent">Click</button>
};

const ProductItem = ({ singleProductItem, key }) => {
    return (
        <div key={key} className="text-center text-2xl text-white font-semibold font-mono">
            <p>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    );
};

export default ProductItem;
