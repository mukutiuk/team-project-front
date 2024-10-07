import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './modules/Header';
// import { Footer } from './modules/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
