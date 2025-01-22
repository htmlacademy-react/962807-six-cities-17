import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { getIsOffersLoadingError } from '../../store/card-process/card-selectors';
import { useAppSelector } from '../../hooks/useAppSelector';

export default function EmptyPage(): JSX.Element {
  const isOffersLoadingError = useAppSelector(getIsOffersLoadingError);
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
                  {isOffersLoadingError
                    ? 'Unknown error occurred'
                    : '404 Not Found'}
                </b>
                <p className="cities__status-description">
                  {isOffersLoadingError
                    ? 'Some error occurred on upload. Please try again later.'
                    : 'This is not the page you are looking for'}
                </p>
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
