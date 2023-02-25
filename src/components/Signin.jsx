import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom"

import "./Signin.css"

const Signin=()=>{

    const [passwordShown, setPasswordShown] = useState(false);

    const navigator = useNavigate();
    const [signinData, setSigninData] = useState({ email:"", password:""})

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8000/signin", {
            method: "post",
            headers:{
                "Content-type": "application/json",
            },

            body: JSON.stringify({
                email : signinData.email,
                password: signinData.password
            })
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            if(data.message){
                return alert(data.message);
            }

            window.localStorage.setItem("id", data.user._id);
            window.localStorage.setItem("email", data.user.email);
            window.localStorage.setItem("token", data.token);
            alert(`user signin successfully`);

            navigator("/");

        
        })
    }
    return(
        <>
        <div className="container">
        <h1>Sign in </h1>
        <br/>
        <label>Email</label>
        <br/>
        <input
        value={signinData.email}
         placeholder="email"
         onChange={(e)=>{ setSigninData({...signinData, email: e.target.value})}}/>

        <br/>
        <label>Password </label>
        <br/>
        <input
        value={signinData.password} 
        onChange={(e)=>{ setSigninData({...signinData,password: e.target.value})}}
        placeholder="password"/>

        <br/>

        <button onClick={handleSubmit}>Submit</button>
        <br/>

        <p> Dont have an account</p>

        <Link to={"/signup"}> Sign up</Link>

        </div>
        </>
    )
}

export default Signin;