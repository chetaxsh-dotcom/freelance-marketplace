import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

return (

<div>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/service/:id" element={<ServiceDetails />} />

<Route path="/jobs" element={<Jobs />} />

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

</Routes>

</div>

);

}

export default App;