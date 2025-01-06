import { Review } from '../../mocks/reviews';
import OfferReviewsItemInfo from '../offer-reviews-item-info/offer-reviews-item-info';
import OfferReviewsItemUser from '../offer-reviews-item-user/offer-reviews-item-user';

export default function OfferReviewsItem({
  id,
  reviewer,
  ...reviewInfo
}: Review): JSX.Element {
  return (
    <li className="reviews__item" key={id}>
      <OfferReviewsItemUser {...reviewer} />
      <OfferReviewsItemInfo {...reviewInfo} />
    </li>
  );
}
