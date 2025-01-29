import { createContext } from "react";
import ChildA from './ChildA';

const ContextApi = () => {

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
