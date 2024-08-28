import React from "react";
import UserGreeting from "./UserGreetings";

function Homepage (){
    return (
        <div>

            <UserGreeting isLoggedIn={true} />


        </div>

    );
}

export default Homepage;