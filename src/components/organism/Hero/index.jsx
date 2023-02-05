import Image from "next/image";
import React from "react";
import Button from "../../atoms/Button";

import Profile from "../../../../public/assets/dummy/dummy-profile.png";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/illustration/bg-hero-1.svg')] bg-cover bg-no-repeat">
      <div className="container relative z-40 md:max-w-full lg:container">
        <div className="flex flex-wrap">
          {/* leftSide */}
          <div className="w-full pt-8 text-center md:w-1/2 md:pt-32 md:text-start">
            <h1 className="header mb-2 md:mb-4">
              <span className="text-dark">Hai!</span>
              <span className="text-secondary">
                {" "}
                I am <br />
              </span>
              Chandra Tandiono
            </h1>
            <p className="title mb-4 font-medium md:mb-8">
              Butuh Website atau aplikasi mobile untuk bisnis anda? Hubungi
              saya, harga murah kualitas terjamin!
            </p>
            <div className="flex gap-4">
              <Button className="mx-auto w-full max-w-[200px] bg-primary md:mx-0 md:w-fit">
                Hire me
              </Button>
              <Button className="mx-auto w-full max-w-[200px] border border-primary bg-white text-primary md:mx-0 md:w-fit">
                Download CV
              </Button>
            </div>
          </div>
          {/* end LeftSide */}

          {/* Right Side */}
          <div className="mt-10 w-full md:mt-0 md:w-1/2">
            <Image
              src={Profile}
              alt="profile"
              width={497}
              height={635}
              className="mx-auto"
              priority
            />
          </div>
          {/* End RightSide */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
