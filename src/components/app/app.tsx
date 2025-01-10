import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cities } from '../../mocks/cities';
import { Reviews } from '../../mocks/reviews';
import EmptyPage from '../../pages/empty-page/empty-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

export type AppProps = {
  logged: boolean;
  reviews: Reviews;
  cities: Cities;
};

export default function App({
  logged,
  reviews,
  cities,
}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage logged={logged} cities={cities} />} />
          {logged && (
            <Route
              path="favorites"
              element={<FavoritePage logged={logged} />}
            />
          )}
          {logged || <Route path="login" element={<LoginPage />} />}
          <Route
            path="offer/:id"
            element={<OfferPage logged={logged} reviews={reviews} />}
          />
          <Route path="*" element={<EmptyPage logged={logged} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
