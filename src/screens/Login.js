import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();  //synthetic
        const response = await fetch("https://foodhub-m453.onrender.com/api/auth/loginUser", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        console.log({ email: credentials.email, password: credentials.password });
        const json = await response.json();
        console.log(json);
        if (!json.success) { console.log("Enter valid credetials") };
        if (json.success) { 
            localStorage.setItem('authToken', json.authToken);
            localStorage.setItem('userEmail', credentials.email)
            navigate("/") };
    }


    onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <div><Navbar /></div>
            <div className='container'>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onchange} id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/signup" className="m-3 btn btn-danger">New user ?</Link>
                </form>
            </div>
        </div>
    )
}
