import { useState } from 'react';
import CitiesEmpty from '../../components/cities-empty/cities-empty';
import CitiesPlacesItem from '../../components/cities-places-item/cities-places-item';
import CitiesPlaces from '../../components/cities-places/cities-places';
import Header from '../../components/header/header';
import LocationNav from '../../components/locations-nav/locations-nav';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';
import LoadingPage from '../loading-page/loading-page';

export type MainPageProps = {
  citiesNames: string[];
  logged: boolean;
};

export default function MainPage({
  citiesNames,
  logged,
}: MainPageProps): JSX.Element {
  const isLoading = useAppSelector((state) => state.isOffersLoading);
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offersByCity);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const getOffersCount = () => offers.length;
  const isEmpty = () => !offers.length;
  if (isLoading) {
    return <LoadingPage />;
  }

  const getOffersCards = function (): JSX.Element[] {
    return offers.map((offer) => (
      <CitiesPlacesItem
        isMainCardType
        key={offer.id}
        onCardHover={setActiveCard}
        {...offer}
      />
    ));
  };
  return (
    <div className="page page--gray page--main">
      <Header logged={logged} enableUserNav />
      <main
        className={`page__main page__main--index ${
          isEmpty() ? 'page__main--index-empty' : ''
        }`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationNav citiesNames={citiesNames} currentCity={currentCity} />

        <div className="cities">
          <div
            className={`cities__places-container container ${
              isEmpty() ? 'cities__places-container--empty' : ''
            }`}
            data-active-card={activeCard}
          >
            <section
              className={
                isEmpty() ? 'cities__no-places' : 'cities__places places'
              }
            >
              {isEmpty() ? (
                <CitiesEmpty />
              ) : (
                <CitiesPlaces
                  offersCount={getOffersCount()}
                  currentCity={currentCity}
                >
                  {offers && getOffersCards()}
                </CitiesPlaces>
              )}
            </section>
            {isEmpty() ? (
              <div className="cities__right-section" />
            ) : (
              <div className="cities__right-section">
                <Map selectedOffer={activeCard} styleModifier="cities" />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
