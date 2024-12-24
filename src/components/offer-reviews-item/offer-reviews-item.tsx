import OfferReviewsItemInfo from '../offer-reviews-item-info/offer-reviews-item-info';
import OfferReviewsItemUser from '../offer-reviews-item-user/offer-reviews-item-user';

export default function OfferReviewsItem(): JSX.Element {
  return (
    <li className="reviews__item">
      <OfferReviewsItemUser />
      <OfferReviewsItemInfo />
    </li>
  );
}
