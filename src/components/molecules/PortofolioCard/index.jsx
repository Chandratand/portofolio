import Image from "next/image";

const PortofolioCard = ({ thumbnail, title, desc }) => {
  return (
    <div className="gradient-1 aspect-square max-w-[320px] select-none overflow-hidden rounded-2xl md:max-w-[400px]">
      <Image
        src={thumbnail}
        width={225}
        height={400}
        className="aspect-video w-full"
        alt="porotofolio"
        draggable="false"
      />
      <div className="p-2 md:p-4">
        <h3 className="title mb-2  font-bold text-white">{title}</h3>
        <p className="body text-white">{desc}</p>
      </div>
    </div>
  );
};

export default PortofolioCard;
