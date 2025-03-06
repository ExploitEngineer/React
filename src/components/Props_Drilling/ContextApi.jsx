import { createContext } from "react";
import ChildA from './ChildA';

const ContextApi = () => {

    // create, provide, consumer

    const name = "whoami";

    const data = createContext();

    return (
        <>
            <data.Provider value={name}>
                <ChildA />
            </data.Provider>
        </>
    )
}

export default ContextApi;
export {data};
