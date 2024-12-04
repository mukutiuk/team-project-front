import { useEffect, useMemo, useState } from 'react';
import './OrdersAdminPage.scss';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import * as profileActon from '../../../features/ProfileSlice';
import { OrderForAdmin } from '../OrderForAdmin';
import debounce from 'debounce';

export const OrdersAdminPage = () => {
  const dispath = useAppDispatch();
  const { activeOrders, content, notActiveOrde, totalElements } =
    useAppSelector(state => state.profile);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const debounceSearch = debounce(() => {
    dispath(profileActon.getSerchQuery(search));
  }, 1000);
  const PAGE = 4;

  useEffect(() => {
    dispath(profileActon.getOrdersNotActive());
    dispath(profileActon.getOrdersActive(0));
    dispath(profileActon.getSerchQuery(''));
  }, [dispath]);

  const maxPage = useMemo(() => {
    if (totalElements % PAGE === 0) {
      return totalElements / 4 - 1;
    }

    return Math.floor(totalElements / 4);
  }, [totalElements]);

  return (
    <div className="orders">
      <input
        onChange={e => {
          setSearch(e.target.value);
          debounceSearch();
        }}
        value={search}
        placeholder="Key words"
        className="orders__search"
        type="text"
      />
      {search && (
        <div className="orders__container orders__container--active">
          <h1 className="orders__title">Search</h1>
          <div className="orders__wraper">
            {content?.map(order => (
              <OrderForAdmin key={order.orderDate} order={order} />
            ))}
          </div>
        </div>
      )}

      <div className="orders__container orders__container--active">
        <div
          onClick={() => {
            if (page > 0) {
              dispath(profileActon.getOrdersActive(page - 1));
              setPage(page - 1);
            }
          }}
          className="orders__arrow orders__arrow--up"
        ></div>
        <h1 className="orders__title">Active</h1>
        <div className="orders__wraper">
          {activeOrders?.map(order => (
            <OrderForAdmin key={order.orderDate} order={order} />
          ))}
        </div>
        <div
          onClick={() => {
            if (page < maxPage) {
              dispath(profileActon.getOrdersActive(page + 1));
              setPage(page + 1);
            }
          }}
          className="orders__arrow orders__arrow--down"
        ></div>
      </div>
      <div className="orders__container">
        <h1 className="orders__title">Not Active</h1>
        <div className="orders__wraper">
          {notActiveOrde?.map(order => (
            <OrderForAdmin key={order.orderDate} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};
