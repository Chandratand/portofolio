import SkillItem from "../SkillItem";

const Skills = ({ title, desc, data }) => {
  return (
    <div className="mb-2 md:mb-4">
      <h3 className="title">{title}</h3>
      <p className="body mb-2 md:mb-4">{desc}</p>
      <div className="flex flex-wrap gap-6">
        {data?.map((skill, index) => {
          return (
            <SkillItem
              key={index}
              icon={skill.illustration}
              desc={skill.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
