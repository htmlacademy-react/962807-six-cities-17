import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';
import EmptyPage from '../../pages/empty-page/empty-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

type AppProps = {
  citiesNames: string[];
};
export default function App({ citiesNames }: AppProps): JSX.Element {
  const authStatus: AuthStatus = useAppSelector((state) => state.authStatus);
  const logged: boolean = authStatus === AuthStatus.Auth;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main}>
          <Route
            index
            element={<MainPage logged={logged} citiesNames={citiesNames} />}
          />
          {logged || <Route path={AppRoute.Login} element={<LoginPage />} />}
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authStatus={authStatus}>
                <FavoritePage />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage logged={logged} />}
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
