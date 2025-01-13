import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cities } from '../../mocks/cities';
import { Reviews } from '../../mocks/reviews';
import EmptyPage from '../../pages/empty-page/empty-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { AppRoute } from '../../const';

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
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage logged={logged} cities={cities} />} />
          {logged && (
            <Route
              path={AppRoute.Favorites}
              element={<FavoritePage logged={logged} />}
            />
          )}
          {logged || <Route path={AppRoute.Login} element={<LoginPage />} />}
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage logged={logged} reviews={reviews} />}
          />
          <Route
            path={AppRoute.Empty}
            element={<EmptyPage logged={logged} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
