import React from "react";

interface ServiceCardProps {
  svgIcon: React.ReactNode;
  url: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  svgIcon,
  url,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink justify-center p-4 basis-0 min-w-[240px]">
      <div className="flex flex-col justify-center p-2.5 w-full min-h-[312px]">
        {/* Add `group` here */}
        <div className="flex flex-col justify-center w-full max-w-[350px] group">
          <div className="flex flex-col flex-1 justify-center px-10 py-12 w-full bg-white rounded-xl shadow-custom-black max-md:px-5 transition-colors duration-300 group-hover:bg-[#35023D] group-hover:text-white">
            <div className="flex flex-col w-full">
              <div className="flex items-start self-center w-[50px] h-[50px]">
                {/* SVG icon with group-hover */}
                <div className="svg-icon w-full h-full transition-colors duration-300">
                  {svgIcon}
                </div>
              </div>
              <div className="flex flex-col mt-3.5 w-full text-center">
                <a
                  href={url}
                  className="flex flex-col items-center px-5 pb-px w-full text-base font-medium leading-tight text-slate-800 group-hover:text-white"
                >
                  {title}
                </a>
                <p className="px-1.5 w-full text-lg leading-7 text-neutral-500 group-hover:text-white">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
