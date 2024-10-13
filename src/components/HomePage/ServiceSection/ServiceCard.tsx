import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  backgroundColor,
}) => {
  return (
    <div
      className={`flex flex-col mx-[15px] flex-1 shrink justify-start md:justify-center mb-4 basis-0 p-[50px] min-w-[240px] rounded-xl shadow-custom-black ${backgroundColor} min-h-[556px] max-md:px-5 lg:max-w-[350px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
    >
      <div className="justify-center w-full max-w-full lg:max-w-[350px]">
        <div className="w-full pr-4">
          <div dir="rtl" className="w-full mb-[35px]">
            <img
              loading="lazy"
              src={imageUrl}
              className="object-contain self-stretch my-auto aspect-square max-w-[113px] w-[100px]"
              alt=""
            />
          </div>
          <div className="w-full text-right">
            <h3 className="pb-px w-full text-[24px] font-bold leading-tight text-sky-400 font-rubik">
              {title}
            </h3>
            <p className="pb-px w-full text-base leading-7 text-neutral-500 font-rubik">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
