import './Reviews.scss';

export const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__container">
        <div className="reviews__wraper">
          <h2 className="reviews__title">+3900 happy clients</h2>
          <h1 className="reviews__name">Dont just take our words</h1>
        </div>
        <div className="reviews__content">
          <div className="reviews__block">
            <img className="reviews__img" src="../img/Frame50.png" alt="img" />
            <div className="reviews__frame">
              <div className="reviews__stars">
                <span className="reviews__star"></span>
                <span className="reviews__star"></span>
                <span className="reviews__star"></span>
                <span className="reviews__star"></span>
                <span className="reviews__star"></span>
              </div>
              <p className="reviews__description">
                Alex was awesome!! Very sweet, very professional. Very
                knowledgeable. He was on time and got the job done on my washer
                very good!!
              </p>
            </div>
          </div>

          <div className="reviews__block">
            <img className="reviews__img" src="../img/Frame51.svg" alt="img" />
            <div className="reviews__frame">
              <div className="reviews__stars">
                <span className="reviews__star"></span>
                <span className="reviews__star"></span>
                <span className="reviews__star"></span>
                <span className="reviews__star"></span>
                <span className="reviews__star"></span>
              </div>
              <p className="reviews__description">
                Superb service from Alexey . I was having trouble with my dryer
                and refrigerator. My dryer wasn’t heating and my refrigerator
                wasn’t cooling . This guy went above and beyond to fix the
                problem
              </p>
            </div>
          </div>
        </div>
        <a
          className="reviews__more"
          target="_blank"
          // eslint-disable-next-line max-len
          href="https://www.thumbtack.com/ga/atlanta/appliance-repair/ok-repair/service/509485724116492292?utm_medium=web&utm_source=txt&surface=sp"
          rel="noreferrer"
        >
          mORE
        </a>
      </div>
    </section>
  );
};
