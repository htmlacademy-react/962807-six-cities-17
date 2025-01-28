import React from 'react';
import { CardType } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import {
  getCurrentCity,
  getOfferByCityQuantity,
  getOffersByCity,
} from '../../store/card-process/card-selectors';
import PlacesCardList from '../places-card-list/places-card-list';
import PlacesSort from '../places-sort/places-sort';

export default function PlacesCards(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffersByCity);
  const offersQuantity = useAppSelector(getOfferByCityQuantity);

  return (
    <React.Fragment>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offersQuantity} {`place${offersQuantity === 1 ? '' : 's'}`} to stay in{' '}
        {currentCity.name}
      </b>
      <PlacesSort />
      <div className="cities__places-list places__list tabs__content">
        <PlacesCardList offers={offers} cardType={CardType.Main} />
      </div>
    </React.Fragment>
  );
}
