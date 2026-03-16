import { useEffect, useState } from "react";
import API from "../api/api";

function Jobs() {

const [jobs, setJobs] = useState([]);
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [budget, setBudget] = useState("");

useEffect(() => {
fetchJobs();
}, []);

const fetchJobs = async () => {

const res = await API.get("/jobs");

setJobs(res.data);

};

const handleSubmit = async (e) => {

e.preventDefault();

await API.post("/jobs", {
title,
description,
budget
});

setTitle("");
setDescription("");
setBudget("");

fetchJobs();

};

return (

<div style={{padding:"40px"}}>

<h1>Job Marketplace</h1>

<h2>Post a Job</h2>

<form onSubmit={handleSubmit} style={{marginBottom:"30px"}}>

<input
placeholder="Job Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<input
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<br/><br/>

<input
placeholder="Budget"
value={budget}
onChange={(e)=>setBudget(e.target.value)}
/>

<br/><br/>

<button type="submit">Post Job</button>

</form>

<h2>Available Jobs</h2>

{jobs.map(job => (

<div key={job._id} style={{
border:"1px solid #ccc",
padding:"15px",
marginBottom:"10px"
}}>

<h3>{job.title}</h3>

<p>{job.description}</p>

<p>Budget: ₹{job.budget}</p>

</div>

))}

</div>

);

}

export default Jobs;