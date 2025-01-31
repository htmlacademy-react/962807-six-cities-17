import { CITIES_NAMES } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getCurrentCity } from '../../store/card-process/card-selectors';
import { getRandomKey, handleCityChange } from '../../utils/utils';
import LocationsNavItem from '../locations-nav-item/locations-nav-item';

export default function LocationsNav(): JSX.Element {
  const citiesNames = CITIES_NAMES;
  const currentCity = useAppSelector(getCurrentCity);
  const getLocationNavItem = () =>
    citiesNames.map((city) => (
      <LocationsNavItem
        key={getRandomKey()}
        active={city === currentCity.name ? true : undefined}
        handleCityChange={(evt) => handleCityChange(evt, currentCity.name)}
      >
        {city}
      </LocationsNavItem>
    ));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesNames && getLocationNavItem()}
        </ul>
      </section>
    </div>
  );
}
