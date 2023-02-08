import React, {useState} from "react";

const Context = React.createContext()


function ContextProvider({children}) {
    const [Lightmode, setLightMode] = useState(true)

    function toggleMode() {  
        setLightMode(prev => !prev)
        document.getElementById("header-btn").checked = Lightmode
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