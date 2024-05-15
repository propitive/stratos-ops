function MainBenefit({ icon, paragraph, subtitle }) {
  return (
    <div className="main-benefit">
      <img className="main-benefit__icon" src={icon} alt="Benefit's icon" />
      <h3 className="main-benefit__subtitle">{subtitle}</h3>
      <p className="main-benefit__paragraph">{paragraph}</p>
    </div>
  );
}

export default MainBenefit;
