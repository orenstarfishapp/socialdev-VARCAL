import React from "react";

interface PortfolioItemProps {
  name: string;
  title: string;
  imageSrc: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  name,
  title,
  imageSrc,
}) => {
  return (
    <div className="max-w-[545px] mx-auto my-0 md:flex flex-col flex-1 gap-[20px] shrink p-[30px] rounded-xl w-1/2 basis-0 bg-gray-950 max-md:px-5 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="items-center w-full max-w-[485px] max-md:max-w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={name}
              className="object-contain w-full h-[330px] aspect-[1.47] max-md:max-w-full"
            />
            <figcaption className="m-[13px]"></figcaption>
          </div>
        </div>
      </div>
      <div className="text-3xl font-bold leading-tight text-center text-white max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="items-center w-full max-md:px-5 max-md:max-w-full">
            <h2>{name}</h2>
          </div>
        </div>
      </div>
      <div className="text-base leading-loose h-full text-center text-white max-md:max-w-full">
        <div className="w-full  h-full max-md:max-w-full">
          <p className="w-full max-md:px-5 max-md:max-w-full">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
