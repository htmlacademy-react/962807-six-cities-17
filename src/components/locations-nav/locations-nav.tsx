import { City } from '../../types';
import { getRandomKey, handleCityChange } from '../../utils/utils';
import LocationNavItem from '../locations-nav-item/locations-nav-item';
type LocationNavProps = {
  citiesNames: string[];
  currentCity: City;
};

export default function LocationNav({
  citiesNames,
  currentCity,
}: LocationNavProps): JSX.Element {
  const getLocationNavItem = function (): JSX.Element[] {
    return citiesNames.map((city) => (
      <LocationNavItem
        key={getRandomKey()}
        active={city === currentCity.name ? true : undefined}
        onCityChange={(evt) => handleCityChange(evt, currentCity.name)}
      >
        {city}
      </LocationNavItem>
    ));
  };

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
