import { buttonVariants } from './ui/Button';

const ExperienceItem = () => {
  return (
    <div className="p-4 sm:p-8 rounded-md border-2 border-[#798bb6] bg-gradient-to-tr to-[#203056] from-[#44547C] flex gap-4 flex-col sm:flex-row">
      <div className="sm:w-full sm:max-w-[200px]">LOGO</div>
      <div className="flex-1 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="flex-1">
            <h3>PT Anugrah Danamas Remit</h3>
            <p>@Adaremit</p>
            <p>Dec 2021 - Present</p>
          </div>
          <div>
            <div className={buttonVariants()}>Software Engineer</div>
          </div>
        </div>
        <div>
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
