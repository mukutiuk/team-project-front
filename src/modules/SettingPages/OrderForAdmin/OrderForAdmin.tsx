import React, { useState } from 'react';
import { OrderType } from '../../../features/ProfileSlice';
import './OrderForAdmin.scss';
import * as profileAction from '../../../features/ProfileSlice';
import { useAppDispatch } from '../../../utils/hooks';
// import * as debounce from 'debounce';

type Props = {
  order: OrderType;
};

export const OrderForAdmin: React.FC<Props> = ({ order }) => {
  const [isSelector, setIsSelector] = useState(false);
  const [status, setStatus] = useState(order.status);
  const [isProblem, setIsProblem] = useState(false);
  const [problemDescription, setProblemDescription] = useState(
    order.description || 'Description',
  );

  const dispath = useAppDispatch();

  const borderColor = order.status === 'COMPLETED';

  const chooseStatus = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setStatus(e.currentTarget.innerHTML);
    setIsSelector(false);
    dispath(
      profileAction.changeStatusOrder({
        id: +order.id,
        value: e.currentTarget.innerHTML,
      }),
    )
      .unwrap()
      .then(() => {
        dispath(profileAction.getOrdersActive(0));
        dispath(profileAction.getOrdersNotActive());
      });
  };

  return (
    <div
      style={{ borderColor: `${borderColor ? '#087713' : '#d71616'}` }}
      className="orderer__block"
    >
      <div className="orderer__frame">
        <div className="orderer__content orderer__content--type">
          <span className="orderer__value">Type:</span>
          <span className="orderer__description">{order.device}</span>
        </div>
        <div className="orderer__content orderer__content--problem">
          <span className="orderer__value">Problem:</span>
          <span className="orderer__description">
            {!isProblem && problemDescription}
            {isProblem && (
              <textarea
                autoFocus
                onBlur={() => {
                  dispath(
                    profileAction.changeDescription({
                      id: +order.id,
                      value: problemDescription || '',
                    }),
                  );
                  setIsProblem(false);
                }}
                className="orderer__problem"
                value={problemDescription}
                onChange={e => setProblemDescription(e.target.value)}
              ></textarea>
            )}
          </span>
          <div
            onClick={() => setIsProblem(!isProblem)}
            className="orderer__change"
          ></div>
        </div>
        <div
          tabIndex={0}
          onBlur={() => {
            setIsSelector(false);
            setIsProblem(false);
          }}
          className="orderer__content"
        >
          <span className="orderer__value">Status:</span>
          <span className="orderer__description">
            {!isSelector && status}
            {isSelector && (
              <ul className="orderer__list">
                <li onClick={chooseStatus} className="orderer__item">
                  COMPLETED
                </li>
                <li onClick={chooseStatus} className="orderer__item">
                  SCHEDULED
                </li>
                <li onClick={chooseStatus} className="orderer__item">
                  WAITING_ON_PARTS
                </li>
                <li onClick={chooseStatus} className="orderer__item">
                  WAITING_ANSWER_FROM_CUSTOMER
                </li>
              </ul>
            )}
          </span>
          <div
            onClick={() => setIsSelector(!isSelector)}
            className="orderer__change"
          ></div>
        </div>
      </div>
      <div className="orderer__rules">
        <p className="orderer__data">{order.orderDate.slice(0, 10)}</p>
        <div className="orderer__contacts">
          <p className="orderer__name orderer__details">{order.name}</p>
          <a
            href={`tel:${order.phoneNumber}`}
            className="orderer__phone orderer__details"
            rel="noreferrer"
          >
            {order.phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};
