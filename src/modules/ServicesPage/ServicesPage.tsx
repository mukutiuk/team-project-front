import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import Slider from 'react-slick';
import './ServicesPage.scss';
import * as actionProduct from '../../features/ProductSlice';

export const ServicePage = () => {
  const { content } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();
  const choseDevice = (id: number) => {
    dispatch(actionProduct.getProductDetailsData(id));
  };

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
              onClick={() => choseDevice(item.id)}
              key={item.id}
              className="service__link"
              to={`/services/${item.name}`}
            >
              <img
                className="service__img"
                src={`https://my-sevice-images.s3.eu-north-1.amazonaws.com${item.imageUrl}`}
                alt="img"
              />
            </NavLink>
          ))}
        </Slider>
      </div>
      <NavLink to="/book:zip" className="service__button">
        Schedule Now
      </NavLink>
    </section>
  );
};
