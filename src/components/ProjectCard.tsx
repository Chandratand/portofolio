import { ExternalLinkIcon, TerminalSquareIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Project from '../../public/assets/dummy/project-1.jpg';

const ProjectCard = () => {
  return (
    <div className="relative overflow-hidden flex flex-col gap-2 px-4 py-5 bg-secondary rounded-sm md:gap-4 lg:flex-row lg:px-0 lg:pl-12 lg:py-10 lg:gap-8">
      <div className="absolute bg-gradient-to-bl from-[#57A9F5]/[18%] h-full w-1/2 top-0 right-0 lg:w-1/3" />
      <div className="relative flex-1 w-full aspect-video rounded-sm overflow-hidden lg:order-1 lg:rounded-r-none">
        <Image src={Project} alt="project-image" fill />
      </div>
      <div className="relative flex-1">
        <div className="flex gap-1 font-semibold text-muted-foreground items-center mb-5">
          <TerminalSquareIcon size={20} />
          Web Development
        </div>
        <h3 className="mb-4 text-2xl font-medium md:text-3xl">Lorem Website</h3>
        <p className="mb-8 text-accent-foreground lg:mb-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea repellat quia corrupti unde deleniti vero. Eos nesciunt atque qui excepturi ea placeat hic corrupti. Modi voluptas recusandae mollitia ullam!
        </p>
        <Link href={'/'} className="text-[#2B567E] text-sm flex gap-1 font-semibold items-center mb-5">
          View Project
          <ExternalLinkIcon size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
