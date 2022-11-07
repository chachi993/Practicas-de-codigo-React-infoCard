import React from "react"
import ReactDom from "react-dom"
import About from "./components/about"
import Interest from "./components/interest"
import Presentation from "./components/presentation"
import Photo from "./components/photo"


function App(){
    return(
        <div className="container">
            <Photo/>
            <Presentation/>
            <About/>
            <Interest/>

        </div>
    )
}


export default App;
