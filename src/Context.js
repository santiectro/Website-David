import React, {useState, useEffect} from "react";

const Context = React.createContext()


function ContextProvider({children}) {
    const [Lightmode, setLightMode] = useState(true)

    function toggleMode() {
        
        setLightMode(prev => !prev)
    }

    return (
        <Context.Provider  value={{
            Lightmode,
            toggleMode
        }} >
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}