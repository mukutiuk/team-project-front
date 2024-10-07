import { Route, Routes } from 'react-router-dom';
import { App } from './App';
import './App.scss';
import { Footer } from './modules/Footer';
import { HomePage } from './modules/HomePage/HomePage';
import { HashRouter } from 'react-router-dom';
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

export const Root = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/">
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/whyUs" element={<WhyUs />} />
            <Route path="/settings">
              <Route index element={<SettingsPage />} />
              <Route path=":addZip" element={<AddZipCod />} />
            </Route>
            <Route path="/services">
              <Route index element={<ServicePage />} />
              {/* <Route path=":textUs" element={<TextUs />} /> */}

              <Route path=":productName" element={<ServicesDetails />} />
            </Route>
            <Route path="/services">
              <Route index element={<ServicePage />} />
              <Route path=":textUs" element={<TextUs />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/book:zip" element={<BookZip />} />
          <Route path="/book:devise" element={<BookDevice />} />
          <Route path="/book:logIn" element={<BookForm />} />
        </Routes>
        <Footer />
      </Provider>
    </HashRouter>
  );
};
