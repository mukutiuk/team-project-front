import './PlaceNearby.scss';

export const PlaceNearby = () => {
  return (
    <section className="place">
      <div className="place__title--block">
        <h1 className="place__title">Same-Day Repair Services Near You</h1>
      </div>
      <div className="place__container">
        <ul className="place__list">
          <li className="place__item">
            <span className="place__img"></span>
            <span className="place__name">Marrietta,GA</span>
          </li>
          <li className="place__item">
            <span className="place__img"></span>
            <span className="place__name">Dunwoody,GA</span>
          </li>
          <li className="place__item">
            <span className="place__img"></span>
            <span className="place__name">Alpharetta,GA</span>
          </li>
          <li className="place__item">
            <span className="place__img"></span>
            <span className="place__name">Woodstock,GA</span>
          </li>
        </ul>

        <ul className="place__list">
          <li className="place__item">
            <span className="place__img"></span>
            <span className="place__name">SugarHill,GA</span>
          </li>
          <li className="place__item">
            <span className="place__img"></span>
            <span className="place__name">Smirna,GA</span>
          </li>
          <li className="place__item">
            <span className="place__img"></span>
            <span className="place__name">Chamblee,GA</span>
          </li>
          <li className="place__item">
            <span className="place__img"></span>
            <span className="place__name">Sandy Springs,GA</span>
          </li>
        </ul>
      </div>

      <div>
        <iframe
          width="100%"
          height="353"
          scrolling="no"
          // eslint-disable-next-line max-len
          src="https://maps.google.com/maps?width=100%25&amp;height=353&amp;hl=en&amp;q=Madisson%20Dr,%20GA+(Mao)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </section>
  );
};
