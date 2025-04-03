import Child from './Child';

const Parent = () => {
    return (
        <div className="text-white font-semibold text-xl font-mono text-center">
            <Child name='Alex' age={25} />
        </div>
    );
};

export default Parent;
