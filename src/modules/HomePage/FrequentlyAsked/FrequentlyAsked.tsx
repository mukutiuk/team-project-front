import { Link, NavLink } from 'react-router-dom';
import './FrequentlyAsked.scss';

export const FrequentlyAsked = () => {
  return (
    <section className="question">
      <h1 className="question__title">Frequently Asked Questions</h1>
      <div className="question__frame">
        <div className="question__wraper">
          <h2 className="question__name">How do I request a repair?</h2>
          <p className="question__description">
            To request a repair simply fill our online form or give us a call.
            team will get back to you as sonn as possible to schedule an
            appointment.
          </p>
        </div>

        <div className="question__img"></div>
      </div>

      <div className="question__frame">
        <div className="question__wraper">
          <h2 className="question__name">How much my repair will cost?</h2>
          <p className="question__description">
            The cost of repair depends on the type of appliance and extent of
            damage. We offer competitive pricing and will provide you with
            detalied quote before starting any work.
          </p>
        </div>

        <div className="question__img"></div>
      </div>

      <div className="question__frame">
        <div className="question__wraper">
          <h2 className="question__name">How long does repair cost?</h2>
          <p className="question__description">
            The duration of the repair varies depending on the few factors. Your
            technitian will provide you with more details after diagnostic.
          </p>
        </div>

        <div className="question__img"></div>
      </div>

      <div className="question__frame question__frame--last">
        <div className="question__wraper">
          <h2 className="question__name">Do you offer warranty?</h2>
          <p className="question__description">
            Yes, we provide a warranty for our repair services.
          </p>
        </div>

        <div className="question__img"></div>
      </div>
      <div className="question__answer">
        <div className="question__container">
          <h1 className="question__title question__title--bottom">
            Still have questions?
          </h1>
          <Link to="/services/textUs" className="question__appointment">
            Text Us
          </Link>
        </div>

        <div className="question__buttons">
          <NavLink className="question__button" to="/book:zip">
            Schedule
          </NavLink>
        </div>
      </div>
    </section>
  );
};
