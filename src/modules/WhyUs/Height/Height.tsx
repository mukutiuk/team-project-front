/* eslint-disable react/no-unescaped-entities */
import './Height.scss';

export const Height = () => {
  return (
    <section className="important">
      <div className="important__title--block">
        <h1 className="important__title">WHY US?</h1>
      </div>
      <div className="important__wraper">
        <div className="important__block">
          <span className="important__line"></span>
          <p className="important__description">
            Choose our appliance repair company for fast, reliable service that
            gets your appliances back to perfect working order. With expert
            technicians and affordable rates, we're committed to your
            satisfaction every step of the way.
          </p>
        </div>

        <div className="important__block">
          <span className="important__line"></span>
          <p className="important__description">
            Trust our appliance repair company for prompt, professional service
            backed by years of experience. We guarantee efficient repairs with
            quality parts to keep your appliances running smoothly
          </p>
        </div>
      </div>
      <h1 className="important__name">High Quality Work & Reputation</h1>
      <ul className="important__list">
        <li className="important__item">
          <div className="list__number">
            <span className="list__img list__img--one"></span>
          </div>
          <span className="list__title">Fast Same-day Service</span>
        </li>
        <li className="important__item">
          <div className="list__number">
            <span className="list__img list__img--two"></span>
          </div>
          <span className="list__title">Full Warranty On Parts & Labor</span>
        </li>
        <li className="important__item">
          <div className="list__number">
            <span className="list__img list__img--three"></span>
          </div>
          <span className="list__title">Fully Insured</span>
        </li>
        <li className="important__item">
          <div className="list__number">
            <span className="list__img list__img--four"></span>
          </div>
          <span className="list__title">Simple Pricing</span>
        </li>
      </ul>
    </section>
  );
};
