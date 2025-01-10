import React from 'react';
import CitiesPlacesSort from '../cities-places-sort/cities-places-sort';
type CitiesPlacesProps = {
  offersCount: number;
  children: JSX.Element[];
};

export default function CitiesPlaces({
  children,
  offersCount,
}: CitiesPlacesProps): JSX.Element {
  return (
    <React.Fragment>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
      <CitiesPlacesSort />
      <div className="cities__places-list places__list tabs__content">
        {children}
      </div>
    </React.Fragment>
  );
}
