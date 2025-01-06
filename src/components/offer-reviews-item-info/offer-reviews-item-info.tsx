import { Review } from '../../mocks/reviews';

type OfferReviewsItemInfoProps = Pick<Review, 'rating' | 'comment' | 'date'>;

export default function OfferReviewsItemInfo({
  rating,
  comment,
  date,
}: OfferReviewsItemInfoProps): JSX.Element {
  const dateObj: Date = new Date(date);
  const getFormattedDateContent = (): string =>
    dateObj.toLocaleDateString('en', { year: 'numeric', month: 'long' });
  const getFormattedDateAttribute = (): string =>
    getFormattedDateContent().split('.').reverse().join('.');
  return (
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: `${rating}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{comment}</p>
      <time className="reviews__time" dateTime={getFormattedDateAttribute()}>
        {getFormattedDateContent()}
      </time>
    </div>
  );
}
