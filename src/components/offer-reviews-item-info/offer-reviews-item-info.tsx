import { Review } from '../../types';
import { getRatingStarStyle } from '../../utils/utils';

export default function OfferReviewsItemInfo({
  comment,
  date,
  rating,
}: Review): JSX.Element {
  const dateObj: Date = new Date(date);
  const getFormattedDateContent = (): string =>
    dateObj.toLocaleDateString('en', { year: 'numeric', month: 'long' });
  const getFormattedDateAttribute = (): string =>
    getFormattedDateContent().split('.').reverse().join('.');
  return (
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span
            style={{
              width: getRatingStarStyle(rating),
            }}
          />
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
