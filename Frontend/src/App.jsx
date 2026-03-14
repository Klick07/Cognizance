import Login from "./components/Login";
import Navbar from "./components/navbar";
import About from "./components/About";
import Signup from "./components/Signup";
import Registration from "./components/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupClient from "./components/SignupClient";
import LoginClient from "./components/LoginClient";
import Milestone from "./components/Milestone";
import ClientDashboard from "./components/DashboardClient";
import FreelancerDashboard from "./components/DashboardFreelancer";
import AddContract from "./components/AddContract"
import useStore from "./store";

function App() {
  const showmodal = useStore((state) => state.showmodal);
  const setShowmodal = useStore((state)=>state.setShowmodal)

  return (
    <Router>
      {showmodal && <AddContract />}
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboardClient" element={<ClientDashboard />} />
        <Route path="/dashboardFreelancer" element={<FreelancerDashboard />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/twousers" element={<Registration />} />
        <Route path="/loginClient" element={<LoginClient />} />
        <Route path="/signupClient" element={<SignupClient />} />
      </Routes>
    </Router>
  );
}


export default App;