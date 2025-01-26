import { AuthStatus, VISIBLE_REVIEW_LIMIT } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getReviewsData } from '../../store/offer-process/offer-selectors';
import { getAuthStatus } from '../../store/user-process/user-selectors';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import OfferReviewsItem from '../offer-reviews-item/offer-reviews-item';

export default function OfferReviews(): JSX.Element {
  const reviews = useAppSelector(getReviewsData).slice(0, VISIBLE_REVIEW_LIMIT);
  const isLogged = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  const getReviews = () =>
    reviews.map((reviewItem) => (
      <OfferReviewsItem {...reviewItem} key={reviewItem.id} />
    ));

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">{getReviews()}</ul>
      {isLogged && <OfferReviewsForm />}
    </section>
  );
}
