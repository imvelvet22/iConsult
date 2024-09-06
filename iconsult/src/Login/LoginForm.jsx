import React from 'react';
import './LoginForm.css'; 
import { FaUser, FaLock } from "react-icons/fa";
import logo from '../Assets/logo1.png'; 

const Login = ({ onLogin }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin();
    };

    return (
        <div className='container'>
            <div className='left-side'>
                <div>
                    <h2>Welcome back!</h2>
                    <p>Connect and harness your productivity</p>
                </div>
            </div>
            <div className='right-side'>
                <div className='logo-container'>
                    <img src={logo} alt='Logo' className='logo' />
                </div>
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>

                        <div className='input-box'>
                            <input type="password" placeholder='Password' required />
                            <FaLock className='icon'/>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="/password-reset">Forgot password?</a>
                        </div>

                        <button type="submit">Login</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;