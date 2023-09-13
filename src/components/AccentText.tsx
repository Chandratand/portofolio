import { cn } from '@/lib/utils';

const AccentText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={cn('relative inline-block text-[#2B567E]', className)}>
      <span className="relative z-10">{children}</span>
      <div className="w-full z-0 absolute bg-[#A4E3F6] h-3 bottom-0 md:h-5 md:bottom-1 rounded-full -rotate-2" />
    </span>
  );
};

export default AccentText;
