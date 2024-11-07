import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import './ServicesDetails.scss';
import { useEffect } from 'react';
import * as productAction from '../../features/ProductSlice';

export const ServicesDetails = () => {
  const { productDetail, content } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const findName = pathname.split('/');
    let name = findName[findName.length - 1];

    if (name.includes('%20')) {
      name = name.replace('%20', ' ');
    }

    const findProduct = content.find(item => item.name === name);

    if (findProduct) {
      dispatch(productAction.getProductDetailsData(findProduct?.id));
    }
  }, [pathname, dispatch, content]);

  const nameProduct = content.find(item => item.id === productDetail?.id);

  return (
    <section className="services">
      <h1 className="services__title">
        Types of {nameProduct?.name} we repair
      </h1>
      <div className="services__container">
        {productDetail?.deviceSubtypes.map(item => (
          <div key={item.id} className="services__block">
            <img
              className="services__img"
              src={`http://localhost:8082/api${item?.imageUrl}`}
              alt="img"
            />
            <span className="services__name">{item.name}</span>
          </div>
        ))}
      </div>

      <p className="services__description">{productDetail?.description}</p>
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
