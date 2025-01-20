import { City } from '../../types';

type CitiesEmptyProps = {
  currentCity: City;
};

export default function CitiesEmpty({
  currentCity,
}: CitiesEmptyProps): JSX.Element {
  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">
        {/* We could not find any property available at the moment in ${} */}
        {`We could not find any property available at the moment in ${currentCity.name}`}
      </p>
    </div>
  );
}
