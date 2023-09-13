import { SkillIcons } from '../SkillIcons';

const SkillsSection = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-secondary/80 bg-secondary/0 bg-no-repeat">
      <div className="container flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap justify-center">
        <SkillIcons.react className="max-w-[64px] md:max-w-[100px]" />
        <SkillIcons.node className="max-w-[64px] md:max-w-[100px]" />
        <SkillIcons.nextjs className="max-w-[64px] md:max-w-[100px]" />
        <SkillIcons.tailwind className="max-w-[64px] md:max-w-[100px]" />
        <SkillIcons.figma className="max-w-[64px] md:max-w-[100px]" />
        <SkillIcons.laravel className="max-w-[64px] md:max-w-[100px]" />
        <SkillIcons.typescript className="max-w-[64px] md:max-w-[100px]" />
      </div>
    </section>
  );
};

export default SkillsSection;
