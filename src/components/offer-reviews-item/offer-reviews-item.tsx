import { Review } from '../../types';
import OfferReviewsItemInfo from '../offer-reviews-item-info/offer-reviews-item-info';
import OfferReviewsItemUser from '../offer-reviews-item-user/offer-reviews-item-user';

export default function OfferReviewsItem(reviewData: Review): JSX.Element {
  const { user, id } = reviewData;
  return (
    <li className="reviews__item" key={id}>
      <OfferReviewsItemUser {...user} />
      <OfferReviewsItemInfo {...reviewData} />
    </li>
  );
}
