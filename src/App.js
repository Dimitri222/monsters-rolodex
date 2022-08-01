import React from "react";
import DataFetching from "./components/DataFetching/dataFetching";

import "./style.css";


const App = () => {
    return(
     <div>
        <h1 className="heading">Monsters Rolodex</h1>
        <DataFetching/>
     </div>
    )
}

export default App;