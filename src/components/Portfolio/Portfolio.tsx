import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioPicture from "../../assets/images/screencapture-yoniyosha-co-il-2023-07-27-14_08_16-1.png";
import ExplorerImage from "../../assets/images/explorer_gaEmeYI7Ic.png"; // Update this line

const Portfolio: React.FC = () => {
  return (
    <section className="flex flex-row flex-wrap self-stretch justify-center items-center mx-auto max-w-full w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1140px] w-full mx-auto my-0 gap-[50px] py-8 px-8">
        <div className={`col-span-1`}>
          <a href="https://danielbarber.co.il/" target="_blank" rel="noopener noreferrer">
            <PortfolioItem
              name="Daniel Barber"
              title="ספר"
              imageSrc={ExplorerImage} // Use the new image
            />
          </a>
        </div>
        <div className={`col-span-1`}>
          <PortfolioItem
            name="Yonatan Yoshua"
            title="בפסיכולוגיה,לוגותרפיסט"
            imageSrc={PortfolioPicture}
          />
        </div>
        <div className={`col-span-1`}>
          <div className="flex flex-1 shrink rounded-xl bg-gray-950 p-[30px] " />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;