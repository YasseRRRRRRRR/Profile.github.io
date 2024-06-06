import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Experience from "./components/experience";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
