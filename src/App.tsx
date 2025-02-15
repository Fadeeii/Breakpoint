import Footer from "./components/footer";
import Intro from "./components/intro";
import ProjectsPage from "./components/projects";

const ProjectShowcase = () => {
  return (
    <div className="relative">
      <Intro />
      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default ProjectShowcase;
