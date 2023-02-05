import Lottie from "lottie-react";
import CodingAnimation from "../../../../public/assets/animation/coding-animation.json";
import Skills from "../../molecules/Skills";

import SkillReact from "../../../../public/assets/illustration/skill-react.svg";
import SkillNext from "../../../../public/assets/illustration/skill-next.svg";
import SkillTailwind from "../../../../public/assets/illustration/skill-tailwind.svg";
import SkillFigma from "../../../../public/assets/illustration/skill-figma.svg";
import SkillNode from "../../../../public/assets/illustration/skill-node.svg";
import SkilSql from "../../../../public/assets/illustration/skill-mysql.svg";
import SkillMongo from "../../../../public/assets/illustration/skill-mongo.svg";

const AboutMe = () => {
  const skills = [
    {
      title: "frontend",
      desc: "Menguasai React untuk pemrograman frontend website dan mobile menggunakan framework Next js dan React Native. Menguasai css dalam styling aplikasi website baik menggunakan framework TailwindCSS, Bootstrap, dan yang lain. Kemampuan Figma sebagai pendukung dalam pembuatan sebuah frontend aplikasi.",
      skill: [
        {
          illustration: <SkillReact />,
          desc: "React merupakan library Javascript yang digunakan untuk membuat frontend, baik untuk website maupun mobile. Saya menguasai React untuk membuat frontend website menggunakan ReactJS beserta frameworknya NextJS. Saya juga dapat membuat aplikasi mobile menggunakan React dengan framework React Native.",
        },
        {
          illustration: <SkillNext />,
          desc: "NextJS merupakan sebuah framework dari React. Dengan menggunakan NextJS website akan menjadi lebih optimized dan SEO friendly.",
        },
        {
          illustration: <SkillTailwind />,
          desc: "Dalam membangun sebuah frontend sebuah website dibutuhkan kemampuan css dalam melakukan styling. Saya menguasai CSS beserta frameworknya seperti TailwindCSS, Bootstrap dan lainnya.",
        },
        {
          illustration: <SkillFigma />,
          desc: "Figma merupakan aplikasi yang digunakan untuk mendesign sebuah UI/UX dari sebuah website. Saya juga memiliki kemampuan dalam menggunakan Figma baik sebagai pendukung dalam membuat sebuah frontend ataupun membuat design UI/UX sederhana.",
        },
      ],
    },
    {
      title: "Backend",
      desc: "Menguasai NodeJs untuk pemrograman backend, MySql dan MongoDb sebagai database ",
      skill: [
        {
          illustration: <SkillNode />,
          desc: "NodeJS memungkinkan kita membangun sebuah backend menggunakan Javascript. Saya dapat menggunakan NodeJS untuk membangun sebuah backend. Dengan menguasai NodeJS sebagai backend dan React sebagai frontend, maka saya dapat membangun sebuah fullstack aplikasi menggunakan MERN stack",
        },
        {
          illustration: <SkilSql />,
          desc: "Kemampuan membuat database menggunakan database MySql",
        },
        {
          illustration: <SkillMongo />,
          desc: "Kemampuan menggunakan MonggoDb yaitu No-Sql database.",
        },
      ],
    },
  ];
  return (
    <section className="">
      <div className="container relative z-40 py-[64px] md:max-w-full lg:container">
        {/* <h3 className="title mx-auto mb-2 max-w-[800px] text-center md:mb-10">
          Saya berasal dari kota Medan. Saat ini, saya bekerja sebagai seorang
          softwafe developer dan sedang berkuliah di fakultas Informatika,
          Universitas Mikroskil.
        </h3> */}
        <div className="flex flex-wrap">
          {/* leftSide */}
          <div className="flex w-full md:w-[40%]">
            <Lottie
              animationData={CodingAnimation}
              loop
              className="mx-auto max-w-[350px] md:max-w-none"
            />
          </div>
          {/* end LeftSide */}

          {/* Right Side */}
          <div className="w-full md:mt-0 md:w-[60%] md:pl-4">
            <h2 className="header mb-2 md:mb-4">My Skills</h2>
            {skills.map((item) => {
              return (
                <Skills
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  data={item.skill}
                />
              );
            })}
          </div>
          {/* End RightSide */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
