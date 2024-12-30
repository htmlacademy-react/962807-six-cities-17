import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from '../../pages/empty-page/empty-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { Reviews } from '../../mocks/reviews';
import { Offers } from '../../mocks/offers';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

export type AppProps = {
  offersCount: number;
  logged: boolean;
  offers: Offers;
  reviews: Reviews;
};

export default function App({
  offersCount,
  logged,
  offers,
  reviews,
}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <MainPage
                offersCount={offersCount}
                logged={logged}
                offers={offers}
              />
            }
          />
          {logged && (
            <Route
              path="favorites"
              element={<FavoritePage logged={logged} />}
            />
          )}
          {logged || <Route path="login" element={<LoginPage />} />}
          <Route
            path="offer/:id"
            element={
              <OfferPage logged={logged} offers={offers} reviews={reviews} />
            }
          />
          <Route path="*" element={<EmptyPage logged={logged} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
