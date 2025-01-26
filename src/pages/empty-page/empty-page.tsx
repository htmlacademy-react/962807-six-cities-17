import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { getIsOffersLoadingError } from '../../store/card-process/card-selectors';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getIsFullOfferLoadingError } from '../../store/offer-process/offer-selectors';
import { Link } from 'react-router-dom';

export default function EmptyPage(): JSX.Element {
  const isOffersLoadingError = useAppSelector(getIsOffersLoadingError);
  const isFullOfferLoadingError = useAppSelector(getIsFullOfferLoadingError);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header enableUserNav={false} />
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">
                  {isOffersLoadingError || isFullOfferLoadingError
                    ? 'Unknown error occurred'
                    : '404 Not Found'}
                </b>
                <p className="cities__status-description">
                  {isOffersLoadingError || isFullOfferLoadingError
                    ? 'Some error occurred on upload. Please try again later.'
                    : 'This is not the page you are looking for'}
                </p>
                <Link
                  to="/"
                  className="reviews__submit form__submit button"
                  type="submit"
                  style={{ marginTop: '30px' }}
                >
                  To Main Page
                </Link>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
