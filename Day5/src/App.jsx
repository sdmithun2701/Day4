import React, { createContext } from "react";
import Hen from "./Hen.jsx";

export let nameContext = createContext();

const App = () => {
    return (
        <nameContext.Provider value='FOOD'>
        <Hen/>
        </nameContext.Provider>
    )
}

export default App;
