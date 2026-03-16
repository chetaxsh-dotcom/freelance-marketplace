import { Link } from "react-router-dom";

function Navbar() {

return (

<div style={{
display:"flex",
justifyContent:"space-between",
padding:"15px",
background:"#333",
color:"#fff"
}}>

<h2>Freelance Marketplace</h2>

<div style={{display:"flex",gap:"20px"}}>

<Link to="/" style={{color:"white"}}>Home</Link>

<Link to="/jobs" style={{color:"white"}}>Jobs</Link>

<Link to="/login" style={{color:"white"}}>Login</Link>

<Link to="/register" style={{color:"white"}}>Register</Link>

</div>

</div>

);

}

export default Navbar;