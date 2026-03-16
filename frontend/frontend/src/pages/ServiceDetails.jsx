import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

function ServiceDetails() {

const { id } = useParams();
const [service, setService] = useState(null);

useEffect(() => {
fetchService();
}, []);

const fetchService = async () => {
const res = await API.get(`/services/${id}`);
setService(res.data);
};

if (!service) return <p>Loading...</p>;

return (

<div style={{ padding: "40px" }}>

<h1>{service.title}</h1>

<p>{service.description}</p>

<h3>Price: ₹{service.price}</h3>

</div>

);

}

export default ServiceDetails;