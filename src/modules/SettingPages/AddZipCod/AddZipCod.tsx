import './AddZipCod.scss';
import * as productAction from '../../../features/ProductSlice';
import { useAppDispatch } from '../../../utils/hooks';
import { useState } from 'react';

export const AddZipCod = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="code">
      <h1 className="code__title">Zip Code</h1>
      <div className="code__wraper">
        <p className="code__name">New</p>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="code__input"
          placeholder="___"
          type="number"
        />
        <button
          onClick={() => {
            dispatch(productAction.fetchAddZipCode(inputValue));
            setInputValue('');
          }}
          className="code__button"
        >
          Zip Cod
        </button>
      </div>
    </div>
  );
};
