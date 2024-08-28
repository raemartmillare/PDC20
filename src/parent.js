import React from "react";
import Child1 from "./child";
import Child2 from "./Child2";
import Child3 from "./Child3";
import './style.css';

function Parent(){
   return(
        <div className="container">
                <h1>Famouse Haikyu Poem</h1>
                <Child1/>
                <Child2/>
                <Child3/>
        </div>
   ); 
}

export default Parent;