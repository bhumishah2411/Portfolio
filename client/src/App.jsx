import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CodingActivity from "./components/CodingActivity";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <CodingActivity />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
