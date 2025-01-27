import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import FavoriteList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AuthenticationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getFavoriteOffers } from '../../store/card-process/card-selectors';
import { getAuthenticationStatus } from '../../store/user-process/user-selectors';

export default function FavoritePage(): JSX.Element {
  const navigate = useNavigate();
  const isLogged =
    useAppSelector(getAuthenticationStatus) === AuthenticationStatus.Auth;
  const favoriteListData = useAppSelector(getFavoriteOffers);
  const isEmpty = favoriteListData.length === 0;
  if (!isLogged) {
    navigate(-1);
  }

  return (
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
          <section className={`favorites ${isEmpty ? 'favorites--empty' : ''}`}>
            <h1 className="favorites__title">Saved listing</h1>
            {!isEmpty ? (
              <FavoriteList favoriteListData={favoriteListData} />
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
