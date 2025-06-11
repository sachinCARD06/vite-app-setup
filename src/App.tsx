import { Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Services from "./pages/main/Services";
import Contact from "./pages/main/Contact";
import Profile from "./pages/main/Profile";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Header from "./components/Header";
function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center pt-16 h-[calc(100vh-64px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
