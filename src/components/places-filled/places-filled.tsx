import LocationNav from '../locations-nav/locations-nav';
import Map from '../../components/map/map';
import PlacesCards from '../places-cards/places-cards';

export default function PlacesFilled(): JSX.Element {
  return (
    <main className={'page__main page__main--index'}>
      <h1 className="visually-hidden">Cities</h1>
      <LocationNav />

      <div className="cities">
        <div className={'cities__places-container container'}>
          <section className={'cities__places places'}>
            <PlacesCards />
          </section>
          <div className="cities__right-section">
            <Map styleModifier="cities" />
          </div>
        </div>
      </div>
    </main>
  );
}
