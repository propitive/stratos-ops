import MainBenefits from "../MainBenefits/MainBenefits";
import MainParallax from "../MainParallax/MainParallax";
import MainRecap from "../MainRecap/MainRecap";
import MainServices from "../MainServices/MainServices";

function Main({ handleOpenGetAQuote }) {
  return (
    <div className="main">
      <MainParallax />
      <MainRecap handleOpenGetAQuote={handleOpenGetAQuote} />
      <MainBenefits />
      <MainServices />
    </div>
  );
}

export default Main;
