import React from 'react';
import CitiesPlacesSort from '../cities-places-sort/cities-places-sort';
import { City } from '../../mocks/cities';
type CitiesPlacesProps = {
  offersCount: number;
  children: JSX.Element[];
  city: City;
};

export default function CitiesPlaces({
  children,
  offersCount,
  city,
}: CitiesPlacesProps): JSX.Element {
  return (
    <React.Fragment>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offersCount} places to stay in {city.name}
      </b>
      {!!offersCount && <CitiesPlacesSort />}
      <div className="cities__places-list places__list tabs__content">
        {children}
      </div>
    </React.Fragment>
  );
}
