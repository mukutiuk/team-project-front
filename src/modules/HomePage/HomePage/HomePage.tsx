import { FrequentlyAsked } from '../FrequentlyAsked';
import { Main } from '../Main';
import { Reviews } from '../Reviews';
import { SelectDevice } from '../SelectDevice';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <main className="home">
      <Main />
      <SelectDevice />
      <Reviews />
      <FrequentlyAsked />
    </main>
  );
};
