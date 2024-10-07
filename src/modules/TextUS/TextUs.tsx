import './TextUs.scss';

export const TextUs = () => {
  return (
    <div className="text">
      <h1 className="text__title">Text Us</h1>
      <p className="text__description">Contact our Team </p>
      <div className="text__line"></div>
      <input className="text__input" type="email" placeholder="E-mail*" />
      <textarea
        className="text__textarea"
        placeholder="What can we help with?*"
        name="text"
        id=""
      ></textarea>
      <button className="text__button">Send</button>
    </div>
  );
};
