import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioPicture from "../../assets/images/screencapture-yoniyosha-co-il-2023-07-27-14_08_16-1.png";

const Portfolio: React.FC = () => {
  return (
    <section className="flex flex-row flex-wrap self-stretch pl-[296px] justify-center items-center mx-auto max-w-full w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
      <div className="max-w-[1140px] w-full mx-auto my-0 flex flex-wrap flex-1 gap-[50px] py-8 size-full">
        <PortfolioItem
          name="Yonatan Yoshua"
          title="בפסיכולוגיה,לוגותרפיסט"
          imageSrc={PortfolioPicture}
        />
        <div className="flex flex-1 shrink rounded-xl bg-gray-950 p-[30px] w-1/2" />
      </div>
    </section>
  );
};

export default Portfolio;
