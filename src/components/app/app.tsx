import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from '../../pages/empty-page/empty-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';

export type AppProps = {
  offersCount: number;
  logged?: true;
};

export default function App({ offersCount, logged }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={<MainPage offersCount={offersCount} logged={logged} />}
          />
          {logged && (
            <Route
              path="favorites"
              element={<FavoritePage logged={logged} />}
            />
          )}
          {logged || <Route path="login" element={<LoginPage />} />}
          <Route path="offer" element={<OfferPage logged={logged} />} />
          <Route path="*" element={<EmptyPage logged={logged} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
