import { cva } from 'class-variance-authority';

const textVariants = cva({
  variants: {
    variant: {
      header: 'text-4xl font-bold md:text-6xl',
      subtitle: 'text-lg text-accent-foreground',
    },
  },
});

export default textVariants;
