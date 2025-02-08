import { Route, Routes } from 'react-router-dom';
import { App } from './App';
import './App.scss';
import { Footer } from './modules/Footer';
import { HomePage } from './modules/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './modules/NotFoundPage';
import { WhyUs } from './modules/WhyUs/WhyUs';
import { ServicePage } from './modules/ServicesPage';
import { Provider } from 'react-redux';
import store from './app/store';
import { BookDevice } from './modules/Book/BookDevice';
import { BookZip } from './modules/Book/BookZip';
import { BookForm } from './modules/Book/BookForm';
import { ServicesDetails } from './modules/ServicesDetails';
import { TextUs } from './modules/TextUS';
import { SettingsPage } from './modules/SettingPages/SettingsPage';
import { AddZipCod } from './modules/SettingPages/AddZipCod';
import { ChoseSetting } from './modules/SettingPages/ChoseSetting';
import { ChoseUserPage } from './modules/User/ChoseUserPage';
import { UserPage } from './modules/User/UserPage';
import { OrderPage } from './modules/User/OrderPage/OrderPage';
import { BookEnd } from './modules/Book/BookEnd';
import { ProtectedRoute } from './modules/SettingPages/ProtectedRoute';
import { OrdersAdminPage } from './modules/SettingPages/OrdersAdminPage';
import { ChangePassword } from './modules/User/ChangePassword';
import { SuccessfulText } from './modules/SuccessfulText';
import { SuccessfulChangePassword } from './modules/SuccessfulChangePassword';

export const Root = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/user">
                <Route index element={<ChoseUserPage />} />
                <Route path="/user/profile" element={<UserPage />} />
                <Route path="/user/orders" element={<OrderPage />} />
              </Route>
              <Route path="/password" element={<ChangePassword />} />
              <Route
                path="/passwordSuccesful"
                element={<SuccessfulChangePassword />}
              />
            </Route>
            <Route path="/whyUs" element={<WhyUs />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/settings">
                <Route index element={<ChoseSetting />} />
                <Route path="/settings/zipCode" element={<SettingsPage />} />
                <Route path="/settings/orders" element={<OrdersAdminPage />} />
                <Route path="/settings/addZip" element={<AddZipCod />} />
              </Route>
            </Route>
            <Route path="/services">
              <Route index element={<ServicePage />} />
              <Route path="/services/textUs" element={<TextUs />} />
              <Route
                path="/services:productName"
                element={<ServicesDetails />}
              />
            </Route>
            <Route path="/textSuccses" element={<SuccessfulText />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/book:zip" element={<BookZip />} />
          <Route path="/book:devise" element={<BookDevice />} />
          <Route path="/book:logIn" element={<BookForm />} />
          <Route path="/book:successfully" element={<BookEnd />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
};
