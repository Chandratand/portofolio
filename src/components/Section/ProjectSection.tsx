import AccentText from '../AccentText';
import ProjectCard from '../ProjectCard';

const ProjectSection = () => {
  return (
    <section className="container py-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Check out my latest <AccentText>project</AccentText>
        </h2>
        <p className="text-lg text-accent-foreground">These are some of the projects I have created. These projects have not only helped me build my portfolio, but also enhanced the skills I have developed.</p>
      </div>
      <div className="py-8 space-y-8 max-w-xl mx-auto lg:max-w-full">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
