import { useState } from 'react';
import { AppProps } from '../../components/app/app';
import CitiesPlacesItem from '../../components/cities-places-item/cities-places-item';
import CitiesPlacesMap from '../../components/cities-places-map/cities-places-map';
import CitiesPlaces from '../../components/cities-places/cities-places';
import Header from '../../components/header/header';
import LocationNav from '../../components/locations-nav/locations-nav';

type MainPageProps = Omit<AppProps, 'reviews'>;

export default function MainPage({
  offersCount,
  logged,
  offers,
}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationNav />

        <div className="cities">
          <div
            className="cities__places-container container"
            data-active-card={activeCard}
          >
            <section className="cities__places places">
              <CitiesPlaces offersCount={offersCount}>
                {offers && getOffersCards()}
              </CitiesPlaces>
            </section>
            <CitiesPlacesMap />
          </div>
        </div>
      </main>
    </div>
  );
}
