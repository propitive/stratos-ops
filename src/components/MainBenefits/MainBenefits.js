import { mainBenefitsContent } from "../../utils/mainBenefitsContent";
import MainBenefit from "../MainBenefit/MainBenefit";

function MainBenefits() {
  return (
    <div className="main-benefits">
      <h2 className="main-benefits__title">Benefits of Our DevOps Solutions</h2>
      <div className="main-benefits__benefits-container">
        {mainBenefitsContent.map((benefit) => {
          return (
            <MainBenefit
              icon={benefit.icon}
              key={benefit.subtitle}
              paragraph={benefit.paragraph}
              subtitle={benefit.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainBenefits;
