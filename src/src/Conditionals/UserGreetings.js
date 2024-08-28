import React from "react";

function UserGreeting(props){
    const isLoggedIn = props.isLoggedIn
    return (
        <div>
            {isLoggedIn? <h1>Welcome Back</h1>:<h2>Please Sign up</h2>}

        </div>


    );


}

export default UserGreeting;