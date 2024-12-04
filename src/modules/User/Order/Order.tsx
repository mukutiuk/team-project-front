import React from 'react';
import './Order.scss';
import { OrderType } from '../../../features/ProfileSlice';

type Props = {
  order: OrderType;
};

export const Order: React.FC<Props> = ({ order }) => {
  const borderColor = order.status === 'COMPLETED';

  return (
    <div
      style={{ borderColor: `${borderColor ? '#087713' : '#d71616'}` }}
      className="bid__block"
    >
      <div className="bid__frame">
        <div className="bid__content bid__content--type">
          <span className="bid__value">Type:</span>
          <span className="bid__description">{order.device}</span>
        </div>
        <div className="bid__content bid__content--problem">
          <span className="bid__value">Problem:</span>
          <span className="bid__description">{order.description}</span>
        </div>
        <div className="bid__content bid__content--status">
          <span className="bid__value">Status:</span>
          <span className="bid__description">{order.status}</span>
        </div>
      </div>
      <div className="bid__rules">
        <p className="bid__data">{order.orderDate.slice(0, 10)}</p>
      </div>
    </div>
  );
};
