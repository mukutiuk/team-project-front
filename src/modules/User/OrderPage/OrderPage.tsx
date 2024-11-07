import './OrderPage.scss';

export const OrderPage = () => {
  return (
    <div className="order">
      <div className="order__container">
        <h1 className="order__title">Active</h1>
        <div className="order__wraper">
          <div className="order__block">
            <div className="order__frame">
              <div className="order__content">
                <span className="order__value">Type:</span>
                <span className="order__description">Washer</span>
              </div>
              <div className="order__content">
                <span className="order__value">Problem:</span>
                <span className="order__description">Too much shaking</span>
              </div>
              <div className="order__content">
                <span className="order__value">Status:</span>
                <span className="order__description">Wainting on parts</span>
              </div>
            </div>
            <div className="order__rules">
              <p className="order__data">02/01/2024</p>
              <a className="order__ask" href="">
                Ask your technician a question
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
