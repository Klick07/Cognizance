import Login from "./components/Login";
import Navbar from "./components/navbar";
import About from "./components/About";
import Signup from "./components/Signup";
import Registration from "./components/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signupclient from "./components/SignupClient";
import LoginClient from "./components/LoginClient";
import Milestone from "./components/Milestone";

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
        <Route path="/milestone" element={<Milestone />} />
      </Routes>
    </Router>
  );
}

export default App;
