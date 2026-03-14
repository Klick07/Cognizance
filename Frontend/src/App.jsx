import Login from "./components/Login";
import Navbar from "./components/navbar";
import About from "./components/About";
import Signup from "./components/Signup";
import Registration from "./components/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signupclient from "./components/SignupClient";
import LoginClient from "./components/LoginClient";
import Milestone from "./components/Milestone";
import ClientDashboard from "./components/DashboardClient";
import FreelancerDashboard from "./components/DashboardFreelancer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/twousers" element={<Registration />} />
        <Route path="/signupClient" element={<Signupclient />} />
        <Route path="/loginClient" element={<LoginClient />} />
        <Route path="/project/:id" element={<Milestone />} />
        <Route path="/dashboardClient" element={<ClientDashboard />} />
        <Route path="/dashboardFreelancer" element={<FreelancerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
