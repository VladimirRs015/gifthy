import { useState,createContext } from "react";
// import {createContext,useReducer} from "react";

const defaultState = {}
export const ctx = createContext(defaultState);

function AppContext({ children }) {
const [isAppModalActive, setAppModalState] = useState(false);

    return (
        <ctx.Provider value={{
            isAppModalActive, 
            setAppModalState,
        }}>
            {children}
        </ctx.Provider>
    )
}

export default AppContext