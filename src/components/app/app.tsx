import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import EmptyPage from '../../pages/empty-page/empty-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { getIsOffersLoading } from '../../store/card-process/card-selectors';
import {
  getIsFullOfferLoading,
  getIsNearOffersLoading,
  getIsReviewsLoading,
} from '../../store/offer-process/offer-selectors';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

// type AppProps = {
//   citiesNames: string[];
// };
export default function App(): JSX.Element {
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);
  const isFullOfferLoading = useAppSelector(getIsFullOfferLoading);
  const isNearOffersLoading = useAppSelector(getIsNearOffersLoading);

  if (
    isOffersLoading ||
    isReviewsLoading ||
    isFullOfferLoading ||
    isNearOffersLoading
  ) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element={<MainPage />} />
            <Route
              path={AppRoute.Login}
              element={
                // <PrivateRoute>
                <LoginPage />
                // </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritePage />
                </PrivateRoute>
              }
            />
            <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
            <Route path={AppRoute.Empty} element={<EmptyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
