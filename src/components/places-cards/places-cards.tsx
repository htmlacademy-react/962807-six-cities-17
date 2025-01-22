import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  getCurrentCity,
  getOfferByCity,
  getOfferByCityQuantity,
} from '../../store/card-process/card-selectors';
import { getOffersCards } from '../../utils/utils';
import PlacesSort from '../places-sort/places-sort';

export default function PlacesCards(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOfferByCity);
  const offersQuantity = useAppSelector(getOfferByCityQuantity);

  return (
    <React.Fragment>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offersQuantity} places to stay in {currentCity.name}
      </b>
      <PlacesSort />
      <div className="cities__places-list places__list tabs__content">
        {getOffersCards(offers, true)}
      </div>
    </React.Fragment>
  );
}
