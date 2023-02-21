import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/hero";
import SkillsSection from "./components/skills";
import Dubai from "./components/dubai";
import ProjectsSection from "./components/projects";
import OtherProjects from "./components/otherProjects";
import ContactSection from "./components/contactSection";
import PortfolioFooter from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroSection />
        <SkillsSection />
        <Dubai />
        <ProjectsSection />
        <OtherProjects />
        <ContactSection />
        <PortfolioFooter />
      </header>
    </div>
  );
}

export default App;
