import AccentText from '../AccentText';
import ExperienceItem from '../ExperienceItem';

const ExperienceSection = () => {
  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-semibold text-center">
          My <AccentText>Experience</AccentText>
        </h2>
        <div className="mt-8 mx-auto max-w-xl lg:max-w-none space-y-8">
          <ExperienceItem />
          <ExperienceItem />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
