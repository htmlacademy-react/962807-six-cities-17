import { useAppSelector } from '../../hooks/use-app-selector';
import { getCurrentCity } from '../../store/card-process/card-selectors';
import LocationsNav from '../locations-nav/locations-nav';

export default function PlacesEmpty(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  return (
    <main className={'page__main page__main--index page__main--index-empty'}>
      <h1 className="visually-hidden">Cities</h1>
      <LocationsNav />
      <div className="cities">
        <div
          className={
            'cities__places-container container cities__places-container--empty'
          }
        >
          <section className={'cities__no-places'}>
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">
                {/* We could not find any property available at the moment in ${} */}
                {`We could not find any property available at the moment in ${currentCity.name}`}
              </p>
            </div>
          </section>
          <div className="cities__right-section" />
        </div>
      </div>
    </main>
  );
}
