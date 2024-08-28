import React from "react";


function StaticControl(){
    return (
        <div>
        <label>
            Username:
            <input type="text" placeholder="Enter Username"></input>

        </label>

        <label>
        Password:
        <input type="text"></input>
        </label>

        <button>login</button>

    
        </div>
    );
}

export default StaticControl