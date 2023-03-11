
import './Login.css';
import React from 'react';
import { useState } from 'react';
import Logindetails from '../Logindetails.json';
import { useNavigate, useLocation } from 'react-router-dom';
function Login() {
    let navigate = useNavigate();
    let location = useLocation();
    if (location.pathname == "" || location.pathname == undefined) {
        navigate("../Homemain", true);
    }
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData
    function handleSubmit(e) {
        e.preventDefault();
        console.log(Logindetails.email);
        console.log(Logindetails.password);
        if (Logindetails.email === email && Logindetails.password === password) {
            navigate("../Homemain", true);
        }
        else {
            alert("Entered email & password are incorrect..");
        }
    }
    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }
    return (

        <div class="Login-box">
            <form class="login-form" onSubmit={handleSubmit}>
                <div>
                    <h3>Login</h3>
                    <input type="email" name="email" placeholder="Enter email" onChange={handleChange} value={email}></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Enter password" onChange={handleChange} value={password}></input>
                </div>
                <div>Don't have an account sign up <span><a href="/signup">here.</a></span></div>
                <div><button type="submit" class="btn btn-primary btn-block">Login</button> </div>
            </form>
        </div>


    );
}
export default Login;