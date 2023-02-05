/* eslint-disable import/no-extraneous-dependencies */
import Carousel from "react-multi-carousel";
import PortofolioCard from "../../molecules/PortofolioCard";
import "react-multi-carousel/lib/styles.css";

const Portofolio = () => {
  const responsive = {
    lg: {
      breakpoint: { max: 3000, min: 1200 },
      partialVisibilityGutter: 0,
      items: 3,
    },
    md: {
      breakpoint: { max: 1200, min: 1024 },
      partialVisibilityGutter: 0,
      items: 2,
    },
    sm: {
      breakpoint: { max: 1024, min: 640 },
      partialVisibilityGutter: 0,
      items: 2,
    },
    xs: {
      breakpoint: { max: 640, min: 0 },
      partialVisibilityGutter: 0,
      items: 1,
    },
  };

  const portofolio = [
    {
      thumbnail: "/assets/dummy/dummy-portofolio.png",
      title: "Project Pertama",
      desc: "Ini merupakan project Frontend pertama misalnya",
    },
    {
      thumbnail: "/assets/dummy/dummy-portofolio.png",
      title: "Project kedua",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      thumbnail: "/assets/dummy/dummy-portofolio.png",
      title: "Project ketiga",
      desc: " possimus perferendis laudantium nesciunt eius non sunt fugit, tempore officia soluta repellat quos.",
    },
    {
      thumbnail: "/assets/dummy/dummy-portofolio.png",
      title: "Project keempat",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum",
    },
    {
      thumbnail: "/assets/dummy/dummy-portofolio.png",
      title: "Project kelima",
      desc: "Kalau yang ini ceritanya yang ke lima punya",
    },
  ];

  return (
    <section className="bg-dark">
      <div className="py-16 px-4">
        <h2 className="header text-center text-white">My Portofolio</h2>
        <div className="mx-auto w-full xl:max-w-[1280px]">
          <Carousel responsive={responsive} containerClass="mt-[48px] -mx-4">
            {portofolio.map((porto) => {
              return (
                <div className="mx-2 flex justify-center">
                  <PortofolioCard
                    thumbnail={porto.thumbnail}
                    title={porto.title}
                    desc={porto.desc}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
