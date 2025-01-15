import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch/useAppDispatch';
import { changeCity } from '../../store/action';
import { City } from '../../types';
import LocationNavItem from '../locations-nav-item/locations-nav-item';
type LocationNavProps = {
  citiesNames: string[];
  currentCity: City;
};

export default function LocationNav({
  citiesNames,
  currentCity,
}: LocationNavProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityChange: (evt: MouseEvent<HTMLAnchorElement>) => void = (
    evt
  ) => {
    const cityName = (evt.currentTarget.textContent as string).trim();
    const nextCity = citiesNames.find((city) => city === cityName);
    if (nextCity && currentCity.name !== nextCity) {
      dispatch(changeCity(nextCity));
    }
  };

  const getLocationNavItem = function (): JSX.Element[] {
    return citiesNames.map((city) => (
      <LocationNavItem
        key={(Date.now() * Math.random()).toFixed(10)}
        active={city === currentCity.name ? true : undefined}
        onCityChange={handleCityChange}
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
