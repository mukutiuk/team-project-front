import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks/hooks';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';
import './ServicesPage.scss';

export const ServicePage = () => {
  const { content } = useAppSelector(state => state.products);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <section className="service">
      <div className="service__block">
        <h1 className="service__title">Best Price Appliance Repair</h1>
        <div className="service__container">
          <div>
            <h3 className="service__name">Call Us Now!</h3>
            <p className="service__phone">470- 909-1879</p>
          </div>
        </div>
      </div>
      <div className="service__slider">
        <Slider {...settings}>
          {content.map(item => (
            <NavLink
              key={item.id}
              className="service__link"
              to={`/services/${item.name}`}
            >
              <img
                className="service__img"
                src={`http://localhost:8082/api${item.imageUrl}`}
                alt="img"
              />
            </NavLink>
          ))}
        </Slider>
      </div>
      <NavLink to="/services/textUs" className="service__button">
        Schedule Now
      </NavLink>
    </section>
  );
};
