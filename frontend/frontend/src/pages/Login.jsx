import { useState } from "react";
import API from "../api/api";

function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async (e)=>{
e.preventDefault();

try{

const res = await API.post("/auth/login",{
email,
password
});

console.log(res.data);

alert("Login successful");

}catch(error){

console.log(error.response.data);

alert(error.response.data.message || "Login failed");

}

};

return(

<div style={{padding:"40px"}}>

<h1>Login</h1>

<form onSubmit={handleSubmit}>

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

<button type="submit">Login</button>

</form>

</div>

);

}

export default Login;