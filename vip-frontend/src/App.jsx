import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Jobs from "./Pages/Jobs/Jobs";
import LandingPage from "./Pages/LandingPage/LandingPage";

const Content = () => {
  return (
    <div className="App-container">
      <nav>
        <NavBar />
      </nav>
      <section>
        <Routes>
          <Route path="/*" element={<Home />} />
          {/* <Route path="/jobs" element={<Jobs />} /> */}
        </Routes>
      </section>
    </div>
  );
};

function App() {
  return (
    <div className="app container">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/*" element={<Content />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
