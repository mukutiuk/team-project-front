import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './modules/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
