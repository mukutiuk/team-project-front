import './SuccessfulChangePassword.scss';

export const SuccessfulChangePassword = () => {
  return (
    <>
      <div className="passw">
        <div className="passw__img"></div>
        <h1 className="passw__title">Thank you!</h1>
        <p className="passw__status">
          Your password has been successfully changed
        </p>
      </div>
    </>
  );
};
