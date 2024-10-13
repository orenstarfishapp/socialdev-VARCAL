import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioPicture from "../../assets/images/screencapture-yoniyosha-co-il-2023-07-27-14_08_16-1.png";
import ExplorerImage from "../../assets/images/explorer_gaEmeYI7Ic.png"; // Update this line
import SallonImage from "../../assets/images/sallonmary_portfolio.png";
import BarberImage from "../../assets/images/image_2024_10_11T14_09_58_211Z.png";

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
          <a href="https://yoniyosha.co.il/" target="_blank" rel="noopener noreferrer">
            <PortfolioItem
              name="Yonatan Yoshua"
              title="בפסיכולוגיה,לוגותרפיסט"
              imageSrc={PortfolioPicture}
            />
          </a>
        </div>
        <div className={`col-span-1`}>
          <a href="https://sallonmary.co.il/" target="_blank" rel="noopener noreferrer">
            <PortfolioItem
              name="Sallon"
              title=""
              imageSrc={SallonImage}
            />
          </a>
        </div>
        <div className={`col-span-1`}>
          <PortfolioItem
            name="Barber"
            title=""
            imageSrc={BarberImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;