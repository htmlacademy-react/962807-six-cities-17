import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch/useAppDispatch';
import { Cities, City } from '../../mocks/cities';
import { changeCity } from '../../store/action';
import LocationNavItem from '../locations-nav-item/locations-nav-item';
type LocationNavProps = {
  cities: Cities;
  currentCity: City;
};

export default function LocationNav({
  cities,
  currentCity,
}: LocationNavProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityChange: (evt: MouseEvent<HTMLAnchorElement>) => void = (
    evt
  ) => {
    const cityName = (evt.currentTarget.textContent as string).trim();
    if (!cityName) {
      return;
    }
    const nextCity = cities.find((city) => city.name === cityName);
    if (nextCity && currentCity.name !== nextCity.name) {
      dispatch(changeCity(nextCity));
    }
  };

  const getLocationNavItem = function (): JSX.Element[] {
    return cities.map((city) => (
      <LocationNavItem
        key={(Date.now() * Math.random()).toFixed(10)}
        active={city.name === currentCity.name ? true : undefined}
        onCityChange={handleCityChange}
      >
        {city.name}
      </LocationNavItem>
    ));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities && getLocationNavItem()}
        </ul>
      </section>
    </div>
  );
}
