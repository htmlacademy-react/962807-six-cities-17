import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/useSelector/useAppSelector';
import { handleCityChange } from '../../utils/utils';

export default function LoginLocation(): JSX.Element {
  const currentCityName = useAppSelector((state) => state.currentCity.name);
  const citiesNames = useAppSelector((state) => state.cities);
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
