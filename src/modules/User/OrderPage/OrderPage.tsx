import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import './OrderPage.scss';
import * as actionProfile from '../../../features/ProfileSlice';
import { useEffect, useMemo } from 'react';
import { Order } from '../Order/Order';

export const OrderPage = () => {
  const dispath = useAppDispatch();
  const { ownOrders } = useAppSelector(state => state.profile);

  useEffect(() => {
    dispath(actionProfile.getProfileOrders());
  }, [dispath]);

  const activeOrders = useMemo(() => {
    return ownOrders?.filter(item => item.status === 'COMPLETED');
  }, [ownOrders]);

  const notActiveOrders = useMemo(() => {
    return ownOrders?.filter(item => item.status !== 'COMPLETED');
  }, [ownOrders]);

  return (
    <div className="order">
      <div className="order__container order__container--active">
        <h1 className="order__title">Active</h1>
        <div className="order__wraper">
          {notActiveOrders?.map(item => (
            <Order key={item.orderDate} order={item} />
          ))}
        </div>
      </div>
      <div className="order__container">
        <h1 className="order__title">Not Active</h1>
        <div className="order__wraper">
          {activeOrders?.map(item => (
            <Order key={item.orderDate} order={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
