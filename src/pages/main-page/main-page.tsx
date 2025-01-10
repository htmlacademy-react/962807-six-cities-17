import { useState } from 'react';
import CitiesPlacesItem from '../../components/cities-places-item/cities-places-item';
import CitiesPlaces from '../../components/cities-places/cities-places';
import Header from '../../components/header/header';
import LocationNav from '../../components/locations-nav/locations-nav';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';
import { Cities } from '../../mocks/cities';

export type MainPageProps = {
  logged: boolean;
  cities: Cities;
};

export default function MainPage({
  logged,
  cities,
}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const offersCount = offers.length;

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
        <LocationNav cities={cities} currentCity={currentCity} />

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
            <div className="cities__right-section">
              <Map selectedOffer={activeCard} styleModifier="cities" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
