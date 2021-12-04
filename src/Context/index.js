import React, { createContext } from "react";

export const Context = createContext()

const contexto = 123414141

export function CtxProvider({ children }){
    return(
        <Context.Provider value={{ contexto }}>
            {children}
        </Context.Provider>
    )
}
