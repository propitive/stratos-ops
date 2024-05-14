import { Parallax } from "react-parallax";
import parallaxMain from "../../images/parallax/parallaxMain.jpg";

import MainServices from "../MainServices/MainServices";

function Main() {
  return (
    <>
      <Parallax strength={400} bgImage={parallaxMain}>
        <div className="k-cabinets__parallax"></div>
      </Parallax>
      <MainServices />
    </>
  );
}

export default Main;
