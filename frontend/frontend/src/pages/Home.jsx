import { useEffect, useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const res = await API.get("/services");
    setServices(res.data);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Freelance Marketplace</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
        {services.map((service) => (
          <div key={service._id} style={{ border: "1px solid #ddd", padding: "20px" }}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p>₹ {service.price}</p>

            <Link to={`/service/${service._id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;