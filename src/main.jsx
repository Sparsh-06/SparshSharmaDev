import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import ProjectDetails from "./components/projectsDetails.jsx";
import Example from "./components/Techs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Navigation/>
      <Routes>
        <Route path="/" index element={<App/>}/>
        <Route path="/hero" element={<Hero />} />
        <Route path="/techs" element={<Example />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:index" element={<ProjectDetails/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </Router>
  </React.StrictMode>
);
