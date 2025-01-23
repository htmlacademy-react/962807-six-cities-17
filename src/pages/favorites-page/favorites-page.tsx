import { Helmet } from 'react-helmet-async';
import FavoriteList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthStatus } from '../../store/user-process/user-selectors';
import { getOffers } from '../../store/card-process/card-selectors';

export default function FavoritePage(): JSX.Element {
  const isLogged = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  const favoriteListData = useAppSelector(getOffers); // заменить на данные с сервера
  // const favoriteListData = [];
  const isEmpty = favoriteListData.length === 0;
  const navigate = useNavigate();
  if (!isLogged) {
    navigate(AppRoute.Main);
  }

  return (
    // <div className="page">
    <div className={`page ${isEmpty ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header enableUserNav />
      <main
        className={`page__main page__main--favorites ${
          isEmpty ? 'page__main--favorites-empty' : ''
        }`}
      >
        <div className="page__favorites-container container">
          {/* <section className="favorites"> */}
          <section className={`favorites ${isEmpty ? 'favorites--empty' : ''}`}>
            <h1 className="favorites__title">Saved listing</h1>
            {!isEmpty ? (
              <FavoriteList />
            ) : (
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
