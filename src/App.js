import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <NavBar />

        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="projectPage/:id" element={<ProjectPage/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
