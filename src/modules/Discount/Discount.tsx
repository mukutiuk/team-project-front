import './Discount.scss';

export const Discount = () => {
  return (
    <div className="discount">
      <div className="discount__container">
        <div className="discount__tiket">
          <div className="tiket">
            <div className="tiket__wraper">
              <h1 className="tiket__title">Discount</h1>
              <p className="tiket__description">
                For your first booking online
              </p>
            </div>

            <div className="tiket__price">
              <h1 className="tiket__cost">$30</h1>
              <img className="tiket__code" src="../img/code.svg" alt="img" />
            </div>
          </div>
        </div>

        <div className="discount__tiket">
          <div className="tiket">
            <div className="tiket__wraper">
              <h1 className="tiket__title">Discount</h1>
              <p className="tiket__description">For return Costumers</p>
            </div>

            <div className="tiket__price">
              <h1 className="tiket__cost">$15</h1>
              <img className="tiket__code" src="../img/code.svg" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="discount__description">
        <h2 className="discount__title">
          Take Advantage of Our Discount Coupon Program
        </h2>
        <p className="discount__detail">
          We are pleased to offer a range of discount coupons, including
          our online booking discount, seniors and frontline workers discount,
          and returning customer discount!  We encourage you to use these
          coupons – they’re a gesture of our commitment to our valued
          customers.  We want to keep you as a delighted customer. Use the
          coupons with our compliments!
        </p>
        <p className="discount__conditions">
          * Show the discount voucher to the technician before they start your
          appliance repair <br />* One-time discount per service only <br />*
          Does not include maintenance or earlier services <br />* Offer applies
          to labour charges only
        </p>
      </div>
    </div>
  );
};
