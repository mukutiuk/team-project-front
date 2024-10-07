import './AddZipCod.scss';

export const AddZipCod = () => {
  return (
    <div className="code">
      <h1 className="code__title">Zip Code</h1>
      <div className="code__wraper">
        <p className="code__name">New</p>
        <input className="code__input" placeholder="___" type="number" />
        <button className="code__button">Zip Cod</button>
      </div>
    </div>
  );
};
