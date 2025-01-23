import { CardType } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getNearOffersData } from '../../store/offer-process/offer-selectors';
import { getOffersCards } from '../../utils/utils';

export default function OfferNearPlaces(): JSX.Element {
  const nearOffers = useAppSelector(getNearOffersData).slice(0, 3);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {getOffersCards(nearOffers, CardType.NearBy)}
        </div>
      </section>
    </div>
  );
}
