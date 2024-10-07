import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo"></div>

      <div className="footer__container">
        <div className="footer__wraper">
          <div className="footer__details">
            <div className="footer__frame">
              <p className="footer__name">Adress</p>
              <a className="footer__value" href="">
                12322 Madisson Dr, GA, 30346
              </a>
            </div>
            <div className="footer__frame">
              <p className="footer__name">Contact</p>
              <a className="footer__value" href="tel: +4709091879">
                (470)-909-1879
              </a>
            </div>
          </div>
        </div>

        <div className="footer__block">
          <a className="footer__value footer__value--thambtack" href="">
            Thambtack
          </a>
          <a className="footer__value footer__value--line" href="">
            Yelp
          </a>
        </div>
      </div>
    </footer>
  );
};
