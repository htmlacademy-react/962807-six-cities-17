import { CardType, NEAR_OFFER_COUNT } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getNearOffersData } from '../../store/offer-process/offer-selectors';
import PlacesCardList from '../places-card-list/places-card-list';

export default function OfferNearPlaces(): JSX.Element {
  const nearOffers = useAppSelector(getNearOffersData).slice(
    0,
    NEAR_OFFER_COUNT
  );

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          <PlacesCardList offers={nearOffers} cardType={CardType.NearBy} />
        </div>
      </section>
    </div>
  );
}
