import React from "react";
import { useState } from "react";
import "./Signup.css"
import { Link, useNavigate} from "react-router-dom"

const Signup=()=>{

    const [data, setData] = useState({email:"", password:""});
    const navigator = useNavigate();

    const onSubmit=(e)=>{

        e.preventDefault();

        fetch("http://localhost:8000/signup",{
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })

    }
    return(
        <>
        <div className="container">
        

        <h1> Sign up</h1>
        <br/>
        <label>Email</label>
        <br/>
        <input
         value={data.email}
         placeholder="email"
         onChange={(e)=>{setData({...data,email:e.target.value })}} />
         
         <br/>
        
        <label>Password</label>
        <br/>
        <input 
        value={data.password}
        placeholder="password"
        onChange={(e)=>{setData({...data,password:e.target.value })}}/>

        <br/>

        <button onClick={onSubmit}>Submit</button>
        <br/>

        <p>Already have an account ?</p>
        <Link to={"/"}> Sign in</Link>

        </div>
        </>
    )
}

export default Signup;