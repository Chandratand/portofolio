import { Icons } from './Icons';
import { buttonVariants } from './ui/Button';

const ExperienceItem = () => {
  return (
    <div className="px-4 py-5 sm:p-8 rounded-md border-2 bg-gradient-to-r from-secondary flex gap-4 lg:gap-12 flex-col lg:flex-row lg:pl-12 lg:py-12">
      <div className="lg:w-full lg:max-w-[200px]">
        <Icons.dummyLogo />
      </div>
      <div className="flex-1 text-accent-foreground">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-medium">PT Lorem Ipsum Dolor</h3>
            <p>@Lorem</p>
            <p>Dec 2021 - Present</p>
          </div>
          <div>
            <div className={buttonVariants()}>Software Engineer</div>
          </div>
        </div>
        <div className="mb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium laboriosam velit dolor doloremque architecto animi vitae nulla deserunt consequatur, delectus impedit praesentium commodi. Ullam deleniti eligendi est
            accusantium, pariatur sunt.
          </p>
          <p>The responsibilities include:</p>
          <ul className="list-disc list-inside text-justify">
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, corporis ad dolo</li>
            <li>Lorem ipsum, dolor sdolo</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisiciExercitationem, corporis ad dolo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
