import { data } from './ContextApi';

const ChildC = () => {
    return (
        <>
            <data.Consumer>
                {
                    (name) => {
                        return (
                            <>
                                <h1 className="text-white font-semibold font-mono">Component name displaying {name}</h1>
                            </>
                        )
                    }
                }
            </data.Consumer>
        </>
    )
}

export default ChildC;
