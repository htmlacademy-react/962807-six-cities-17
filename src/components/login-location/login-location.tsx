import { useNavigate } from 'react-router-dom';
import { AppRoute, CITIES_NAMES } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCurrentCity } from '../../store/card-process/card-selectors';
import { handleCityChange } from '../../utils/utils';

export default function LoginLocation(): JSX.Element {
  const currentCityName = useAppSelector(getCurrentCity).name;
  const citiesNames = CITIES_NAMES;
  const randomCityName =
    citiesNames[Math.floor(Math.random() * citiesNames.length)];
  const navigate = useNavigate();
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <a
          className="locations__item-link"
          onClick={(evt) => {
            handleCityChange(evt, currentCityName);
            navigate(AppRoute.Main);
          }}
        >
          <span>{randomCityName}</span>
        </a>
      </div>
    </section>
  );
}
