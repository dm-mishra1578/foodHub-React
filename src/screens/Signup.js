import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
 let navigate = useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();  //synthetic
        const response = await fetch("https://foodhub-m453.onrender.com/api/auth/creatuser", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: "Banda" })
        }
        )
        const json = await response.json();
        console.log(json);
        if (!json.success) { console.log("Enter valid credetials") };
        if (json.success) navigate("/login") ;
       
    }
    onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });

    }
    return (
        <div>
            <div> <Navbar /></div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={credentials.name} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="name" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
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
                    <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
                </form>
            </div>
        </div>
    )
}

