import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registration from './Registration';
import StudentInformation from './studentinfo';
import DisplaySum from './Expression';
import GreetHello from './Greetings/GreetHello';
import Homepage from './Conditionals/Homepage';
import LogAdmin from './Dashboard/Log-Admin';
import LogInForm from './Exercise1 - Module2/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <LogInForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
