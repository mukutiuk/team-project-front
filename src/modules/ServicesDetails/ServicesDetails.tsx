import './ServicesDetails.scss';

export const ServicesDetails = () => {
  return (
    <section className="services">
      <h1 className="services__title">Types of Refrigerators we repair</h1>
      <div className="services__container">
        <div className="services__block">
          <img className="services__img" src="../img/refrigerator.png" alt="" />
          <span className="services__name">Top Freezer</span>
        </div>
      </div>

      <p className="services__description">
        Refrigerator is an essential part of every household to keep edibles
        fresh and fit. You might get panicked when your kitchen affairs are
        disrupted by a broken fridge. However, there’s nothing to worry about
        when fast and reliable repair services are just a phone call away. Maple
        leaf repair services have well trained technicians alongwith high
        quality, state of the art tools to assist you with every
        refrigerator-related issue.
      </p>
      <div className="services__frame">
        <div className="services__wraper">
          <img
            className="services__brand"
            src="../img/brand/image 85.svg"
            alt="img"
          />

          <img
            className="services__brand"
            src="../img/brand/image 83.svg"
            alt="img"
          />

          <img
            className="services__brand"
            src="../img/brand/image 86.svg"
            alt="img"
          />
          <img
            className="services__brand"
            src="../img/brand/image 75.svg"
            alt="img"
          />
          <img
            className="services__brand"
            src="../img/brand/image 84.svg"
            alt="img"
          />
        </div>
        <div className="services__wraper services__wraper--second">
          <img
            className="services__brand"
            src="../img/brand/image 71.svg"
            alt="img"
          />

          <img
            className="services__brand"
            src="../img/brand/image 80.svg"
            alt="img"
          />

          <img
            className="services__brand"
            src="../img/brand/image 73.svg"
            alt="img"
          />
          <img
            className="services__brand"
            src="../img/brand/image 79.svg"
            alt="img"
          />
        </div>
        <div className="services__wraper services__wraper--third">
          <img
            className="services__brand"
            src="../img/brand/image 77.svg"
            alt="img"
          />

          <img
            className="services__brand"
            src="../img/brand/image 82.svg"
            alt="img"
          />

          <img
            className="services__brand"
            src="../img/brand/image 74.svg"
            alt="img"
          />
          <img
            className="services__brand"
            src="../img/brand/image 72.svg"
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};
