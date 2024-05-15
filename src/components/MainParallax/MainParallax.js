import { Parallax } from "react-parallax";
import parallaxMain from "../../images/parallax/parallaxMain.jpg";

function MainParallax() {
  return (
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
  );
}

export default MainParallax;
