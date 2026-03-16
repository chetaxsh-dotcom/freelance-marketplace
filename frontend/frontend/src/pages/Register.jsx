import { useState } from "react";
import API from "../api/api";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async (e)=>{

e.preventDefault();

try{

await API.post("/auth/register",{
name,
email,
password
});

alert("User Registered");

}catch(error){

alert("Registration Failed");

}

};

return(

<div style={{padding:"40px"}}>

<h1>Register</h1>

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">Register</button>

</form>

</div>

);

}

export default Register;