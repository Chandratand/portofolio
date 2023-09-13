import { InstagramIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';

const FootSection = () => {
  return (
    <section className="container bg-primary text-primary-foreground py-16">
      <div className="max-w-xl mx-auto text-center lg:max-w-full lg:text-start lg:flex lg:items-center">
        <div className="flex-1 space-y-4 mb-4">
          <h3 className="text-4xl font-bold md:text-6xl">Have any project ideas?</h3>
          <p>Feel free to get in touch, brainstorm, and {"let's"} turn your visionary ideas into reality together.</p>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4 items-center lg:items-start lg:w-fit lg:ml-40">
            <p className="font-semibold">Contact me on :</p>
            <Link href={'/'} className={'flex gap-1 items-center'}>
              <MailIcon />
              ChandraTand@gmail.com
            </Link>
            <Link href={'/'} className={'flex gap-1 items-center'}>
              <LinkedinIcon />
              Chandra Tandiono
            </Link>
            <Link href={'/'} className={'flex gap-1 items-center'}>
              <InstagramIcon />
              chandratand
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootSection;
