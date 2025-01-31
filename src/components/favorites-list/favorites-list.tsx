import { useNavigate } from 'react-router-dom';
import { AppRoute, CardType } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getCurrentCity } from '../../store/card-process/card-selectors';
import { Offers } from '../../types';
import { getRandomKey, handleCityChange } from '../../utils/utils';
import PlacesCardList from '../places-card-list/places-card-list';

export default function FavoritesList({
  favoriteListData,
}: {
  favoriteListData: Offers;
}): JSX.Element {
  const navigate = useNavigate();
  const currentCity = useAppSelector(getCurrentCity);

  const favoriteListDataByCity = (city: string) =>
    favoriteListData.filter((offer) => offer.city.name === city);

  const getFavoriteCitiesList = () => {
    const cities = new Map();
    favoriteListData.forEach((offer) => {
      cities.set(offer.city.name, '');
    });
    const result = [...cities.keys()] as string[];
    return result;
  };

  const favoriteCitiesList = getFavoriteCitiesList();

  return (
    <ul className="favorites__list">
      {favoriteCitiesList.map((city) => (
        <li className="favorites__locations-items" key={getRandomKey()}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a
                className="locations__item-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  handleCityChange(evt, currentCity.name);
                  navigate(AppRoute.Main);
                }}
              >
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <PlacesCardList
              offers={favoriteListDataByCity(city)}
              cardType={CardType.Favorites}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
