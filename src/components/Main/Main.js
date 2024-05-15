import { Parallax } from "react-parallax";
import parallaxMain from "../../images/parallax/parallaxMain.jpg";

import MainServices from "../MainServices/MainServices";

function Main() {
  return (
    <div className="main">
      <Parallax strength={400} bgImage={parallaxMain}>
        <div className="main__parallax">
          <p className="main__parallax-text">
            Transforming businesses with robust{" "}
            <span className="main__parallax-bold-text">security</span> and{" "}
            <span className="main__parallax-bold-text">cloud innovations</span>
          </p>
        </div>
        <div className="main__parallax-overlay"></div>
      </Parallax>
      <MainServices />
    </div>
  );
}

export default Main;
