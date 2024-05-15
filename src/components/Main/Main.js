import MainBenefits from "../MainBenefits/MainBenefits";
import MainParallax from "../MainParallax/MainParallax";
import MainRecap from "../MainRecap/MainRecap";
import MainServices from "../MainServices/MainServices";

function Main() {
  return (
    <div className="main">
      <MainParallax />
      <MainRecap />
      <MainBenefits />
      <MainServices />
    </div>
  );
}

export default Main;
