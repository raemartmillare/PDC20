import React, {useState} from 'react';
import './App.css';

function Registration() {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState('false');
const [successMessage, setSuccessMessage] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted', {username, email, password});
    setSubmitted(true);
    setSuccessMessage('Registered Successful');

}

return(
    <div className='Registration'>
        <header className="App-header">
        <h1> Registration Form</h1>
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlfor="username">Username:</label>
                <input className="form-control" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor='email'>Email:</label>
                <input className="form-control" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor="password">Password:</label>
                <input className="form-control" type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
            </div>

            <div>
                <button className="btn btn-success" type='submit'>Register</button>
                <form>
                {submitted && <p className='success-message'>{successMessage} </p> } 
                </form>
            </div>
        </form>

        </header>

    </div>
);


}
export default Registration;

