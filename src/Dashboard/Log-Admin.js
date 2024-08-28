
import React, {useState} from 'react';
import AdminPanel from "./AdminPanel";

function LogAdmin(){
    const [username, setUsername ]= useState('');
    const [password, setPassword] = useState('');
    const [accountype, SetAccounting] = useState('user');
    const [user, setUser] = useState(null);

    const handling = () => {
        const isAdmin = accountype === 'admin';
        setUser( {name: username, isAdmin}) ;
    }
    return (
        <div>
            {user?(
                <AdminPanel user={user}/>
            ):(
                <div>
                    <h1>Log In</h1>
                    <div>
                        <label>Username:</label>
                        <input type="text" id="fullname" value={username} onChange={(e) => setUsername(e.target.value)}  required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}  required />
                    </div>
                    <div>
                        <label>Account Type:</label>
                        <select onChange={(e) => SetAccounting(e.target.value)}>
                    

                            <option value="user">User</option>
                            <option value="user">User</option>
                        </select>

                    </div>
                    <button onClick={handling}>Login</button>
                </div>
            )}
            
        </div>
    );
}

export default LogAdmin;
