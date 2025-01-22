import { CITIES_NAMES } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCurrentCity } from '../../store/card-process/card-selectors';
import { getRandomKey, handleCityChange } from '../../utils/utils';
import LocationNavItem from '../locations-nav-item/locations-nav-item';

export default function LocationNav(): JSX.Element {
  const citiesNames = CITIES_NAMES;
  const currentCity = useAppSelector(getCurrentCity);
  const getLocationNavItem = () =>
    citiesNames.map((city) => (
      <LocationNavItem
        key={getRandomKey()}
        active={city === currentCity.name ? true : undefined}
        onCityChange={(evt) => handleCityChange(evt, currentCity.name)}
      >
        {city}
      </LocationNavItem>
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
