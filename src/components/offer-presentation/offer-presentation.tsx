import { FullOfferData } from '../../types';
import { getRatingStarStyle } from '../../utils/utils';
import FavoriteButton from '../favorites-button/favorites-button';

export default function OfferPresentation({
  id,
  title,
  type,
  price,
  rating,
  isPremium,
  bedrooms,
  maxAdults,
}: FullOfferData): JSX.Element {
  return (
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">{title}</h1>
        <FavoriteButton offerId={id} isOfferBookmark />
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: getRatingStarStyle(rating) }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">{type}</li>
        <li className="offer__feature offer__feature--bedrooms">{`${bedrooms} Bedrooms`}</li>
        <li className="offer__feature offer__feature--adults">
          {`Max ${maxAdults} ${maxAdults === 1 ? 'adult' : 'adults'}`}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
    </>
  );
}
