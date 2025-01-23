import { useNavigate } from 'react-router-dom';
import { AppRoute, CardType } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  getCurrentCity,
  getOffers,
} from '../../store/card-process/card-selectors';
import {
  getOffersCards,
  getRandomKey,
  handleCityChange,
} from '../../utils/utils';

export default function FavoriteList(): JSX.Element {
  const navigate = useNavigate();
  const currentCity = useAppSelector(getCurrentCity);
  const favoriteListData = useAppSelector(getOffers); // заменить на данные с сервера

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

  const getFavoriteListItems = () =>
    favoriteCitiesList.map((city) => (
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
          {getOffersCards(favoriteListDataByCity(city), CardType.Favorites)}
        </div>
      </li>
    ));
  return <ul className="favorites__list">{getFavoriteListItems()}</ul>;
}
